import { Box, styled } from "@mui/system";

export const RentalCard = styled(Box)(({ theme }) => ({
    border: '1px solid #ddd',
    borderRadius: "5px",
    "&:hover": {
        cursor: "pointer",
        transform: "scale(1.1,1.1)",
        transition: ".1s ease-in-out",
        border: "1px solid #427b01"
    }
}))
