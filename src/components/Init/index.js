import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";

export const Init = () => {
  const [text, setText] = useState("Reimagined");
  const [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    /* cursor effect */
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
    /* scroll */
    function onScroll() {
      setCurrentPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (currentPosition === 0) {
      setText("Magic");
    }
    if (currentPosition > 10 && currentPosition < 200) {
      setText("Easy");
    }
    if (currentPosition > 200) {
      setText("Fun");
    }
  }, [currentPosition]);

  return (
    <Box sx={{ width: {xs:"300px",md:"640px"}, height: {md:"400px"} }}>
      <div>
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="content">
          <Box sx={{ width: "40%", align:"center" }}>
            <h1>
              Banking <span>{text}</span>
            </h1>
          </Box>
        </div>
      </div>
    </Box>
  );
};
