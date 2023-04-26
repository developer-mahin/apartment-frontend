import { Typography, styled } from "@mui/material";

export const LinksStyle = styled(Typography)(({ theme }) => ({
    color: "#000",
    fontSize: ".75rem",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underLine"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "1rem"
    }
}))