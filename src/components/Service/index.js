import { Box } from "@mui/material";
import React from "react";
import { CustomerServices } from "../CustomerServices";
import { ItemsServices } from "../ItemsServices";

export const Services = () => {
  return (
    <Box sx={{ height: "200vh" }} className="services">
      <CustomerServices />
      <ItemsServices />
    </Box>
  );
};
