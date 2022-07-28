import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MagneticItem } from "../MagneticItem.js";
import NavbarMobile from "../NavbarMobile/index.js";
/* import { gsap } from "gsap";
 */

export const Navbar = () => {
  const animation = { duration: 10000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <Box className="navbar__mobile">
        <NavbarMobile />
      </Box>

      <Box
        className="navbar__desktop"
        sx={{
          px: 10,
          py: 1,
          zIndex: 10,
          display: "flex",
          height: "100px",
          width: "70%",
          position: "fixed",
        }}
      >
        <Box sx={{ mr: "60%" }}>
          <p className="navbar__item--large">WIKRET</p>{" "}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: "30%", pt: 2 }}>
            {" "}
            <p className="navbar__item"> Benefits </p>
          </Box>
          <Box sx={{ mr: "30%", pt: 2 }}>
            {" "}
            <p className="navbar__item"> Security </p>
          </Box>
          <Box sx={{ mr: "30%", pt: 5, width: "140px" }}>
            {/*  <Box sx={{display:"flex"}}>

    <MagneticItem>asdads</MagneticItem>
    <MagneticItem>---</MagneticItem>
     </Box> */}
            <div ref={sliderRef} className="keen-slider button__download">
              <div className="keen-slider__slide ">
                {" "}
                <p className=" ">Download </p>
              </div>
              <div className="keen-slider__slide ">
                {" "}
                <p className="">Download </p>
              </div>{" "}
              <div className="keen-slider__slide ">
                {" "}
                <p className="">Download </p>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
