import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export const YourMoney = () => {
  return (
    <Box
      className="yourMoney"
      sx={{
        height: "105vh",
        display: "flex",
        justifyContent: "center",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          width: "40%",
          mb: "20px",
          mt: "50px",
          position: "relative",
        }}
      >
        <Box sx={{ height: "100px", mb:6 }}>

          <Box sx={{ position: "absolute", top: "70px", left: "-10vw" }}>
            {" "}
            <img
              src="https://www.pikpng.com/pngl/b/53-537036_money-icon-png.png"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "70px", left: "50vw" }}>
            {" "}
            <img
              src="https://th.bing.com/th/id/R.37e7a2af12ead9eefeccbe44b13a7bd9?rik=3I3IB5hzny1%2fWQ&pid=ImgRaw&r=0"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "10px", left: "10vw" }}>
            {" "}
            <img
              src="https://th.bing.com/th/id/R.5fe0d2248f3ae9368e29e65097ddc93e?rik=JhvhxGiAywQGMQ&pid=ImgRaw&r=0"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "10px", left: "30vw" }}>
            {" "}
            <img
              src="https://cdn0.iconfinder.com/data/icons/colorful-business-set-1/100/colour-20-512.png"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <h2 className="h2">It’s Your Money Stop paying fees</h2>
          </Box>
          <Box sx={{ mt: 3 }}>
            <h5>Fee Free Banking is possible</h5>
          </Box>
        </Box>
        <Box sx={{ height: "100px" }}>
          <Box sx={{ position: "absolute", bottom: "140px", left: "-10vw" }}>
            <img
              src="https://th.bing.com/th/id/R.37e7a2af12ead9eefeccbe44b13a7bd9?rik=3I3IB5hzny1%2fWQ&pid=ImgRaw&r=0"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "80px", left: "10vw" }}>
          <img
              src="https://th.bing.com/th/id/R.5fe0d2248f3ae9368e29e65097ddc93e?rik=JhvhxGiAywQGMQ&pid=ImgRaw&r=0"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "80px", left: "30vw" }}>
          <img
              src="https://cdn0.iconfinder.com/data/icons/colorful-business-set-1/100/colour-20-512.png"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "140px", left: "50vw" }}>
            <img
              src="https://www.pikpng.com/pngl/b/53-537036_money-icon-png.png"
              alt="icon"
              width={50}
              height={50}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
