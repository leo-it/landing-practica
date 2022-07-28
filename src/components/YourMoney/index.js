import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { MagneticItem } from "../MagneticItem.js";

export const YourMoney = () => {
  return (
    <Box
      className="yourMoney"
      sx={{
        height:{xs:"60vh",md:"105vh"},
        display: "flex",
        justifyContent: "center",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          width:{sx:"100%", md:"40%"},
          mb: "20px",
          mt: "50px",
          position: "relative",
        }}
      >
        <Box sx={{ height: "100px", mb: 6 }}>
          <Box sx={{ position: "absolute", top: "70px", left:{xs:"10vw",md: "-16vw"} }}>
            
              {" "}
              <img
                src="https://www.pikpng.com/pngl/b/53-537036_money-icon-png.png"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>

          <Box sx={{ position: "absolute", top: "70px", left:{xs:"80vw",md: "50vw"} }}>
            {" "}
            
              <img
                src="https://th.bing.com/th/id/R.37e7a2af12ead9eefeccbe44b13a7bd9?rik=3I3IB5hzny1%2fWQ&pid=ImgRaw&r=0"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
          <Box sx={{ position: "absolute", top: "10px", left: {xs:"26vw",md:"6vw"} }}>
            
              {" "}
              <img
                src="https://th.bing.com/th/id/R.5fe0d2248f3ae9368e29e65097ddc93e?rik=JhvhxGiAywQGMQ&pid=ImgRaw&r=0"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
          <Box sx={{ position: "absolute", top: "10px", left: {xs:"65vw",md:"30vw"} }}>
            
              {" "}
              <img
                src="https://cdn0.iconfinder.com/data/icons/colorful-business-set-1/100/colour-20-512.png"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
        </Box>
        <Box>
          <Box sx={{width:{xs:"50%", md:"100%"} , display:"flex" , mx:"auto"}}>
            <h2 className="h2">It’s Your Money Stop paying fees</h2>
          </Box>
          <Box sx={{ mt: 3 }}>
            <h5>Fee Free Banking is possible</h5>
          </Box>
        </Box>
        <Box sx={{ height: "100px" }}>
          <Box sx={{ position: "absolute", bottom: "90px", left:{xs:"10vw",md: "-16vw"} }}>
            
              <img
                src="https://th.bing.com/th/id/R.37e7a2af12ead9eefeccbe44b13a7bd9?rik=3I3IB5hzny1%2fWQ&pid=ImgRaw&r=0"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
          <Box sx={{ position: "absolute", bottom: "10px", left: {xs:"26vw",md:"6vw"} }}>
            
              <img
                src="https://th.bing.com/th/id/R.5fe0d2248f3ae9368e29e65097ddc93e?rik=JhvhxGiAywQGMQ&pid=ImgRaw&r=0"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
          <Box sx={{ position: "absolute", bottom: "10px", left: {xs:"65vw",md:"30vw"} }}>
            
              <img
                src="https://cdn0.iconfinder.com/data/icons/colorful-business-set-1/100/colour-20-512.png"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
          <Box sx={{ position: "absolute", bottom: "90px", left:{xs:"80vw",md: "50vw"} }}>
            
              <img
                src="https://www.pikpng.com/pngl/b/53-537036_money-icon-png.png"
                alt="icon"
                width={30}
                height={30}
              />
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
