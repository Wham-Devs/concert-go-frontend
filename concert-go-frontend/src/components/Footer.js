import React from "react";
import { NavLink } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-black rounded-lg shadow m-0 dark:bg-gray-800 p-0 ">
        <div className="w-full mx-auto max-w-screen-xl p-0 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <NavLink to="https://flowbite.com/" className="hover:underline">
              All Rights Reserved By ConcertGo © 2023{" "}
            </NavLink>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
