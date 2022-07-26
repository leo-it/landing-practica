import { Box } from "@mui/material";
import React from "react";

export const ItemsServices = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "407px", height: "440px", mx: 15 }}>
        {" "}
        <img
          src="https://wickret.cuberto.com/assets/img/screens/3@2x.png"
          alt="icon"
          width={400}
          height={450}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Box sx={{ mb: 5, width: "55%" }}>
          <h3 className="text__align--left">
            Real-time alerts⏰ next day settlement
          </h3>
        </Box>
        <Box sx={{ mb: 5, width: "55%" }}>
          <h3 className="text__align--left">Flexible billing📙 and payments </h3>
        </Box>
        <Box sx={{ mb: 5, width: "55%"}}>
          <h3 className="text__align--left">Banking for all🏣 personal, business</h3>
        </Box>{" "}
      </Box>
    </Box>
  );
};
