import React from "react";
import uberIcon from "../assets/uber-logo.png";
import uberHome from "../assets/uber-home.png";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${uberHome})` }}
    >
      
      {/* Logo */}
      <img
        src={uberIcon}
        alt="Uber Logo"
        className="w-16 ml-6 mt-6"
      />

      {/* Bottom Card */}
      <div className="bg-[#f2b200] px-6 py-6 -t-3xl shadow-lg">
        <h2 className="text-3xl font-bold">
          Get Started with Uber
        </h2>

        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
        >
          Continue
        </Link>
      </div>

    </div>
  );
}

export default Start;