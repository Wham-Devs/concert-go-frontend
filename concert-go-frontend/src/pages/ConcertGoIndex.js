import React, { useState } from "react";
import TicketMasterAPI from "./TicketMasterAPI";
import { NavLink } from "react-router-dom";
import rightarrow from "../assets/rightarrow.svg";
import leftarrow from "../assets/leftarrow.svg";

const ConcertGoIndex = ({ currentEvent, currentTicketMaster }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filterEvents = Array.isArray(currentEvent)
    ? currentEvent.filter(({ city }) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="bg-black">
        <div className="bg-black">
          <br />
          <br />
          <div className="flex items-center justify-center">
            <img src={leftarrow} className="h-60" alt="Logo" />

            <h1 className="text-5xl text-gray-500 font-anton italic text-center bg-black ml-0 mr-0 relative z-10">
              ALL EVENTS
            </h1>

            <img src={rightarrow} className="h-60" alt="Logo" />
          </div>
          <br />
          <div className="flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Events"
              className="px-form py-2 border-4 border-red-700 p-3 shadow-lg shadow-gray-200 rounded-md w-1/2 mb-10"
            />
            <br />
          </div>
          <div className="grid grid-cols-4 gap-8 justify-center align-middle pt-10">
            {filterEvents?.map(
              ({
                city,
                state,
                venue,
                artist,
                date,
                show_time,
                genre,
                images,
                id,
              }) => (
                <NavLink
                  to={`/concertgoshow/${id}`}
                  activeClassName="active-link"
                  style={{ textDecoration: "none" }}
                  key={id}
                >
                  <div className="max-w-3xl mx-auto overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 hover:bg-white">
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
                  </div>
                </NavLink>
              )
            )}
          </div>
        </div>
        <TicketMasterAPI currentTicketMaster={currentTicketMaster} />
      </div>
    </>
  );
};

export default ConcertGoIndex;
