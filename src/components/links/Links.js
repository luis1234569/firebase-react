import React from "react";
import ListLinks from "./ListLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Links() {
  return (
    <>
      <ListLinks />
      <ToastContainer />
    </>
  );
}

export default Links;
