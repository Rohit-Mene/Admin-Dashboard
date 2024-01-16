import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { UseSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
const Layout = () => {
  {/**isNonMobile is true if it is a desktop */}
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const[isSidebarOpen,setIsSidebarOpen] = useState(true);

  return (
    <Box display = {isNonMobile ? "flex":"block"}width="100%" height="100%">
     <Sidebar 
        isNonMobile = {isNonMobile}
        drawerWidth = "250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
     />
      <Box>
        <Navbar 
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen = {setIsSidebarOpen}
        />
        {/** This outlet basically represents the child that will be loaded,based on the page we are, say we are in the dashboard page,so we will load navbar and the outlet will load the dashboard */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
