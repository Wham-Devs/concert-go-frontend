import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ login }) => {
	const formRef = useRef();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
    console.log(formData)
		const data = Object.fromEntries(formData);
		const userInfo = {
			user: { email: data.email, password: data.password },
		};
		login(userInfo);
		navigate("/");
		e.target.reset()
	};

	return (
		<>
			<div className="h-screen flex">
				<div className="flex w-1/2 bg-gradient-to-tr from-red-900 to-red-500 i justify-around items-center">
					<div>
						<h1 className="text-gray-200 font-bold text-7xl font-anton shadow-black ">
							CONCERT GO
						</h1>
						<p className="text-white mt-1 ml-1 shadow-lg shadow-gray-800">
							FIND YOUR NEXT VENUE
						</p>
						<button
							type="submit"
							className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
							Read More
						</button>
					</div>
				</div>
				<div className="flex w-1/2 justify-center items-center bg-white">
					<form ref={ formRef } onSubmit={handleSubmit} className="bg-white">
						<h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome Back</h1>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								/>
							</svg>
							<input
								className="pl-2 outline-none border-none"
								type="text"
								name="email"
								placeholder="Email Address"
                
							/>
						</div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								className="pl-2 outline-none border-none"
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
						<button
							type="submit"
							className="block w-full bg-red-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
							Login
						</button>
						<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
							Forgot Password ?
						</span>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignIn;
