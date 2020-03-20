import { Link } from "gatsby";
import React, { useState } from "react";
import config from "../../data/SiteConfig";

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const menuLinks = config.menuLinks;
  return (
    <nav className="bg-indigo-600 shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center mr-2 -ml-2 md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-100 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-800 focus:text-white"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <svg
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${isExpanded ? `block` : `hidden`} md:ml-6 md:flex`}
            >
              {menuLinks.map(link => (
                <Link
                  className="inline-flex items-center px-1 pt-1 mx-4 text-sm font-medium leading-5 text-gray-100 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-white hover:border-white focus:outline-none focus:text-gray-700 focus:border-white"
                  key={link.name}
                  to={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:border-white focus:shadow-outline-indigo active:bg-white"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Call To Action</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
