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
              <a href="Hero" className="text-s">Ride </a>
              <a href="Hero" className="text-s">Become </a>
              <a href="Hero" className="text-s">Fleet</a>
              <a href="Hero" className="text-s">Business</a>
           <a href="Hero" className="text-s">Scooters</a>
             <a href="Hero" className="text-s">Drive</a>
              <a href="Hero" className="text-s">Food</a>
               <a href="Hero" className="text-s">Cities</a>





            </nav>
            
          </div>
            </div>
    
    )

}
export default Navbar;
