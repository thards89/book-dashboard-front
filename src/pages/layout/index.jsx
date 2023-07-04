import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar.jsx";
import Sidebar from "components/Sidebar.jsx";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    return (
      <Box display={isNonMobile ? "flex" : "block"}  width="100%" height="100%">
        <Sidebar
          // user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        ></Sidebar>
          <Box flexGrow={1}>
              <Navbar 
              // user={data || {}}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              />
              <Outlet />
          </Box>
      </Box>
    )
};

export default Layout;
