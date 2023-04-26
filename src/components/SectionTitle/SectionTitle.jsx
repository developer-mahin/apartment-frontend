import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, subtitle, image }) => {
  return (
    <Box sx={{ pb: "2rem" }}>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
          textAlign: "center",
          mb: {
            xs: "5px",
            md: "0px",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              md: "2.25rem",
            },
            px: {
              xs: "12px",
              md: "0px",
            },
          }}
        >
          {title}
        </Typography>
        {image && <img src={image} alt="" />}
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "14px",
            md: "18px",
          },
          px: {
            xs: "12px",
            md: "30px",
          },
        }}
      >
        {subtitle ? subtitle : ""}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
