import React from "react";
import { NavLink } from "react-router-dom";
import rightarrow from "../assets/rightarrow.svg"
import leftarrow from "../assets/leftarrow.svg"
import Swal from "sweetalert2";

const ConcertGoProtectedIndex = ({
  currentEvent,
  currentUser,
  deleteEvent,
}) => {
  const myEvents = currentEvent?.filter(
    (events) => currentUser?.id === events.user_id
  );

  const showAlert = () => {
    Swal.fire({
      title: 'Event Deleted!',
      text: 'Your event has been deleted.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  };
  return (
    <div className=" bg-black"> <br/><br/>
               <div className="flex items-center justify-center">
		  
      <img src={leftarrow} className="h-60" alt="Logo" />
    
    <h1 className="text-5xl text-gray-500 font-anton italic text-center bg-black ml-0 mr-0 relative z-10">
      YOUR EVENTS
    </h1>
    
      <img src={rightarrow} className="h-60" alt="Logo" />
    
  </div>
        <div className="grid grid-cols-4 gap-8 justify-center align-middle pt-10">
      {myEvents.map((events, index) => {
        return (
          <div key={index}>
            <div className="max-w-3xl mx-auto overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100  hover:bg-white">
              <div className="relative">
                <img
                  src={events.images}
                  alt="Card Image"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h1 className="italic text-gray-400 font-anton">
                  {events.artist}
                </h1>
                <h4 className="text-bold text-gray-500">{events.genre}</h4>{" "}
                <br />
                <h5 className="text-gray-400">
                  {events.venue} <br /> {events.city}, {events.state}
                </h5>
                <h6 className="text-gray-500">
                  {events.date} @ {events.show_time}
                </h6>
              </div>
              <div className="flex justify-end">
                <NavLink to={`/concertgoedit/${events.id}`} className="mx-2">
                  <button className="backdrop bg-transparent text-gray-700 bg-opacity-0 border border-white px-4 pl-4 py-2 mb-2 mx-auto rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg  text-center transform hover:scale-105 transition-transform duration-300">
                    Edit Event
                  </button>
                </NavLink>
                <NavLink
                  className="mx-auto transform hover:scale-105 transition-transform duration-300"
                  to="/concertgoprotectedindex"
                >
                  <button
                    onClick={() => {deleteEvent(events.id);
                    showAlert();}}
                    className="backdrop bg-transparent text-red-500 bg-opacity-0 border border-white px-4 pl-4 py-2 mb-2 mx-auto rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg  text-center"
                  >
                    Delete Event
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ConcertGoProtectedIndex;