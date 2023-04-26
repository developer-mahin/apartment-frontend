import { Box, Container } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SharedComponent from "../../../components/SharedComponent/SharedComponent";

const RentalListings = () => {
  return (
    <Box>
      <SectionTitle
        title="The Most Rental Listings"
        subtitle="Choose from over 1 million apartments, houses, condos, and townhomes for rent."
      />

      <Container>
        <Box
          sx={{
            mt: {
              xs: "4rem",
              md: "0px",
            },
            borderBottom: "1px solid #ddd",
            pb: {
              xs: "2rem",
              md: "4rem",
            },
          }}
        >
          <SharedComponent
            title="Renting Made Simple"
            subtitle="Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device."
            linkText="Find Out More"
            image="https://i.ibb.co/k4F8Gsr/widget-renting-made-simple-469.png"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RentalListings;
