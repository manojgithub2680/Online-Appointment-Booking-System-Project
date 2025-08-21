import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../service/UserService";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.signup({
        fullName,
        email,
        password,
        role,
      });

      console.log(response);

      setFullName("");
      setEmail("");
      setPassword("");
      setRole("");
      alert("registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering user");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white py-4 px-6 rounded-2xl shadow-lg border border-gray-300 mt-4">
        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          SignUp Form
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              value={fullName}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

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

          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <input
              type="text"
              value={role}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="w-full mr-1 py-3 mb-1 bg-gradient-to-r from-green-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            onClick={signUp}
          >
            SignUp
          </button>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            onClick={() => navigate("/login")}
          >
            Already have an account? login here
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
