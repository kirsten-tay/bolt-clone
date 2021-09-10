import react from'react'



const Fourth=() => {
    return (
         <div className="flex flex-row bg-green-600 my-10">
             <div className="flex-1 justify-center  relative w-full">
                 <div className="my-10">
                     <span className="text-xl">Ready to ride?</span>
                     </div>
                     <div className="flex flex-row">
                     <div className="flex-col justify-right relative w-full app-badges"> 
                <a href="https://go.onelink.me/app/9c5a3c35/" className="app-store-button">
                    <img src="https://bolt.eu/static/8de0c47bd0804c7387b44eb24f7af748/en.svg" class="w-13 h-10"alt="app-badges.app-store-alt"/></a>
                    </div>
                    <div className="flex-col justify-left relative w-full app-badges">
                <a href="https://go.onelink.me/app/d81f73c6/" class="play-store-button">
                    <img  src="https://bolt.eu/static/fc711801f3c70175cf946b523b97ac30/en.svg"class="w-15 h-10" alt="app-badges.play-store-alt"/></a>
                    </div>
            </div>
                 
             <p class="mt-4 text-xs">Or sign up
              to start driving.</p>
             </div>
             </div>
            
    


    )


}


export default Fourth;