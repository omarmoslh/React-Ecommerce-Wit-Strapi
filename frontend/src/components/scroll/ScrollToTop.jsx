import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
