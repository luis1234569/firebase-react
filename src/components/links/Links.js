import React from 'react'
import ListLinks from './ListLinks'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Links() {
  return (
    <div className="">
      <nav className="bg-cyan-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
            <img className="h-8 w-8" src="../assets/aex.png" alt="Workflow"/>
              <span className="ml-2 font-bold text-lg text-white">AEX</span>
            </a>
            <div className="hidden sm:ml-6 sm:flex">
              <a href="#!" className="px-3 py-2 text-white rounded-md text-sm font-medium  hover:text-gray-500">Company</a>
              <a href="#!" className="px-3 py-2 text-white rounded-md text-sm font-medium hover:text-gray-500">Team</a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium">Log In</button>
          </div>
        </div>
      </div>
    </nav>
      <ListLinks></ListLinks>
      <ToastContainer />
    </div>
  )
}

export default Links