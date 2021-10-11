import React from 'react';
import image from './../Assets/image.jpg';

const Hero=() => {
    return (
     
          <div className=" flex flex-row  ">
            <div className=" flex flex-col justify-center w-screen md:w-1/2 relativw w-full items-center bg-green-600">
          <div className="m-5 text-white"> 
            <h1 class=" text-4xl ">The fast, affordable way to ride.</h1>
            < span className="  download-app-text text-xs-left">Download the Bolt app</span>
           </div>
            <div className="app-badges">
                <a href="https://go.onelink.me/app/9c5a3c35/" className="app-store-button">
                    <img src="https://bolt.eu/static/8de0c47bd0804c7387b44eb24f7af748/en.svg" class="w-13 h-10"alt="app-badges.app-store-alt"/></a>
                <a href="https://go.onelink.me/app/d81f73c6/" class="play-store-button">
                    <img  src="https://bolt.eu/static/fc711801f3c70175cf946b523b97ac30/en.svg"class="w-15 h-10" alt="app-badges.play-store-alt"/></a>
                    </div>
            </div>
            <div className="flex flex-col justify-center  w-screen md:w-1/2 relative w-full">
                <img src={image}/>

            </div>
          </div>

   
    
    )

}
export default Hero;
 

