import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SharedComponent from "../../../components/SharedComponent/SharedComponent";
import SecondSharedComponents from "../../../components/SharedComponent/SecondSharedComponents";
import { Link } from "react-router-dom";

const PropertyManagers = () => {
  return (
    <Box sx={{ py: "2rem", borderBottom: "1px solid #ddd" }}>
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

          <Box
            sx={{
              mt: {
                xs: "30px",
                md: "0px",
              },
            }}
          >
            <Box>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      background: "#f5f5f5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: {
                        xs: "",
                        md: "260px",
                      },
                      px: {
                        xs: "0px",
                        md: "70px",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.75rem",
                        }}
                      >
                        Take Us With You
                      </Typography>
                      <Typography
                        sx={{
                          margin: "0.4rem 0px",
                        }}
                      >
                        Keep Apartments.com in the palm of your hand throughout
                        your rental journey.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          mt: "10px",
                        }}
                      >
                        <img
                          width={"35%"}
                          src="https://i.ibb.co/Qd53dGy/apple-badge.png"
                          alt=""
                        />
                        <img
                          width={"35%"}
                          src="https://i.ibb.co/4TtmkYx/play.png"
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    mt: {
                      xs: "-50px",
                      md: "0px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: {
                        xs: "100%",
                        md: "260px",
                      },
                    }}
                  >
                    <img
                      src="https://i.ibb.co/rkQ0wdn/widget-take-us-with-you-469.png"
                      width="100%"
                      height={"100%"}
                      alt=""
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            py: {
              xs: "2rem",
              md: "4rem",
            },
            width: {
              xs: "100%",
              md: "90%",
            },
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Search over 1 million listings including{" "}
            <Link to="/">apartments</Link>,&nbsp;<Link to="/">houses</Link>,{" "}
            &nbsp;
            <Link to="/">condos</Link>, and &nbsp;
            <Link to="/">townhomes</Link> available for rent. You’ll find your
            next home, in any style you prefer.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyManagers;
