import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import OtpVerify from "./OtpVerify";
import loginlog from "../assets/loginlog.png";

export default function AuthModal() {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE */}
      <div
        className="
      hidden md:flex 
      items-center justify-center
      bg-gradient-to-br from-cyan-500 to-blue-600
    "
      >
        <div className="text-center">
          {/* Replace with your image */}
          <img
            src={loginlog}
            alt="Auth Illustration"
            className="w-[300px] mx-auto"
          />

          <h1 className="text-4xl font-bold text-white mt-6">Welcome Back</h1>

          <p className="text-white/80 mt-3 text-lg">
            Secure authentication system for your project
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center items-center bg-slate-50 px-4">
        <div className="w-full max-w-[430px] bg-white p-8 rounded-2xl shadow-xl">
          {activeForm === "login" && (
            <LoginForm
              goRegister={() => setActiveForm("register")}
              goForgot={() => setActiveForm("forgot")}
            />
          )}

          {activeForm === "register" && (
            <RegisterForm
              goLogin={() => setActiveForm("login")}
              goOtp={() => setActiveForm("otp")}
            />
          )}

          {activeForm === "forgot" && (
            <ForgotPassword goLogin={() => setActiveForm("login")} />
          )}

          {activeForm === "otp" && (
            <OtpVerify goLogin={() => setActiveForm("login")} />
          )}
        </div>
      </div>
    </div>
  );
}
