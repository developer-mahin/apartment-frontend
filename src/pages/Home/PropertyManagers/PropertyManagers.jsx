import { Box, Container } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SharedComponent from "../../../components/SharedComponent/SharedComponent";
import SecondSharedComponents from "../../../components/SharedComponent/SecondSharedComponents";

const PropertyManagers = () => {
  return (
    <Box sx={{ py: "2rem" }}>
      <SectionTitle
        title="Renting Made Easy for Residents and Property Managers"
        subtitle="Our articles, guides, and videos help you through the process, start to finish."
      />

      <Container>
        <Box
          sx={{
            mt: {
              xs: "5rem",
              md: "0px",
            },
            borderBottom: "1px solid #ddd",
          }}
        >
          <SharedComponent
            title="Tips for Renters"
            subtitle="Find answers to all of your renting questions with the best renter’s guide in the galaxy."
            linkText="Browse Articles"
            image="https://i.ibb.co/D9xs1cc/widget-tips-for-renters-469.png"
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
              title="Property Manager Resources"
              subtitle="Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more."
              linkText="Stay Informed"
              image="https://i.ibb.co/6YqK7ry/widget-property-mgr-resources-1407.png"
            />
          </Box>

          <Box>

            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyManagers;
