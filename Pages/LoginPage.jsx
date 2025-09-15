import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  async function xyz(params) {
    const state = searchParams.get("state"); 
    const code = searchParams.get("code");   
    console.log(state);
    
    const res = await fetch(`http://localhost:8000/api/v1/callback?state=${state}&code=${code}`,{
      method: "GET",
      headers: {
        credentials: "include"
      }
      
    });
  console.log(res);
  }
  
  xyz();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e3ff862b] px-4">
      <div className="bg-blue-950 shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-blue-300 mb-8">
          Login to continue your blogging journey
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-500 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-white">
            Don’t have an account?{"  "}
            <button onClick= {() => {
              navigate("/signup")
            }} className="text-indigo-600 font-semibold hover:underline" >
              Sign Up
            </button>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
