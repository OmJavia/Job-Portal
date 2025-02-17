import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(mobile);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark">
      <div className="bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-primary text-white px-2 py-3 outline-none"
            />
            <label className="absolute left-2 top-2 text-gray-400 peer-placeholder-shown:top-7 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all">
              Mobile Number
            </label>
          </div>
          <button type="submit" className="w-full bg-primary text-white px-4 py-2 mt-4 rounded shadow-md hover:bg-secondary transition-all">
            Get OTP 📲
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
