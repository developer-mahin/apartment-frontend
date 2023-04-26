import React from "react";
import { BannerContentWrapper, BannerWrapper } from "./bannerStyle";
import { Box, Button, Input, Typography } from "@mui/material";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContentWrapper>
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "64px",
              },
              color: "#fff",
              textAlign: "center",
            }}
          >
            Discover Your New Home
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                md: "30px",
              },
              color: "#fff",
              textAlign: "center",
            }}
          >
            Helping 100 million renters find their perfect fit.
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              py: {
                xs: "1rem",
                md: "2rem",
              },
            }}
          >
            <Input
              autoComplete="current-password"
              variant="standard"
              placeholder="Search by location or point of interest"
              color="primary"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                padding: "10px 30px ",
                borderRadius: "10px",
                borderBottom: "none",
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "#427b01",
                fontWeight: "600",
                padding: "13px 30px ",
                "&:hover": {
                  background: "#0b6839",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </BannerContentWrapper>
    </BannerWrapper>
  );
};

export default Banner;
