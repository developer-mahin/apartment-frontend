import React from "react";
import { LinksStyle } from "./allPagesLinksStyle";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const LilnksWrapper = ({ link }) => {
  return (
    <Box
      sx={{
        my: "8px",
      }}
    >
      <LinksStyle>
        <Link className="text-black text-decoration-none">{link.text}</Link>
      </LinksStyle>
    </Box>
  );
};

export default LilnksWrapper;
