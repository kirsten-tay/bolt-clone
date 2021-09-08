import react from'react';
import carSvg from './carSvg'
import HeartSvg from './HeartSvg'
import CallSvg from './CallSvg'

const Next=() =>{
    return(
 
        <div className="flex flex-row my-10">
          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full">
            <carSvg/>
    <span className="text-md">Safe and convenient</span><br/> 
      <span className="text-xs">
      Moving with Bolt is easy, convenient and fast.
      </span>
          </div>
          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full ">
            <HeartSvg/>
    <span className="text-md"> Happy drivers, happy riders</span><br/> 
      <span className="text-xs">
      Bolt drivers earn more thanks to lower commission rates.
      </span>
          </div>

          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full">
            <CallSvg/>
    <span className="text-md"> Always there for you</span><br/> 
      <span className="text-xs">
      Get fast support, whenever you need it.
      </span>
          </div>
          
        </div>



    )
}




export default Next;