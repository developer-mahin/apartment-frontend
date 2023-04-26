import { Box, Container } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SharedComponent from "../../../components/SharedComponent/SharedComponent";
import SecondSharedComponents from "../../../components/SharedComponent/SecondSharedComponents";

const ManageYourProperty = () => {
  return (
    <Box sx={{ py: "2rem" }}>
      <SectionTitle
        title="The Perfect Place to Manage Your Property"
        subtitle="Work with the best suite of property management tools on the market."
      />

      <Container>
        <Box
          sx={{
            mt: {
              xs: "5rem",
              md: "0px",
            },
            borderBottom: "1px solid #ddd",
            // pb: {
            //   xs: "2rem",
            //   md: "4rem",
            // },
          }}
        >
          <SharedComponent
            title="Advertise Your Rental"
            subtitle="Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform."
            linkText="List Your Property"
            image="https://i.ibb.co/SwKySfw/widget-advertise-your-rental-1407.png"
          />
          <Box
            sx={{
              mt: {
                xs: "1rem",
                md: "0px",
              },
            }}
          >
            <SecondSharedComponents
              title="Lease 100% Online"
              subtitle="Accept applications, process rent payments online, and sign digital leases all powered on a single platform."
              linkText="Manage Your Property"
              image="https://i.ibb.co/G3XmhyD/widget-lease-100-online-1407.png"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageYourProperty;
