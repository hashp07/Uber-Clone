import React from "react";
import carImage from "../assets/carImage.png";
import 'remixicon/fonts/remixicon.css'; // Added import to ensure icons load

function ConfirmedRide(props) {
  return (
    <div className="flex flex-col bg-white relative pb-4">
      
      {/* Absolute Close Button pinned to top right */}
      <div 
        onClick={()=>{
        props.setConfirmedRidePanel(false);
      }}
        className="absolute top-0 right-0 p-2 cursor-pointer z-10"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-500 hover:text-black transition-colors"></i>
      </div>

      {/* Swipe Handle (Visual only) */}
      <div className="w-full flex justify-center pt-2 pb-6">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Confirm your Ride
      </h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        
        {/* Car Image */}
        <div className="w-full flex justify-center py-2 bg-gray-50 rounded-2xl mb-4">
          <img src={carImage} alt="Car" className="h-24 object-contain drop-shadow-md" />
        </div>

        {/* Ride Details List */}
        <div className="w-full flex flex-col gap-2 mt-2">
          
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
            <i className="ri-map-pin-fill text-xl text-gray-800"></i>
            <div>
              <h3 className="text-lg font-bold text-gray-800">562/11-A</h3>
              <p className="text-sm text-gray-500 font-medium -mt-1">
                laxmi talav, radhanagari
              </p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
            <i className="ri-map-pin-user-fill text-xl text-gray-800"></i>
            <div>
              <h3 className="text-lg font-bold text-gray-800">562/11-A</h3>
              <p className="text-sm text-gray-500 font-medium -mt-1">
                laxmi talav, radhanagari
              </p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-fill text-xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-bold text-gray-800">₹150</h3>
              <p className="text-sm text-gray-500 font-medium -mt-1">
                Cash
              </p>
            </div>
          </div>
          
        </div>

        {/* Action Button */}
        <button onClick={()=>{
          props.setVehicleFound(true);
          props.setConfirmedRidePanel(false);
        }} className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-lg">
          Confirm & Request
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRide;