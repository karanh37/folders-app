import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const AppBarPanel = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            File explorer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarPanel;
