import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RentalCard } from "./rentalStyle";

const Rentals = () => {
  const rentalsItems = [
    {
      img: " https://i.ibb.co/2c19wYC/post-apartments-chicago-il-primary-photo.jpg",
      title: "Post Apartments",
      location: "853 W Blackhawk St,",
      price: "Studio - 2 Beds | $1,773 - $3,640",
      address: "Chicago, IL 60642",
    },
    {
      img: "https://i.ibb.co/W54h37Q/fulbrix-chicago-il-primary-photo.jpg",
      title: "Fulbrix",
      location: "160 N Elizabeth St,",
      price: "Studio - 3 Beds | $2,354 - $6,647",
      address: "Chicago, IL 60660",
    },
    {
      img: " https://i.ibb.co/TrxXCb3/5630-n-sheridan-rd-chicago-il-primary-photo.jpg",
      title: "5630 N Sheridan Rd",
      location: "5630 N Sheridan Rd,",
      price: "Studio - 1 Bed | $1,130 - $1,550",
      address: "Chicago, IL 60607",
    },
    {
      img: " https://i.ibb.co/nRLT43P/elevate-chicago-il-primary-photo.jpg",
      title: "Elevate",
      location: "930 W Altgeld St,",
      price: "Studio - 3 Beds | $2,070 - $14,700",
      address: "Chicago, IL 60614",
    },
  ];

  return (
    <Box sx={{ py: "2rem" }} >
      <SectionTitle title="Explore Rentals in Chicago, IL" subtitle="" />
      <Container sx={{ borderBottom: "1px solid #ddd", pb: "2rem" }}>
        <Grid
          container
          spacing={3}
          justifyItems="center"
          
        >
          {rentalsItems.map((item, i) => (
            <Grid key={i} item xs={12} md={3}>
              <RentalCard>
                <img src={item.img} width="100%" height="200px" alt="" />
                <Box sx={{ textAlign: "center", padding: "15px 0px" }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    {item.location}
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    {item.address}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                    {item.price}
                  </Typography>
                </Box>
              </RentalCard>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#427b01",
              fontWeight: "600",
              padding: "13px 30px ",
              "&:hover": {
                background: "#0b6839",
              },
              mt: "3rem",
            }}
          >
            View More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Rentals;
