import React from "react";
import { useParams } from "react-router-dom";
import spotify from "../assets/spotify.svg";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { GrLike } from "react-icons/gr";

const ConcertGoShow = ({ currentEvent, createLiked }) => {
  const { id } = useParams();
  let selectedEvent = currentEvent?.find((event) => event.id === +id);
  if (!selectedEvent) {
    return <div>Loading...</div>;
  }
  const handleLike = (id) => {
    const likedId = parseInt(id, 10);
    const newLikedEvent = { liked: likedId };
    createLiked(newLikedEvent);
  };
  const showAlert = () => {
    Swal.fire({
      title: "Liked!",
      text: "Your event has been liked.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-5xl w-full overflow-hidden shadow-lg bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <div className="relative">
              <img
                src={selectedEvent.images}
                alt="Card Image"
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h1 className="italic text-7xl text-gray-400 font-anton">
                {selectedEvent.artist}
              </h1>
              <h4 className="text-bold text-4xl text-gray-500">
                {selectedEvent.genre}
              </h4>{" "}
              <br />
              <h5 className="text-gray-400 text-3xl">
                {selectedEvent.venue} <br /> {selectedEvent.city},{" "}
                {selectedEvent.state}
              </h5>
              <h6 className="text-gray-500 text-2xl">
                {selectedEvent.date} @ {selectedEvent.show_time}
              </h6>
              <button
                className="text-7xl text-green-300"
                onClick={() => {
                  handleLike(id);
                  showAlert();
                }}
              >
                <GrLike class="likeicon" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <NavLink to={selectedEvent.spotify} target="_blank">
            <img
              className="h-64 transform hover:scale-105 transition-transform duration-300"
              src={spotify}
              alt="Spotify Logo"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ConcertGoShow;
