import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";

export const Init = ({ children }) => {
  useEffect(() => {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  //TODO el titulo cambia con el scroll

  return (
    <Box sx={{ width: "640px", height: "240" }}>
      <div>
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="content">
          <Box sx={{ width: "50%" }}>
            <h1>{children}</h1>
          </Box>
        </div>
      </div>
    </Box>
  );
};
