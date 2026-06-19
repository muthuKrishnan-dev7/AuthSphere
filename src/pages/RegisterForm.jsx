import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function RegisterForm({ goOtp, goLogin }) {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // validation
  const validateForm = () => {
    let newErrors = {};

    // check empty fields
    Object.keys(registerData).forEach((field) => {
      if (!registerData[field].trim()) {
        newErrors[field] = "Required";
      }
    });

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (registerData.email && !emailRegex.test(registerData.email)) {
      newErrors.email = "Invalid Email";
    }

    // phone validation (10 digits)
    if (registerData.phone && !/^[0-9]{10}$/.test(registerData.phone)) {
      newErrors.phone = "Invalid Phone";
    }

    // password minimum length
    if (registerData.password && registerData.password.length < 6) {
      newErrors.password = "Min 6 chars";
    }

    // confirm password match
    if (
      registerData.password &&
      registerData.confirmPassword &&
      registerData.password !== registerData.confirmPassword
    ) {
      newErrors.confirmPassword = "Password mismatch";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // signup
  const handleSignup = () => {
    if (!validateForm()) return;

    console.log(registerData);

    alert("OTP sent to your mail");

    goOtp();
  };

  // dynamic input style
  const inputClass = (field) =>
    `w-full border p-3 mb-3 rounded-lg outline-none transition-all
    ${
      errors[field]
        ? "border-red-500 pr-10 focus:ring-2 focus:ring-red-300"
        : "border-gray-300 focus:ring-2 focus:ring-cyan-300"
    }`;

  return (
    <>
      <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

      {/* First + Last Name */}
      <div className="flex gap-2">
        <div className="relative w-full">
          <input
            name="firstname"
            placeholder="First Name"
            value={registerData.firstname}
            onChange={handleChange}
            className={inputClass("firstname")}
          />
        </div>

        <div className="relative w-full">
          <input
            name="lastname"
            placeholder="Last Name"
            value={registerData.lastname}
            onChange={handleChange}
            className={inputClass("lastname")}
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleChange}
          className={inputClass("email")}
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <input
          name="phone"
          placeholder="Phone Number"
          value={registerData.phone}
          onChange={handleChange}
          className={inputClass("phone")}
        />
      </div>

      {/* Password */}
      <div className="relative">
        <input
          name="password"
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={registerData.password}
          onChange={handleChange}
          className={inputClass("password")}
        />

        {/* Eye */}
        <span
          onClick={() => setShowPass(!showPass)}
          className="absolute right-3 top-4 cursor-pointer select-none"
        >
          {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <input
          name="confirmPassword"
          type={showConfirmPass ? "text" : "password"}
          placeholder="Confirm Password"
          value={registerData.confirmPassword}
          onChange={handleChange}
          className={inputClass("confirmPassword")}
        />

        {/* Eye */}
        <span
          onClick={() => setShowConfirmPass(!showConfirmPass)}
          className="absolute right-3 top-4 cursor-pointer select-none"
        >
          {showPass ? <FaRegEye /> : <FaRegEyeSlash />}{" "}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleSignup}
        className="
          w-full 
          bg-cyan-400 
          hover:bg-cyan-500
          py-3 
          rounded-lg 
          font-bold 
          transition-all
        "
      >
        Sign Up
      </button>

      {/* Login */}
      <p className="text-center mt-4 text-sm">
        Already have account?{" "}
        <span
          onClick={goLogin}
          className="text-blue-600 cursor-pointer font-medium"
        >
          Login
        </span>
      </p>
    </>
  );
}
