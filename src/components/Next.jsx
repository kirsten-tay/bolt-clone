import react from'react';
import carSvg from './carSvg'
import HeartSvg from './HeartSvg'

const Next=() =>{
    return(
 
        <div className="flex row">
          <div className="flex-col ">
            <carSvg/>
    <h1> Safe and convenient</h1> 
      <span>
      Moving with Bolt is easy, convenient and fast.
      </span>
          </div>
          <div className="flex-col ">
            <HeartSvg/>
    <h1> Happy drivers, happy riders</h1> 
      <span>
      Bolt drivers earn more thanks to lower commission rates.
      </span>
          </div>

          <div className="flex-col ">
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