import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner/Banner";
import Rentals from "./Rentals/Rentals";
import RentalListings from "./RentalListings/RentalListings";
import Homeownership from "./Homeownership/Homeownership";
import ManageYourProperty from "./ManageYourProperty/ManageYourProperty";
import PropertyManagers from "./PropertyManagers/PropertyManagers";
import AllPagesLinks from "./AllPagesLinks/AllPagesLinks";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Rentals />
      <RentalListings />
      <Homeownership />
      <ManageYourProperty />
      <PropertyManagers />
      <AllPagesLinks/>
    </Box>
  );
};

export default Home;
