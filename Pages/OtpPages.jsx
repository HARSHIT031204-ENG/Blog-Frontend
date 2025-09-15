import React from "react";
import { useNavigate } from "react-router-dom";


const VerifyOtpPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1B2655] to-[#3B82F6]">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-600 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#ffffff]">
          Verify OTP
        </h2>
        <p className="text-center text-[#ffdbdb]">
          Enter the 6-digit code sent to your email 📩
        </p>

        <form className="space-y-5">
          {/* OTP Inputs */}
          <div className="flex justify-between gap-2">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg border rounded-lg focus:ring-2 focus:ring-[#3B82F6] outline-none"
              />
            ))}
          </div>

          {/* Button */}
          <button
          onClick={() => navigate("/login")}
            type="button"
            className="w-full py-2 px-4 bg-[#FF6B6B] text-white font-semibold rounded-lg shadow-md hover:bg-[#e85a5a] transition"
          >
            Verify
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button className="text-[#cef63b] font-semibold cursor-pointer border-2 p-2 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out  rounded-lg border-amber-50">
            Resend Code
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
