import react from 'react';
import carSvg from './carSvg'


const Third=() => {
    return (
     <div className="flex flex-row">
          <div className=" flex flex-row   ">
            <div className=" flex flex-col justify-center  w-screen md:w-1/2 relativw w-full items-center ">
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTguNzYgNDUuNjciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iNzQuMDMiIHgyPSI3NC4wMyIgeTI9IjM5LjcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWFlOWVlIi8+PHN0b3Agb2Zmc2V0PSIuNDciIHN0b3AtY29sb3I9IiNlN2U2ZWMiLz48c3RvcCBvZmZzZXQ9Ii44IiBzdG9wLWNvbG9yPSIjZGVkZWU0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDRkNGRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iNDMuNDMiIHkxPSItLjE3IiB4Mj0iNDMuNDMiIHkyPSI0Mi44NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RjZGNlMyIvPjxzdG9wIG9mZnNldD0iLjMzIiBzdG9wLWNvbG9yPSIjZDhkOGRmIi8+PHN0b3Agb2Zmc2V0PSIuNjYiIHN0b3AtY29sb3I9IiNjY2NjZDUiLz48c3RvcCBvZmZzZXQ9Ii45OSIgc3RvcC1jb2xvcj0iI2I4YjhjMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I3YjdjMiIvPjwvbGluZWFyR3JhZGllbnQ+PHN0eWxlPi5jbHMtMXtmaWxsOiMyZjMxM2Z9LmNscy00e2ZpbGw6I2E5YWJiOX08L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGlkPSJjYXItY2xvY2siPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMyAyMi45MWgtNHYyMi43Nmg0YzQuMzkgMCA4LTUuMSA4LTExLjM4cy0zLjY1LTExLjM4LTgtMTEuMzh6Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy0xIiBjeD0iOTguOTkiIGN5PSIzNC4yOSIgcng9IjcuOTQiIHJ5PSIxMS4zOCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5LjI1IDIyLjkxaC00djIyLjc2aDRjNC4zOSAwIDcuOTQtNS4xIDcuOTQtMTEuMzhzLTMuNTUtMTEuMzgtNy45NC0xMS4zOHoiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI0NS4yOCIgY3k9IjM0LjI5IiByeD0iNy45NCIgcnk9IjExLjM4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTkuNTggMjQuODFoLTR2MjAuODZoNGM0LjM5IDAgNy45NC01LjEgNy45NC0xMS4zOHMtMy41Mi05LjQ4LTcuOTQtOS40OHpNNzEuMiAyNC44MWgtNHYyMC44Nmg0YzQuMzkgMCA3Ljk0LTUuMSA3Ljk0LTExLjM4cy0zLjU1LTkuNDgtNy45NC05LjQ4eiIvPjxwYXRoIGQ9Ik0xMTguNzUgMjguNDV2NS43OGE0IDQgMCAwMS0zLjM1IDRsLTkuMjcgMS40NUgzNS44NWwtMy4wOC0yLjU4QzMwIDM2LjMzIDI5LjMgMTUuODkgMjkuMyAxNS44OWwuNjktMkwzMy40OSA0YTEyLjExIDEyLjExIDAgMDAxLjM5LTEuMTkgMTAuNSAxMC41IDAgMDAuNzMtLjgxQzM3LjQ4LS4xOCAzNCAwIDM3LjQ2IDBoMjcuMjdhMjAuMzEgMjAuMzEgMCAwMTEwLjE1IDIuNzhjLjY1LjM2IDEuMjkuNzYgMS45MyAxLjE5LjQ1LjMuOTEuNjQgMS4zNSAxTDkyIDEzLjlsMjMgOWE2IDYgMCAwMTIuNiAybC4wNi4xYTUuNiA1LjYgMCAwMTEuMDcgMi44NiAyLjkzIDIuOTMgMCAwMS4wMi41OXoiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPjxwYXRoIGQ9Ik04Ni44NiAyOC4zNXY1LjRhNiA2IDAgMDEtNiA2SDE0TDguNDEgMzcuNWMtNC43MS0xLjI5LTktNC4yNS04LjM0LTEwLjE4bDEuMjQtOS45MmE1IDUgMCAwMTMuODktNC4yNmwuMjctLjA2YTExLjI0IDExLjI0IDAgMDA1LjM0LTIuNzNMMTUuMjQgNmM0LjA3LTMuNjkgOC43OS02IDE0LTZoOS42OWExNi42NSAxNi42NSAwIDAxOS4yMSAyLjc4IDE3IDE3IDAgMDEzLjcyIDMuNDJsNy44MyA3LjdMODMgMjIuNzhhNiA2IDAgMDEzLjg2IDUuNTd6IiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMSIgY3g9IjE1LjYxIiBjeT0iMzQuMjkiIHJ4PSI3Ljk0IiByeT0iMTEuMzgiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTQiIGN4PSIxNS42MSIgY3k9IjM0LjI5IiByeD0iNC42NSIgcnk9IjcuNjUiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSI2Ny4yMyIgY3k9IjM0LjI5IiByeD0iNy45NCIgcnk9IjExLjM4Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy00IiBjeD0iNjcuMjMiIGN5PSIzNC4yOSIgcng9IjQuNjUiIHJ5PSI3LjY1Ii8+PHBhdGggZD0iTTkzLjggMzAuNDhsLjU0LjkzLS40OC0uODZ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkyIDEzLjlINTkuNjlsLTcuODMtNy43YTE3IDE3IDAgMDAtMy43Ny0zLjQySDY5QTE5LjkxIDE5LjkxIDAgMDE3OS44IDZ6IiBmaWxsPSIjNTg1YTY4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTkuNjkgMTMuOUgyMC4wNmEzIDMgMCAwMS0xLjg1LTUuMjZMMjEgNi40NWExNi43MiAxNi43MiAwIDAxMTAuNC0zLjY3aDE2LjY5YTE3IDE3IDAgMDEzLjc3IDMuNDJ6Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTE4Ljc1IDI4LjQ1djJoLTQuMDdhMiAyIDAgMDEtMS41OC0uOGwtMS42MS0yLjE0YTIgMiAwIDAwLTEuNTktLjc5SDk2YTIgMiAwIDAwLTEuNTguNzlsLTEuNjEgMi4xNGEyIDIgMCAwMS0xLjU5LjhoLTcuODZhMiAyIDAgMDEtMS41OS0uODJsLTEuMDctMS40N0EyIDIgMCAwMTgyLjMgMjVoMzUuMzRhNS42IDUuNiAwIDAxMS4wNyAyLjg2IDIuOTMgMi45MyAwIDAxLjA0LjU5eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="/>
                  <h1>Get a ride</h1>
                  <span>Bolt offers you a ride in minutes.</span>
         </div>

         <div className="flex flex-col justify-center mx-10  w-screen md:w-1/2 relative w-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Mi4wMiA3Mi44NSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iNjcuNzIiIHdpZHRoPSIyOS4yNCIgaGVpZ2h0PSI1LjEzIiByeD0iMS4zOSIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHJlY3QgY2xhc3M9ImNscy0xIiB5PSI2Mi41OSIgd2lkdGg9IjI5LjI0IiBoZWlnaHQ9IjUuMTMiIHJ4PSIxLjM5Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0zIj48cmVjdCBjbGFzcz0iY2xzLTEiIHk9IjU3LjQ2IiB3aWR0aD0iMjkuMjQiIGhlaWdodD0iNS4xMyIgcng9IjEuMzkiLz48L2NsaXBQYXRoPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lfS5jbHMtN3tmaWxsOiNmY2NmMDd9LmNscy05e2ZpbGw6I2ZhYjMwNn0uY2xzLTEwe2ZpbGw6I2ZjZWU4Zn08L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Ik0yNy43MSA3Ljc4aDQ5LjA3YTMuMjkgMy4yOSAwIDAxMy4yOSAzLjI5djE0LjM1YTMuMjkgMy4yOSAwIDAxLTMuMjkgMy4yOUgyNy43MVY3Ljc4eiIgdHJhbnNmb3JtPSJyb3RhdGUoLTIxLjE3IDUzLjg4MyAxOC4yMzgpIiBmaWxsPSIjMzRjZjg0Ii8+PHBhdGggZD0iTTI4LjY2IDEyLjE3aDUyLjQ3YTMuNCAzLjQgMCAwMTMuNCAzLjRWMjkuN2EzLjQgMy40IDAgMDEtMy40IDMuNEgyOC42NlYxMi4xN3oiIHRyYW5zZm9ybT0ibWF0cml4KC45OSAtLjE3IC4xNyAuOTkgLTMuMDIgOS45NSkiIGZpbGw9IiMzYmU5OTQiLz48cmVjdCB4PSIyMS40NSIgeT0iMTYuNzQiIHdpZHRoPSI2Ny43OCIgaGVpZ2h0PSI1Ni4xMSIgcng9IjQuNjUiIGZpbGw9IiNlN2U4ZWMiLz48cmVjdCB4PSI3MC44NCIgeT0iMzQuODciIHdpZHRoPSIyMS4xOSIgaGVpZ2h0PSIxOS44NiIgcng9IjMuNTkiIGZpbGw9IiNkMWQyZGEiLz48Y2lyY2xlIGN4PSI4MS40MyIgY3k9IjQ0LjgiIHI9IjQuNDgiIGZpbGw9IiNhN2E5YjciLz48cmVjdCBjbGFzcz0iY2xzLTciIHk9IjY3LjcyIiB3aWR0aD0iMjkuMjQiIGhlaWdodD0iNS4xMyIgcng9IjEuMzkiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+PHBhdGggY2xhc3M9ImNscy05IiBkPSJNMCA3MS4zOGgyOS40OHYxLjQ3SDB6Ii8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0zLjYxIDY3LjcyaDQuMTZ2My42NkgzLjYxeiIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeT0iNjIuNTkiIHdpZHRoPSIyOS4yNCIgaGVpZ2h0PSI1LjEzIiByeD0iMS4zOSIvPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgtMikiPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTAgNjYuMjVoMjkuNDh2MS40N0gweiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJNMy42MSA2Mi41OWg0LjE2djMuNjZIMy42MXoiLz48cmVjdCBjbGFzcz0iY2xzLTciIHk9IjU3LjQ2IiB3aWR0aD0iMjkuMjQiIGhlaWdodD0iNS4xMyIgcng9IjEuMzkiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoLTMpIj48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0wIDYxLjEyaDI5LjQ4djEuNDdIMHoiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTMuNjEgNTcuNDZoNC4xNnYzLjY2SDMuNjF6Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTkiIGN4PSIyNy42MSIgY3k9IjU4LjIzIiByPSIxNC42MiIvPjxjaXJjbGUgY2xhc3M9ImNscy0xMCIgY3g9IjI3LjYxIiBjeT0iNTguMjMiIHI9IjEyLjIiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNyIgY3g9IjI3LjYxIiBjeT0iNTguMjMiIHI9IjguODIiLz48L2c+PC9nPjwvc3ZnPg=="/>
                <h1>The best prices</h1>
                <span>We aim to offer the best ride prices in every city. See for yourself!</span>

            </div>
            <div className="flex flex-col justify-center my-4 mx-10 w-screen md:w-1/2 relative w-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjIgODAuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDF7ZmlsbDojM2JlODkzfS5zdDV7ZmlsbDojNjY3NWZmfTwvc3R5bGU+PGcgaWQ9IkxheWVyXzEtMiI+PHBhdGggaWQ9IkZpbGwtMS0yIiBkPSJNNjIgMjkuNkM2MiA0NSA0OS42IDU3LjQgMzQuMiA1Ny40UzYuNCA0NSA2LjQgMjkuNiAxOC45IDEuOCAzNC4yIDEuOEM0OS42IDEuOCA2MiAxNC4zIDYyIDI5LjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZWVlZWY2Ii8+PGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMzQuOCIgY3k9IjQ0LjMiIHI9IjguMyIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNS44IDguOGMxIC4yIDIgLjQgMy4xLjQgNS4xIDAgOS42LTIuOSAxMS44LTcuMS01LjYuNy0xMC44IDMuMS0xNC45IDYuN3pNNi42IDMyLjJjLjYgNi4xIDMuMSAxMS42IDYuOSAxNS45LjQtMS4yLjYtMi41LjYtMy45IDAtNS4zLTMuMS05LjgtNy41LTEyeiIvPjxwYXRoIGQ9Ik0zNi43IDEuOWMtMy40IDMuNi01LjYgOC41LTUuNiAxMy45IDAgMTEuMiA5IDIwLjIgMjAuMiAyMC4yIDMuOCAwIDcuNC0xLjEgMTAuNS0zIC4xLTEuMS4yLTIuMy4yLTMuNEM2MiAxNS4xIDUwLjkgMy4yIDM2LjcgMS45eiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzYmU4OTMiLz48cGF0aCBkPSJNNS40IDExLjJoMjUuNGMyLjYgMCA0LjYgMi4xIDQuNiA0LjZWNzRjMCAyLjYtMi4xIDQuNi00LjYgNC42SDUuNEMyLjggNzguNi44IDc2LjUuOCA3NFYxNS45Yy0uMS0yLjYgMi00LjcgNC42LTQuN3oiIGZpbGw9IiNlNmU3ZWIiLz48ZGVmcz48cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik01LjQgMTEuMmgyNS40YzIuNiAwIDQuNiAyLjEgNC42IDQuNlY3NGMwIDIuNi0yLjEgNC42LTQuNiA0LjZINS40QzIuOCA3OC42LjggNzYuNS44IDc0VjE1LjljLS4xLTIuNiAyLTQuNyA0LjYtNC43eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPjxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0tLjkgNjguN2gzOHYxMS40aC0zOHpNLS40IDcuMWgzNi44djExLjRILS40eiIvPjwvZz48Y2lyY2xlIGN4PSIxOC4xIiBjeT0iNzMuNiIgcj0iMi44IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg=="/>
             <h1>Easy to use</h1>
              <span>Get wherever you need to go as quickly as possible.</span>
            </div>
            </div>
             </div>
          
          
        

   
    
    )

}
export default Third;
 

