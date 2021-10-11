import React from 'react';
import LogoSvg from './../Assets/LogoSvg'

const Navbar=() => {
    return (
     
          <div className=" flex flex-row  justify-between items-center bg-white-600 px-5  w-screen md:w-1/2 relative w-full">
            <div className="  flex-1">
              <LogoSvg/>

         </div>
            <div className=" flex-1  ">
            <nav className="space-x-5 flex mx-3">
              <a className="text-xs">Ride</a>
              <a className="text-xs">Become a rider</a>
              <a className="text-xs">Fleet</a>
              <a className="text-xs">Business</a>
           <a className="text-xs">Scooters</a>
             <a className="text-xs">Drive</a>
              <a className="text-xs">Food</a>
               <a className="text-xs">Cities</a>





            </nav>
            
          </div>
            </div>
    
    )

}
export default Navbar;
