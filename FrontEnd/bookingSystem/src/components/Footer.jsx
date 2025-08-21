import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} Online Appointment Booking System</p>
      <p className="text-xs">Manoj Kumar</p>
      <p className="text-xs">9693380172</p>
    </footer>
  );
}

export default Footer;
