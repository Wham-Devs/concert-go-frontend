import React from "react";
import error from '../assets/404.png'

const NotFound = () => {
	return (
		<div className="bg-cover">
			<img src={error} className="w-screen" />
		</div>
	);
};

export default NotFound;
