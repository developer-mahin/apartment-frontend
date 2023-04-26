import { Box, Typography, styled } from "@mui/material";

export const IconWrapper = styled(Box)(({ theme }) => ({
    width: "30px",
    height: "30px",
    borderRadius: "100px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

export const FooterLinksTitleWrapper = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: "500",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
        fontSize: "20px",
    }
}))