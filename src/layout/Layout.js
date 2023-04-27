import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Layout;
