import React from 'react'
import 'remixicon/fonts/remixicon.css';

function LocationSearchPanel() {
  return (
    <div>
        <div className='flex items-center justify-start my-4'>
            <h2 className='bg-[#eee] h-10 flex items-center justify-center rounded-full w-10 mr-4 '>
            <i class="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium'>24B, near kapoor's cafe,Sheryyians coding school,Bhopal</h4>
        </div>
    </div>
  )
}

export default LocationSearchPanel