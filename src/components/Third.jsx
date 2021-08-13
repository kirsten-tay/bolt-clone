import react from 'react';


const Third=() => {
    return (
     
          <div className=" flex flex-row  ">
            <div className=" flex flex-col justify-center w-screen md:w-1/2 relativw w-full items-center bg-green-600">
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTguNzYgNDUuNjciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iNzQuMDMiIHgyPSI3NC4wMyIgeTI9IjM5LjcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWFlOWVlIi8+PHN0b3Agb2Zmc2V0PSIuNDciIHN0b3AtY29sb3I9IiNlN2U2ZWMiLz48c3RvcCBvZmZzZXQ9Ii44IiBzdG9wLWNvbG9yPSIjZGVkZWU0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDRkNGRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iNDMuNDMiIHkxPSItLjE3IiB4Mj0iNDMuNDMiIHkyPSI0Mi44NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RjZGNlMyIvPjxzdG9wIG9mZnNldD0iLjMzIiBzdG9wLWNvbG9yPSIjZDhkOGRmIi8+PHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiNjY2NjZDUiLz48c3RvcCBvZmZzZXQ9Ii45OSIgc3RvcC1jb2xvcj0iI2I4YjhjMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I3YjdjMiIvPjwvbGluZWFyR3JhZGllbnQ+PHN0eWxlPi5jbHMtMXtmaWxsOiMyZjMxM2Z9LmNscy00e2ZpbGw6I2E5YWJiOX08L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGlkPSJjYXItY2xvY2siPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMyAyMi45MWgtNHYyMi43Nmg0YzQuMzkgMCA4LTUuMSA4LTExLjM4cy0zLjY1LTExLjM4LTgtMTEuMzh6Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy0xIiBjeD0iOTguOTkiIGN5PSIzNC4yOSIgcng9IjcuOTQiIHJ5PSIxMS4zOCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5LjI1IDIyLjkxaC00djIyLjc2aDRjNC4zOSAwIDcuOTQtNS4xIDcuOTQtMTEuMzhzLTMuNTUtMTEuMzgtNy45NC0xMS4zOHoiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI0NS4yOCIgY3k9IjM0LjI5IiByeD0iNy45NCIgcnk9IjExLjM4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTkuNTggMjQuODFoLTR2MjAuODZoNGM0LjM5IDAgNy45NC01LjEgNy45NC0xMS4zOHMtMy41Mi05LjQ4LTcuOTQtOS40OHpNNzEuMiAyNC44MWgtNHYyMC44Nmg0YzQuMzkgMCA3Ljk0LTUuMSA3Ljk0LTExLjM4cy0zLjU1LTkuNDgtNy45NC05LjQ4eiIvPjxwYXRoIGQ9Ik0xMTguNzUgMjguNDV2NS43OGE0IDQgMCAwMS0zLjM1IDRsLTkuMjcgMS40NUgzNS44NWwtMy4wOC0yLjU4QzMwIDM2LjMzIDI5LjMgMTUuODkgMjkuMyAxNS44OWwuNjktMkwzMy40OSA0YTEyLjExIDEyLjExIDAgMDAxLjM5LTEuMTkgMTAuNSAxMC41IDAgMDAuNzMtLjgxQzM3LjQ4LS4xOCAzNCAwIDM3LjQ2IDBoMjcuMjdhMjAuMzEgMjAuMzEgMCAwMTEwLjE1IDIuNzhjLjY1LjM2IDEuMjkuNzYgMS45MyAxLjE5LjQ1LjMuOTEuNjQgMS4zNSAxTDkyIDEzLjlsMjMgOWE2IDYgMCAwMTIuNiAybC4wNi4xYTUuNiA1LjYgMCAwMTEuMDcgMi44NiAyLjkzIDIuOTMgMCAwMS4wMi41OXoiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPjxwYXRoIGQ9Ik04Ni44NiAyOC4zNXY1LjRhNiA2IDAgMDEtNiA2SDE0TDguNDEgMzcuNWMtNC43MS0xLjI5LTktNC4yNS04LjM0LTEwLjE4bDEuMjQtOS45MmE1IDUgMCAwMTMuODktNC4yNmwuMjctLjA2YTExLjI0IDExLjI0IDAgMDA1LjM0LTIuNzNMMTUuMjQgNmM0LjA3LTMuNjkgOC43OS02IDE0LTZoOS42OWExNi42NSAxNi42NSAwIDAxOS4yMSAyLjc4IDE3IDE3IDAgMDEzLjcyIDMuNDJsNy44MyA3LjdMODMgMjIuNzhhNiA2IDAgMDEzLjg2IDUuNTd6IiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjE1LjYxIiBjeT0iMzQuMjkiIHJ4PSI3Ljk0IiByeT0iMTEuMzgiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTQiIGN4PSIxNS42MSIgY3k9IjM0LjI5IiByeD0iNC42NSIgcnk9IjcuNjUiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI2Ny4yMyIgY3k9IjM0LjI5IiByeD0iNy45NCIgcnk9IjExLjM4Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy00IiBjeD0iNjcuMjMiIGN5PSIzNC4yOSIgcng9IjQuNjUiIHJ5PSI3LjY1Ii8+PHBhdGggZD0iTTkzLjggMzAuNDhsLjU0LjkzLS40OC0uODZ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkyIDEzLjlINTkuNjlsLTcuODMtNy43YTE3IDE3IDAgMDAtMy43Ny0zLjQySDY5QTE5LjkxIDE5LjkxIDAgMDE3OS44IDZ6IiBmaWxsPSIjNTg1YTY4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTkuNjkgMTMuOUgyMC4wNmEzIDMgMCAwMS0xLjg1LTUuMjZMMjEgNi40NWExNi43MiAxNi43MiAwIDAxMTAuNC0zLjY3aDE2LjY5YTE3IDE3IDAgMDEzLjc3IDMuNDJ6Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTE4Ljc1IDI4LjQ1djJoLTQuMDdhMiAyIDAgMDEtMS41OC0uOGwtMS42MS0yLjE0YTIgMiAwIDAwLTEuNTktLjc5SDk2YTIgMiAwIDAwLTEuNTguNzlsLTEuNjEgMi4xNGEyIDIgMCAwMS0xLjU5LjhoLTcuODZhMiAyIDAgMDEtMS41OS0uODJsLTEuMDctMS40N0EyIDIgMCAwMTgyLjMgMjVoMzUuMzRhNS42IDUuNiAwIDAxMS4wNyAyLjg2IDIuOTMgMi45MyAwIDAxLjA0LjU5eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="/>
                  <h1>Get a ride</h1>
                  <span>Bolt offers you a ride in minutes.</span>
         </div>

         <div className="flex flex-col justify-center  w-screen md:w-1/2 relative w-full">
                <img src="PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Mi4wMiA3Mi44NSI"/>
                <h1>The best prices</h1>
                <span>We aim to offer the best ride prices in every city. See for yourself!</span>

            </div>
            <div className="flex flex-col justify-center  w-screen md:w-1/2 relative w-full">
                <img src={image}/>

            </div>

            <div className=" flex-row  ">
                <h1>Get a ride in minutes!</h1>
                <span>Pick your destination, request a ride, meet your driver, enjoy the journey.</span>
            </div>
          </div>
          
        

   
    
    )

}
export default Hero;
 

