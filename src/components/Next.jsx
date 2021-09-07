import react from'react';
import carSvg from './carSvg'
import HeartSvg from './HeartSvg'
import CallSvg from './CallSvg'

const Next=() =>{
    return(
 
        <div className="flex flex-row my-10">
          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full">
            <carSvg/>
    <h1> Safe and convenient</h1> 
      <span>
      Moving with Bolt is easy, convenient and fast.
      </span>
          </div>
          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full ">
            <HeartSvg/>
    <h1> Happy drivers, happy riders</h1> 
      <span>
      Bolt drivers earn more thanks to lower commission rates.
      </span>
          </div>

          <div className="flex-col justify-center  w-screen md:w-1/2 relative w-full">
            <CallSvg/>
    <h1> Always there for you</h1> 
      <span>
      Get fast support, whenever you need it.
      </span>
          </div>
          
        </div>



    )
}




export default Next;