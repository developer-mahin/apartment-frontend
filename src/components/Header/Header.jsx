import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center"
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          color: "#111",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
                marginLeft: "15px",
                '&:hover':{
                    borderRadius: "10px"
                }
            }}
          >
            <MenuIcon />
            <Typography sx={{ fontWeight: "600", color: "#333", ml: "10px" }}>
              MENU
            </Typography>
          </IconButton>

          <Box sx={{ ml: "8px" }}>
            <Button sx={{ color: "#111" }} startIcon={<LanguageIcon />}>
              English
            </Button>
          </Box>
          <Box
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              width={220}
              src="https://i.ibb.co/NTy0ptJ/apartments-for-rent-logo.png"
              alt=""
            />
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Link to="/" className="nav-link">
              Manage Rentals
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                to="/"
                style={{
                  color: "#111",
                  textDecoration: "none",
                  margin: "0px 0.5rem",
                }}
              >
                Sign Up
              </Link>

              <Typography>/</Typography>

              <Link
                to="/"
                style={{
                  color: "#111",
                  textDecoration: "none",
                  margin: "0px 0.5rem",
                }}
              >
                Sign In
              </Link>
            </Box>
            <Box
              sx={{
                backgroundColor: "#666",
                p: "10px 20px",
                marginLeft: "15px",
              }}
            >
              <Link to="/" className="property">
                Add a Property
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
