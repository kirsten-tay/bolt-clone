import react from 'react';

const Hero=() => {
    return (
     
          <div className=" flex flex-row justify-between items-center ">
            <div className="flex-col bg-green-600">
            <h1 class="text-3xl">The fast, affordable way to ride.</h1>
            <p class="text-center download-app-text text-md-left">Download the Bolt app</p>
            <p class="text-center request-bolt-online-text text-md-left">Request Bolt online without an app</p>
            <div className="app-badges">
                <a href="https://go.onelink.me/app/9c5a3c35/" className="app-store-button">
                    <img src="https://bolt.eu/static/8de0c47bd0804c7387b44eb24f7af748/en.svg" class="w-13 h-10"alt="app-badges.app-store-alt"/></a>
                <a href="https://go.onelink.me/app/d81f73c6/" class="play-store-button">
                    <img  src="https://bolt.eu/static/fc711801f3c70175cf946b523b97ac30/en.svg"class="w-15 h-10" alt="app-badges.play-store-alt"/></a>
                    </div>
            </div>
          </div>

   
    
    )

}
export default Hero;


