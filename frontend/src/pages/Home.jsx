import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import VehiclPanel from '../components/VehiclPanel';

// Make sure these paths match your project structure
import uberIcon from "../assets/uber-logo.png";
import ubermap from "../assets/uber-map.jpg";
import LocationSearchPanel from '../components/LocationSearchPanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null); // or default to 'uberGo'
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelOpenRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70vh", // Using vh makes it responsive on mobile
        padding: "24px",
        duration: 0.4,
        ease: "power3.out" // Added a smoother easing curve
      });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.3
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0vh",
        padding: "0px",
        duration: 0.4,
        ease: "power3.inOut"
      });

      gsap.to(panelCloseRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.2
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);


  return (
    <div className="h-screen w-full relative overflow-hidden bg-gray-100">
      
      {/* Background Map */}
      <div
      
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ backgroundImage: `url(${ubermap})` }}
      />

      {/* Logo */}
      <img
        src={uberIcon}
        alt="Uber Logo"
        className="absolute top-6 left-6 w-16 z-10 drop-shadow-md"
      />

      {/* Bottom Sheet Container */}
      <div className="absolute bottom-0 w-full flex flex-col justify-end z-20">
        
        {/* Form Section */}
        <div className="bg-yellow-500 p-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] relative">
          
          <i
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="ri-arrow-down-wide-line absolute top-6 right-6 text-2xl cursor-pointer hidden text-gray-500 hover:text-black transition-colors"
          ></i>

          <h4 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
            Find a trip
          </h4>

          <form onSubmit={submitHandler} className="relative">
            {/* Visual Tracking Line (Dots and Line) */}
            <div className="absolute left-[14px] top-[24px] bottom-[24px] w-1 bg-gray-800 rounded-full flex flex-col justify-between items-center z-10">
               <div className="w-2.5 h-2.5 bg-gray-800 rounded-full absolute -top-1"></div>
               <div className="w-2.5 h-2.5 bg-gray-800 absolute -bottom-1 rounded-sm"></div>
            </div>

            {/* Inputs Container */}
            <div className="flex flex-col gap-4 pl-10">
              <input
                onClick={() => setPanelOpen(true)}
                className="bg-gray-100 px-4 py-3.5 text-base rounded-lg w-full outline-none focus:bg-gray-200 focus:ring-2 focus:ring-black transition-all font-medium placeholder:text-gray-500"
                type="text"
                placeholder="Add a pick-up location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />

              <input
                onClick={() => setPanelOpen(true)}
                className="bg-gray-100 px-4 py-3.5 text-base rounded-lg w-full outline-none focus:bg-gray-200 focus:ring-2 focus:ring-black transition-all font-medium placeholder:text-gray-500"
                type="text"
                placeholder="Add drop-off location"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Search Results Panel */}
        <div
          ref={panelRef}
          className="bg-white h-0 overflow-hidden border-t border-gray-100"
        >
          <LocationSearchPanel setPanelOpen={setPanelOpen} 
    setvehiclePanelOpen={setvehiclePanelOpen} />
        </div>

      </div>

     {/* Vehicle Options */}
      <div ref={vehiclePanelOpenRef}       className='fixed w-full z-30 bottom-0 bg-white p-3 py-14 px-4 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.05)] translate-y-full'>
        
        <VehiclPanel setSelectedVehicle={setSelectedVehicle} setvehiclePanelOpen={setvehiclePanelOpen}
        setConfirmedRidePanel={setConfirmedRidePanel} />

      </div>

      {/* confirmed ride component */}
      <div ref={confirmedRidePanelRef} className='fixed w-full z-30 bottom-0 bg-white p-3 py-14 px-4 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.05)] translate-y-full'>
        
        <ConfirmedRide setSelectedVehicle={setSelectedVehicle} setvehiclePanelOpen={setvehiclePanelOpen} 
        setConfirmedRidePanel={setConfirmedRidePanel}
        setVehicleFound={setVehicleFound}
        />

      </div>

       <div ref={vehicleFoundRef} className='fixed w-full z-30 bottom-0 bg-white p-3 py-14 px-4 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.05)] translate-y-full'>
        
        <LookingForDriver setSelectedVehicle={setSelectedVehicle} setvehiclePanelOpen={setvehiclePanelOpen} 
        setConfirmedRidePanel={setConfirmedRidePanel}

        />

      </div>
    </div>
  );
};

export default Home;