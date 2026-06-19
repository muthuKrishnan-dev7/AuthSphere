import { useState } from "react";

export default function ForgotPassword({ goLogin }) {
  const [forgotData, setForgotData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForgotData({
      ...forgotData,
      email: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(forgotData);
    alert("Reset link sent");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Forgot Password</h2>

      <input
        placeholder="Enter Email"
        value={forgotData.email}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-cyan-400 py-3 mt-4 rounded-lg font-bold"
      >
        Send Link
      </button>

      <p
        onClick={goLogin}
        className="text-center mt-4 text-blue-600 cursor-pointer"
      >
        Back to Login
      </p>
    </>
  );
}
