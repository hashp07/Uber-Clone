import React from 'react'
import 'remixicon/fonts/remixicon.css';

function LocationSearchPanel(props) {
  

  const locations = [
    "21B, near mane's cafe,Sheryyians coding school,Bhopal",
    "22B, near kadam's cafe,Sheryyians coding school,Bhopal",
    "23B, near vibhute's cafe,Sheryyians coding school,Bhopal",
    "24B, near parab's cafe,Sheryyians coding school,Bhopal"
  ]



  return (
    <div>

      {
        locations.map(function(location, index){
          return <div 
          key={index}
          onClick={()=>{
            props.setvehiclePanelOpen(true); 
            props.setPanelOpen(false);
          }}
          className='flex items-center justify-start my-2 gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl '>
            <h2 className='bg-[#eee] h-10 flex items-center justify-center rounded-full w-10 mr-4 '>
            <i class="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium'>{location}</h4>
        </div>
        })
      }
        
    </div>
  )
}

export default LocationSearchPanel