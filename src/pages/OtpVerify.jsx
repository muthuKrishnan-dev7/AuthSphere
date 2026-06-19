import { useEffect, useState } from "react";

export default function OtpVerify({ goLogin }) {
  const [otpData, setOtpData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const [timer, setTimer] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setOtpData({
      ...otpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerify = () => {
    console.log(otpData);
    alert("Signup Successful");
    goLogin();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Verify OTP</h2>

      <div className="flex gap-2 justify-center mb-4">
        {Object.keys(otpData).map((key) => (
          <input
            key={key}
            maxLength="1"
            name={key}
            value={otpData[key]}
            onChange={handleChange}
            className="w-12 h-12 border text-center rounded-lg"
          />
        ))}
      </div>

      <p className="text-center mb-4">
        OTP Valid: {Math.floor(timer / 60)}:
        {(timer % 60).toString().padStart(2, "0")}
      </p>

      <button
        onClick={handleVerify}
        className="w-full bg-cyan-400 py-3 rounded-lg font-bold"
      >
        Verify OTP
      </button>
    </>
  );
}
