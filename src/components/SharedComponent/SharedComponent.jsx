import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SharedComponent = ({ title, subtitle, linkText, image }) => {
  return (
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
                {title}
              </Typography>
              <Typography
                sx={{
                  margin: "0.4rem 0px",
                }}
              >
                {subtitle}
              </Typography>
              <Link className="link" to="/">
                {linkText}
              </Link>
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
            <img src={image} width="100%" height={"100%"} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SharedComponent;
