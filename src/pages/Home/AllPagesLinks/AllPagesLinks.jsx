import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LilnksWrapper from "./LilnksWrapper";
import {
  fifthDivLink,
  firstDivLink,
  fourthDivLink,
  secondDivLink,
  sixthDivLink,
  thirdDivLink,
} from "./faceData";

const AllPagesLinks = () => {
  return (
    <Box
      sx={{
        py: "3rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                borderRight: " 1px solid #ddd",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mb: "20px",
                    fontSize: {
                      xs: "20px",
                      md: "12px",
                    },
                  }}
                >
                  TOP MARKETS
                </Typography>
                {firstDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
              <Box sx={{ mt: "30px" }}>
                {secondDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
              <Box sx={{ mt: "30px" }}>
                {thirdDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mb: "20px",
                    fontSize: {
                      xs: "20px",
                      md: "12px",
                    },
                  }}
                >
                  POPULAR SEARCHES
                </Typography>
                {fourthDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
              <Box
                sx={{ mt: "30px", borderRight: " 1px solid #ddd", pr: "30px" }}
              >
                {fifthDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
              <Box>
                <Typography
                  sx={{
                    mb: "20px",
                    fontSize: {
                      xs: "20px",
                      md: "12px",
                    },
                  }}
                >
                  RENTAL-MANAGER SERVICES
                </Typography>
                {sixthDivLink.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AllPagesLinks;
