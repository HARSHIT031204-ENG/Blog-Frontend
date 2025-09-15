import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import googlepic from "./google.jpeg";
import githubpic from "./github.png";
import { useGoogleLogin } from "@react-oauth/google";
import { Googleauth } from "./Api";
import { loginsuccess } from "../src/Strore/authslice";
import axios from "axios"
const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Google login response handler
  const handleResponse = async (authResult) => {
    console.log("In google login", authResult.code);
    try {
      if (authResult.code) {
        const result = await Googleauth(authResult.code); // must be awaited
        const { email, name, image } = result.data.user;

        console.log("set token", result.data.token);
        
        const userinfo = result.data.user;
        console.log("user information", userinfo);
        localStorage.setItem("user", JSON.stringify(userinfo));
        localStorage.setItem("token", result.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

        dispatch(
          loginsuccess({
            email: userinfo.email,
            name: userinfo.name,
            image: userinfo.image,
          })
        );
        console.log("RESPONSE DATA", result.data.user);


        navigate("/");
      }
    } catch (err) {
      console.log("Error in google response", err);
    }
  };

  // Initialize Google login
  const googleLoginHandler = useGoogleLogin({
    onSuccess: handleResponse,
    onError: handleResponse,
    flow: "auth-code",
  });

  // GitHub login handler
  const GithubLoginHandler = () => {
    console.log("git client id ", import.meta.env.VITE_GITHUB_CLIENT_ID);

    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
      redirect_uri: "http://localhost:5173/github/callback",
      scope: "user:email",
    });
    console.log(params);

    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  };

  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if(user && token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch(loginsuccess(JSON.parse(user)))
    } 
  }, [])
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e3ff862b]">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-700 rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>
        <p className="text-center text-blue-200">
          Join us and start your blogging journey 🚀
        </p>

        {/* Inputs */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Harshii Garg"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={() => navigate("/verify-otp")}
          className="w-1/2 py-2 mt-4 ml-22 cursor-pointer px-4 bg-[#34b1ff] text-white font-semibold rounded-lg shadow-md hover:bg-[#e85a5a] transition"
        >
          Sign Up
        </button>

        {/* Social Signup */}
        <div className="w-64 py-3 mx-auto mt-2 px-6 bg-gradient-to-r from-[#34b1ff] to-[#1a73e8] text-white font-semibold rounded-2xl shadow-lg flex items-center justify-between transition-all duration-300">
          <span className="text-lg">Signup with</span>
          <div className="flex items-center gap-3">
            {/* Google */}
            <button
              type="button"
              onClick={() => googleLoginHandler()} // <-- actually call it
              className="bg-white p-2 rounded-xl shadow hover:scale-110 transition"
            >
              <img
                src={googlepic}
                alt="Google logo"
                className="h-6 cursor-pointer w-6"
              />
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={GithubLoginHandler}
              className="bg-white p-2 rounded-xl shadow hover:scale-110 transition"
            >
              <img
                src={githubpic}
                alt="GitHub logo"
                className="h-6 cursor-pointer w-6"
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-[#3B82F6] font-medium hover:underline cursor-pointer"
          >
            login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
