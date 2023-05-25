import React from "react";

const TicketMasterAPI = ({ currentTicketMaster }) => {
  const uniqueArtists = {};

  if (
    currentTicketMaster &&
    currentTicketMaster._embedded &&
    currentTicketMaster._embedded.events
  ) {
    currentTicketMaster._embedded.events.forEach((event) => {
      if (!uniqueArtists[event.name]) {
        uniqueArtists[event.name] = event;
      }
    });
  }

  return (
    <div className="grid grid-cols-4 gap-8 justify-center align-middle pt-10">
      {currentTicketMaster &&
        Object.values(uniqueArtists).map((event) => (
          <div key={event.id}>
            <div className="max-w-3xl mx-auto overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 hover:bg-white">
              <div className="relative">
                <img
                  src={event.images[0].url}
                  alt="Card Image"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h1 className="italic text-gray-400 font-anton ">
                  {event._embedded.attractions[0].name}
                </h1>
                <h4 className="text-bold text-gray-500">
                  {event.classifications[0].genre.name}
                </h4>{" "}
                <br />
                <h5 className="text-gray-400">
                  {event._embedded.venues[0].name} <br />{" "}
                  {event._embedded.venues[0].city.name},{" "}
                  {event._embedded.venues[0].state.name}
                </h5>
                <h6 className="text-gray-500">
                  {" "}
                  {event.dates.start.localDate} @ {event.dates.start.localTime}
                </h6>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TicketMasterAPI;
