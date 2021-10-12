import React from 'react';
import LogoSvg from './../Assets/LogoSvg'

const Navbar=() => {
    return (
     
          <div className=" flex flex-row  justify-between item-center bg-white-600 px-5 py-5 w-screen md:w-1/2 relative w-full">
            <div className="  flex-1 mx-10">
              <LogoSvg/>

         </div>
            <div className=" flex-1  ">
            <nav className="space-x-10 flex mx-10">
              <a className="text-s">Ride </a>
              <a className="text-s">Become a rider</a>
              <a className="text-s">Fleet</a>
              <a className="text-s">Business</a>
           <a className="text-s">Scooters</a>
             <a className="text-s">Drive</a>
              <a className="text-s">Food</a>
               <a className="text-s">Cities</a>





            </nav>
            
          </div>
            </div>
    
    )

}
export default Navbar;
