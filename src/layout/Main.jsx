import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Main;
