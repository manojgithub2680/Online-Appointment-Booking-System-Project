import { useState } from "react";

import { jwtDecode } from "jwt-decode";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const saveAppointment = async (e) => {
    e.preventDefault();

    if (!name || !contact || !time || !date) {
      alert("All fields are required!");
      return;
    }

    const formattedTime = time.length === 2 ? `${time}:00:00` : time;
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);

      if (decodedToken.role.includes("ADMIN")) {
        alert("You must be a user to book an appointment!");
        navigate("/appointment-list");
      }

      const response = await UserService.saveAppointment(token, {
        name,
        contact,
        date,
        time: formattedTime,
      });

      alert("Appointment added successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-5 rounded-2xl shadow-lg border border-gray-200 mt-4">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
          Book Your Appointment
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              value={contact}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              placeholder="Enter your phone number"
              pattern="\d{10}"
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              value={date}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Time</label>
            <input
              type="number"
              value={time}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              min="10"
              max="17"
              step="1"
              placeholder="Enter hour 10AM - 16PM"
              required
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-600 transition duration-300 transform hover:scale-105"
            onClick={saveAppointment}
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
