import React, { useState } from "react";
import Carouselx from "../components/Carouselx";
import TicketMasterAPI from "./TicketMasterAPI";

const ConcertGoIndex = ({ currentEvent, currentTicketMaster }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const filterEvents = Array.isArray(currentEvent)
		? currentEvent.filter(({ artist }) =>
				artist.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: [];

	return (
		<>
			<div className="bg-black">
				<h1 className="text-2xl font-bold mb-4 ml-4 text-center">Event List</h1>
				<div className="container mx-auto max-w-screen-lg">
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search events"
						className="px-form py-2 border border-grey-400 rounded-md"
					/>
				</div>
				<Carouselx />
        

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
							}) => (
								<div className="max-w-3xl mx-auto overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
									<div className="relative">
										<img
											src={images}
											alt="Card Image"
											className="w-full h-64 object-cover rounded-xl"
										/>
									</div>
									<div className="p-6">
										<h1 className="italic text-gray-400 font-anton ">
											{artist}
										</h1>
										<h4 className="text-bold text-gray-500">{genre}</h4> <br />
										<h5 className="text-gray-400">
											{venue} <br /> {city}, {state}
										</h5>
										<h6 className="text-gray-500">
											{" "}
											{date} @ {show_time}
										</h6>
									</div>
								</div>
							)
						)}
					</div>
          <TicketMasterAPI currentTicketMaster={currentTicketMaster} />
				</div>
		</>
	);
};

export default ConcertGoIndex;
