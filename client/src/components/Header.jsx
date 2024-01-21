import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
        <Typography variant="h5" color={theme.palette.secondary[300]}>
          {subtitle}
        </Typography>
      </Typography>
    </Box>
  );
};

export default Header;