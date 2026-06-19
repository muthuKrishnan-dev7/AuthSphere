import { useState } from "react";

export default function LoginForm({ goRegister, goForgot }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    console.log(loginData);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        name="username"
        placeholder="Username"
        value={loginData.username}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded-lg"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <p
        onClick={goForgot}
        className="text-sm text-blue-500 cursor-pointer mt-2"
      >
        Forgot Password?
      </p>

      <button
        onClick={handleLogin}
        className="w-full bg-cyan-400 py-3 rounded-lg mt-5 font-bold"
      >
        Login
      </button>

      <p className="text-center mt-4">
        Create an account?{" "}
        <span
          onClick={goRegister}
          className="text-blue-600 cursor-pointer font-semibold"
        >
          Sign Up
        </span>
      </p>
    </>
  );
}
