import { Box } from "@mui/material";
import React from "react";

const Feedbar = () => {
  return (
    <Box
      bgcolor="lightcyan"
      flex={4}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Feedbar
    </Box>
  );
};

export default Feedbar;
