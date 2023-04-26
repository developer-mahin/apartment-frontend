import { Box, styled } from "@mui/material";

export const BannerWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"https://i.ibb.co/d05hZKz/1920.jpg"})`,
    width: "100%",
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}))

export const BannerContentWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
}))

