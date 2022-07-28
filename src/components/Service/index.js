import { Box } from "@mui/material";
import React from "react";
import { CustomerServices } from "../CustomerServices";
import { ItemsServices } from "../ItemsServices";

export const Services = () => {
  return (
    <Box sx={{ height: {xs:"1200px",md:"200vh"} }} className="services">
      <CustomerServices />
      <ItemsServices />
    </Box>
  );
};
