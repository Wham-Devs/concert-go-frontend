import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ConcertGoEdit = ({
  currentEvent,
  updateEvent,
  currentUser,
  deleteEvent,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();
  let current = currentEvent?.find((event) => event.id === +id);

  const [editEvent, setEditEvent] = useState({
    user_id: currentUser?.id,
    city: current?.city,
    state: current?.state,
    venue: current?.venue,
    artist: current?.artist,
    date: current?.date,
    show_time: current?.show_time,
    genre: current?.genre,
    spotify: current?.spotify,
    images: current?.images,
  });

  const handleChange = (e) => {
    setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateEvent(editEvent, current.id);
    navigate(`/concertgoshow/${id}`);
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="flex w-1/2 bg-gradient-to-tr from-red-900 to-red-500 i justify-around items-center">
          <div>
            <h1 className="text-gray-200 font-bold text-7xl font-anton shadow-black italic ">
              CONCERT GO
            </h1>
            <p className="text-white mt-1 ml-1 shadow-lg shadow-gray-800 italic">
              FIND YOUR NEXT VENUE
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center bg-white">
          <Form
            className=" shadow-lg shadow-gray-400 border-gray-200 border-4 p-4 rounded-lg"
            style={{ width: "90%", margin: "auto" }}
          >
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="event-city"
                name="city"
                placeholder="Enter city here"
                type="text"
                onChange={handleChange}
                value={editEvent.city}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="event-state"
                name="state"
                placeholder="Enter state here"
                type="text"
                onChange={handleChange}
                value={editEvent.state}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="venue">Venue</Label>
              <Input
                id="event-venue"
                name="venue"
                placeholder="Enter venue here"
                type="text"
                onChange={handleChange}
                value={editEvent.venue}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="artist">Artist</Label>
              <Input
                id="event-artist"
                name="artist"
                placeholder="Enter artist here"
                type="text"
                onChange={handleChange}
                value={editEvent.artist}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                id="event-date"
                name="date"
                placeholder="Enter date here"
                type="text"
                onChange={handleChange}
                value={editEvent.date}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="show_time">Show Time</Label>
              <Input
                id="show_time"
                name="show_time"
                placeholder="Enter show time here"
                type="text"
                onChange={handleChange}
                value={editEvent.show_time}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="genre">Genre</Label>
              <Input
                id="event-genre"
                name="genre"
                placeholder="Enter genre here"
                type="text"
                onChange={handleChange}
                value={editEvent.genre}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="images">Image URL</Label>
              <Input
                id="event-images"
                name="images"
                placeholder="Enter image URL"
                type="text"
                onChange={handleChange}
                value={editEvent.images}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <FormGroup>
              <Label for="spotify">Spotify URL</Label>
              <Input
                id="event-spotify"
                name="spotify"
                placeholder="Enter Spotify URL"
                type="text"
                onChange={handleChange}
                value={editEvent.spotify}
                className="shadow-lg border-3 border-black"
              />
            </FormGroup>
            <Button onClick={handleSubmit} name="button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ConcertGoEdit;
