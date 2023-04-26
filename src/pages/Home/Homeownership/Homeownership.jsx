import { Box, Container } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SharedComponent from "../../../components/SharedComponent/SharedComponent";

const Homeownership = () => {
  return (
    <Box sx={{ py: "2rem" }}>
      <SectionTitle
        title="Discover Homeownership on"
        subtitle="Renting is great, but maybe you’re thinking about buying a home instead. We want you to find the right place. That’s why our sister site, Homes.com, is designed to help you find your dream home, even if you’re a first time buyer."
        image="https://i.ibb.co/x3pjQMN/Screenshot-49.png"
      />

      <Container>
        <Box
          sx={{
            mt: {
              xs: "6rem",
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
            title="Explore Your Options"
            subtitle="Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision."
            linkText="Start Your Search"
            image="https://i.ibb.co/SBW7JTX/widget-discover-home-ownership-1407.jpg"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Homeownership;
