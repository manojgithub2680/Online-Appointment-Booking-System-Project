import { Link } from "react-router-dom";
import UserService from "../service/UserService";

const Navbar = () => {
  const isAuthenticated = UserService.isAuthenticated();

  const logOut = () => {
    const confirmDelete = window.confirm("Are you sure you want to log out?");
    if (confirmDelete) {
      UserService.logout();
    }
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="/">Online Appointment Booking System</a>
          </h1>
          <ul className="flex space-x-6">
            {isAuthenticated && (
              <li>
                <Link to="/appointment-list">All Appointments</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/add-appointment">Add Appointment</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/calender">Calender</Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/" onClick={logOut}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
