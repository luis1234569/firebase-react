import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="">
      <nav className="bg-cyan-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around h-16 ">
            <div className="flex">
              <a href="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-8"
                  src="../assets/aex.png"
                  alt="Workflow"
                />
                <span className="ml-2 font-bold text-lg text-white">AEX</span>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <a
                href="/"
                className="px-3 py-2 text-white rounded-md text-sm font-medium  hover:text-gray-500"
              >
                Home
              </a>
              <a
                href="/crud-links"
                className="px-3 py-2 text-white rounded-md text-sm font-medium  hover:text-gray-500"
              >
                Links
              </a>
              <a
                href="#!"
                className="px-3 py-2 text-white rounded-md text-sm font-medium hover:text-gray-500"
              >
                Team
              </a>
            </div>
            <div className="hidden sm:flex sm:items-center justify-between sm:ml-6">
              {!user ? (
                <>
                  <a href="/login">
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium ">
                      Sign In
                    </button>
                  </a>
                  <a href="/register">
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium ml-2">
                      Sign Up
                    </button>
                  </a>
                </>
              ) : (
                <>
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium ml-2"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
