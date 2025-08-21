import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppointmentForm from "./pages/AppointmentForm";
import AppointmentList from "./pages/AppointmentList";
import Calender from "./pages/Calender";

import LoginForm from "./pages/auth/LoginForm";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/add-appointment" element={<AppointmentForm />} />
          <Route path="/appointment-list" element={<AppointmentList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
