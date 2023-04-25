import React from "react";
import Box from "@mui/material/Box";
import { Container, CssBaseline } from "@mui/material";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <Box>
      <Header />
      <Container>
        <CssBaseline />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
