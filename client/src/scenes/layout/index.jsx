import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { UseSelector } from "react-redux";
import Navbar from "components/Navbar";
//import Sidebar from "components/Sidebar";
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        {/** This outlet basically represents the child that will be loaded,based on the page we are, say we are in the dashboard page,so we will load navbar and the outlet will load the dashboard */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
