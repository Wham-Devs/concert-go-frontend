import React from "react";
import { useParams } from "react-router-dom";
import spotify from "../assets/spotify.svg";

const ConcertGoShow = ({ currentEvent }) => {
  const { id } = useParams();
  let selectedEvent = currentEvent?.find((event) => event.id === +id);
  if (!selectedEvent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div class="flex bg-black shadow-md rounded-xl overflow-hidden pt-10  ">
          <div class="w-1/2">
            <img
              className="rounded-xl "
              src={selectedEvent.images}
              alt="Image"
              class="object-cover h-full w-full"
            />
          </div>

          <div class="w-1/2 p-6">
            <h2 className="text-9xl font-anton italic font-bold mb-4">
              {selectedEvent.artist}
            </h2>
            <h1 className="text-gray-400">{selectedEvent.genre}</h1>
            <br />
            <br />
            <br />
            <h1 className="text-gray-300">{selectedEvent.venue}</h1>
            <h1 className="text-gray-300">
              {selectedEvent.city}, {selectedEvent.state}
            </h1>{" "}
            <br />
            <h1 className="text-gray-200">
              {selectedEvent.date} @ {selectedEvent.show_time} <br />
            </h1>
          </div>

          <img src={spotify} />
        </div>
      </div>
    </>
  );
};

export default ConcertGoShow;
