import { Box } from "@mui/material";
import React from "react";

export const ItemsServices = () => {
  return (
    <Box sx={{ display: { md: "flex" }, justifyContent: "center" }}>
      <Box sx={{ width: { sm: "100%", md: "70%" } }}>
        <Box
          sx={{
            width: { xs: "250px", md: 400 },
            height: { xs: "300px", md: 450 },
            mx: 15,
            display: "flex",
            justifyContent: "center",
            mx: "auto",
          }}
        >
          {" "}
          <img
            src="https://wickret.cuberto.com/assets/img/screens/3@2x.png"
            alt="icon"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ mb: 5, width: { xs: "100%", md: "55%" } }}>
          <h3 className="text__align">
            Real-time alerts⏰ next day settlement
          </h3>
        </Box>
        <Box sx={{ mb: 5, width: { xs: "100%", md: "55%" } }}>
          <h3 className="text__align">Flexible billing📙 and payments </h3>
        </Box>
        <Box sx={{ mb: 5, width: { xs: "100%", md: "55%" } }}>
          <h3 className="text__align">Banking for all🏣 personal, business</h3>
        </Box>{" "}
      </Box>
    </Box>
  );
};
