import react from 'react';
import LogoSvg from './../Assets/LogoSvg'

const Navbar=() => {
    return (
     
          <div className=" flex flex-row flex justify-between items-center bg-white-600 px-5 border-b border-gray-200">
            <div className=" flex flex-1">
              <LogoSvg/>

         </div>
            <div className="flex flex-1  ">
            <nav className="space-x-8 flex">
              <a className="text-sm">Ride</a>
              <a className="text-sm">Become a rider</a>
              <a className="text-sm">Fleet</a>
              <a className="text-sm">Business</a>
           <a className="text-sm">Scooters</a>
             <a className="text-sm">Drive</a>
              <a className="text-sm">Food</a>
               <a className="text-sm">Cities</a>





            </nav>
            
          </div>
            </div>
    
    )

}
export default Navbar;
