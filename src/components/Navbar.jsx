import react from 'react';

const Navbar=() => {
    return (
     
          <div className=" flex flex-row flex justify-between items-center bg-white-600 px-10 border-b border-gray-200">
            <div className="flex flex-1 justify-start">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+=" alt="Bolt logo"/>
      </div>
            <div className="flex flex-1 items-center justify-end ">
            <nav className="space-x-10 flex">
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
