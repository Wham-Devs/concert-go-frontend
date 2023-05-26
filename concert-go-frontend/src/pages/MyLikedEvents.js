import React from "react";
import rightarrow from "../assets/rightarrow.svg";
import leftarrow from "../assets/leftarrow.svg";
import { NavLink } from "react-router-dom";

const MyLikedEvents = ({ likedEvents, currentEvent }) => {
  const myLikedEvents = currentEvent?.filter((event) =>
    likedEvents?.some((likedEvent) => likedEvent.liked === event.id)
  );

  console.log("likedEvents:", likedEvents);
  console.log("currentEvent:", currentEvent);
  return (
    <>
      <div className=" bg-black">
        {" "}
        <br />
        <br />
        <div className="flex items-center justify-center">
          <img src={leftarrow} className="h-60" alt="Logo" />

          <h1 className="text-5xl text-gray-500 font-anton italic text-center bg-black ml-0 mr-0 relative z-10">
            LIKED EVENTS
          </h1>

          <img src={rightarrow} className="h-60" alt="Logo" />
        </div>
        <div className="grid grid-cols-4 gap-8 justify-center align-middle pt-10">
          {myLikedEvents?.map((event) => {
            const {
              artist,
              genre,
              venue,
              city,
              state,
              date,
              show_time,
              images,
              id,
            } = event;

            return (
              <div key={id}>
                <NavLink
                  to={`/concertgoshow/${id}`}
                  activeClassName="active-link"
                  style={{ textDecoration: "none" }}
                  key={id}
                >
                  <div className="max-w-3xl mx-auto overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mt-4  hover:bg-white">
                    <div className="relative">
                      <img
                        src={images}
                        alt="Card Image"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                    <div className="p-6">
                      <h1 className="italic text-gray-400 font-anton">
                        {artist}
                      </h1>
                      <h4 className="text-bold text-gray-500">{genre}</h4>{" "}
                      <br />
                      <h5 className="text-gray-400">
                        {venue} <br /> {city}, {state}
                      </h5>
                      <h6 className="text-gray-500">
                        {date} @ {show_time}
                      </h6>
                    </div>
                    <div className="flex justify-end"></div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyLikedEvents;
