import React from 'react'
import carImage from "../assets/carImage.png";
import motoImage from "../assets/motoImage.png";
import autoImage from "../assets/autoImage.jpg";

function VehiclPanel(props) {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0'><i
        onClick={()=>{
        props.setvehiclePanelOpen(false)
      }}
        className="ri-arrow-down-wide-fill text-3xl text-gray-200"></i></h5>

        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        
        {/* Vehicle Card 1 */}
        <div 
          onClick={() => {
            props.setSelectedVehicle(true);
            props.setConfirmedRidePanel(true);
          }}
          className={`flex border-2 rounded-xl p-3 w-full bg-white items-center justify-between mb-3 cursor-pointer transition-all ${
            props.selectedVehicle === 'uberGo' ? 'border-black' : 'border-gray-400 hover:border-gray-500'
          }`}
        >
          <img src={carImage} alt="Car" className='h-14 w-1/4 object-contain'/>
          <div className='w-1/2 flex flex-col pl-2'>
            <h4 className='font-medium text-base flex items-center gap-2'>
              UberGo <span className='text-sm flex items-center'><i className="ri-user-3-fill mr-1"></i>4</span>
            </h4>
            <h5 className='font-medium text-sm text-gray-800'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-500 line-clamp-1'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4 text-right'>₹150</h2>
        </div>

        {/* Vehicle Card 2 */}
        <div 
          onClick={() => {
            props.setSelectedVehicle(true);
            props.setConfirmedRidePanel(true);
          }}
          className={`flex border-2 rounded-xl p-3 w-full bg-white items-center justify-between mb-3 cursor-pointer transition-all ${
            props.selectedVehicle === 'moto' ? 'border-black' : 'border-gray-400 hover:border-gray-500'
          }`}
        >
          <img src={motoImage} alt="Moto" className='h-14 w-1/4 object-contain'/>
          <div className='w-1/2 flex flex-col pl-2'>
            <h4 className='font-medium text-base flex items-center gap-2'>
              MotorCycle <span className='text-sm flex items-center'><i className="ri-user-3-fill mr-1"></i>1</span>
            </h4>
            <h5 className='font-medium text-sm text-gray-800'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-500 line-clamp-1'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4 text-right'>₹65</h2>
        </div>

        {/* Vehicle Card 3 */}
        <div 
          onClick={() => {
            props.setSelectedVehicle(true);
            props.setConfirmedRidePanel(true);
          }}
          className={`flex border-2 rounded-xl p-3 w-full bg-white items-center justify-between mb-3 cursor-pointer transition-all ${
            props.selectedVehicle === 'auto' ? 'border-black' : 'border-gray-400 hover:border-gray-500'
          }`}
        >
          <img src={autoImage} alt="Auto" className='h-14 w-1/4 object-contain'/>
          <div className='w-1/2 flex flex-col pl-2'>
            <h4 className='font-medium text-base flex items-center gap-2'>
              UberAuto <span className='text-sm flex items-center'><i className="ri-user-3-fill mr-1"></i>3</span>
            </h4>
            <h5 className='font-medium text-sm text-gray-800'>1 min away</h5>
            <p className='font-normal text-xs text-gray-500 line-clamp-1'>No haggling auto rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4 text-right'>₹118</h2>
        </div>
    </div>
  )
}

export default VehiclPanel