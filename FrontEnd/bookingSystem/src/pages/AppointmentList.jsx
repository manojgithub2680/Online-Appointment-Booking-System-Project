import { useEffect, useState } from "react";
import UserService from "../service/UserService";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      const response = await UserService.getAllAppointments(token);

      console.log("Appointments:", response.data);

      const data = response.data?.data || response.data;
      setAppointments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await UserService.deleteAppointment(id, token);
      alert("Appointment deleted successfully!");
      getAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-cyan-900 uppercase">
          Appointment Details
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left border-b">ID</th>
                <th className="py-3 px-6 text-left border-b">Name</th>
                <th className="py-3 px-6 text-left border-b">Contact</th>
                <th className="py-3 px-6 text-left border-b">Date</th>
                <th className="py-3 px-6 text-left border-b">Time</th>
                <th className="py-3 px-6 text-left border-b">Options</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td className="py-1 px-6 border-b">{appointment.id}</td>
                    <td className="py-1 px-6 border-b">{appointment.name}</td>
                    <td className="py-1 px-6 border-b">
                      {appointment.contact}
                    </td>
                    <td className="py-1 px-6 border-b">{appointment.date}</td>
                    <td className="py-1 px-6 border-b">{appointment.time}</td>

                    <td className="py-2 px-6 text-left border-b">
                      <button
                        className="text-white bg-red-500  font-medium rounded-lg px-2 py-2 text-center mr-2 mb-2"
                        onClick={() => {
                          if (confirm("are you sure?")) {
                            deleteAppointment(appointment.id);
                          }
                        }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No appointments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
