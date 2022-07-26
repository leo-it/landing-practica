import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
  /*  let $bigBall, $smallBall, $hoverables;
  // Listeners
  useEffect(() => {
    $bigBall = document.querySelector(".cursor__ball--big");
    $smallBall = document.querySelector(".cursor__ball--small");
    $hoverables = document.querySelectorAll(".hoverable");

    document.body.addEventListener("mousemove", onMouseMove);
  }, []);

  for (let i = 0; i < $hoverables?.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    gsap.to($bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
    gsap.to($smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });
  }

  // Hover an element
  function onMouseHover() {
    gsap.to($bigBall, { duration: 0.3, scale: 4 });
  }
  function onMouseHoverOut() {
    gsap.to($bigBall, { duration: 0.3, scale: 1 });
  }


     <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
          </svg>
        </div>
      </div>

      <div className="left">
        <h1>Hello</h1>
        <p>Check out this link:</p>
        <a className="hoverable">Hover meh</a>
      </div>

      <div className="right">
        <h1>Hello</h1>
        <p>Check out this link:</p>
        <a className="hoverable">Hover meh</a>
      </div>
 */

  return (
    <Box
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
      <Box sx={{ mr: "75%" }}>
        <p className="navbar__item--large navbar__item">WICKRET</p>{" "}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mr: "30%", pt: 5 }}>
          {" "}
          <p className="navbar__item"> Benefits </p>
        </Box>
        <Box sx={{ mr: "30%", pt: 5 }}>
          {" "}
          <p className="navbar__item"> security </p>
        </Box>
        <Box sx={{ mr: "30%", pt: 5, width: "140px" }}>
          <div ref={sliderRef} className="keen-slider button__download">
            <div className="keen-slider__slide ">
              {" "}
              <p className="navbar__item">Download </p>
            </div>
            <div className="keen-slider__slide ">
              {" "}
              <p className="navbar__item">Download </p>
            </div>{" "}
            <div className="keen-slider__slide ">
              {" "}
              <p className="navbar__item">Download </p>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
