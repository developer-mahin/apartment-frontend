import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LilnksWrapper from "../../pages/Home/AllPagesLinks/LilnksWrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaMicroblog,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FooterLinksTitleWrapper, IconWrapper } from "./footerStyle";
import {
  aboutUs,
  advertise,
  featuredCities,
  neighborHoods,
  theMarketPlace,
} from "./footerFakeData";
import { BiHome } from "react-icons/bi";

const Footer = () => {
  return (
    <Box
      sx={{
        py: "4rem",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderBottom: {
                xs: "1px solid #ddd",
                md: "none",
              },
            }}
          >
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
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "250px",
                    },
                  }}
                >
                  <img
                    width={"100%"}
                    src="https://i.ibb.co/NTy0ptJ/apartments-for-rent-logo.png"
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: "end",
                    mt: "5px",
                  }}
                >
                  © 2023 CoStar Group, Inc.
                </Typography>

                <Box sx={{ mt: "15px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      gap: "5px",
                    }}
                  >
                    <IconWrapper>
                      <FaFacebookF className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <BsTwitter className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <AiOutlineInstagram className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <FaLinkedinIn className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <FaPinterestP className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <TfiYoutube className="fs-5" />
                    </IconWrapper>

                    <IconWrapper>
                      <FaMicroblog className="fs-5" />
                    </IconWrapper>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      gap: "2px",
                      mt: "8px",
                    }}
                  >
                    <BiHome />
                    <Typography sx={{ fontSize: "13px" }}>
                      Equal Housing Opportunity
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: {
                    xs: "20px",
                    md: "0px",
                  },
                }}
              >
                <FooterLinksTitleWrapper>ADVERTISERS</FooterLinksTitleWrapper>
                {advertise.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>

              <Box
                sx={{
                  mt: {
                    xs: "20px",
                    md: "0px",
                  },
                }}
              >
                <FooterLinksTitleWrapper>
                  THE MARKETPLACE
                </FooterLinksTitleWrapper>
                {theMarketPlace.map((link, i) => (
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
              <Box
              >
                <FooterLinksTitleWrapper>NEIGHBORHOODS</FooterLinksTitleWrapper>
                {neighborHoods.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>

              <Box
                sx={{
                  mt: {
                    xs: "20px",
                    md: "0px",
                  },
                }}
              >
                <FooterLinksTitleWrapper>
                  FEATURED CITIES
                </FooterLinksTitleWrapper>
                {featuredCities.map((link, i) => (
                  <LilnksWrapper link={link} key={i} />
                ))}
              </Box>

              <Box
                sx={{
                  mt: {
                    xs: "20px",
                    md: "0px",
                  },
                }}
              >
                <FooterLinksTitleWrapper>ABOUT US</FooterLinksTitleWrapper>
                {aboutUs.map((link, i) => (
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

export default Footer;
