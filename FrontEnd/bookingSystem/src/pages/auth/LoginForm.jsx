import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../service/UserService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await UserService.login(email, password);
      console.log(response);
      if (response) {
        localStorage.setItem("token", response.data);

        alert("Login successful");
        navigate("/add-appointment");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-5 rounded-2xl shadow-lg border border-gray-300 mt-4">
        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Login Form
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="tel"
              value={email}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="text"
              value={password}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mr-1 bg-gradient-to-r from-green-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            onClick={login}
          >
            Login
          </button>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            onClick={() => navigate("/signup")}
          >
            New User? Sign Up here
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
