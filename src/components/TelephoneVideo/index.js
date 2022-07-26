import { Box } from "@mui/material";
import React from "react";

export const TelephoneVideo = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: "200px" }}>
      <Box sx={{mt:10}}>
         <div className="hero__card"></div>
      <div className="hero__phone">
        <div className="phone">
          <div className="phone__shadow"></div>
          <div className="phone__image"></div>
          <div className="phone__screen">
            <div className="phone__screen__video">
              <iframe overflow="scroll" widt="290" height="500" muted  allow="autoplay" allowfullscreen src='https://wickret.cuberto.com/assets/video/hello.mp4' ></iframe>

      <video autoPlay loop >
                 <source
                  src="https://wickret.cuberto.com/assets/video/hello.mp4"
                  type="video/mp4"
                /> 
              </video>
            </div>
          </div>
        </div>
      </div>
      </Box>
     
    </Box>
  );
};
