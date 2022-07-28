import React, { useEffect } from "react";
import { gsap } from "gsap";

export const MagneticItem = ({children}) => {
 /*  console.clear();
  let element, target, text;
  useEffect(() => {
    element = document.querySelector(".cursorMagnetic");
    target = document.querySelector(".target");
    text = document.querySelector(".text");
  }, [element, target]);

  class CursorMagnetic {
    constructor(el, target, text) {
      this.el = el;
      this.bind();
    }

    bind() {
      useEffect(() => {
        document.addEventListener("mousemove", this.move.bind(this), false);
      }, []);
    }

    move(e) {
      const cursorMagneticPosition = {
        left: e.clientX,
        top: e.clientY,
      };
      document.querySelectorAll(".target").forEach((single) => {
        const triggerDistance = single.getBoundingClientRect().width;

        const targetPosition = {
          left:
            single.getBoundingClientRect().left +
            single.getBoundingClientRect().width / 2,
          top:
            single.getBoundingClientRect().top +
            single.getBoundingClientRect().height / 2,
        };
        const distance = {
          x: targetPosition.left - cursorMagneticPosition.left,
          y: targetPosition.top - cursorMagneticPosition.top,
        };

        const angle = Math.atan2(distance.x, distance.y);
        const hypotenuse = Math.sqrt(
          distance.x * distance.x + distance.y * distance.y
        );
        if (hypotenuse < triggerDistance) {
          // Nikhil - look at this code to adjust the round cursorMagnetic area sizing
          gsap.to(this.el, {
            duration: 0.2,
            left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
            top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
            height: single.clientHeight,
            width: single.clientWidth,
          });
          gsap.to(single.querySelector(".text"), {
            duration: 0.2,
            x: -((Math.sin(angle) * hypotenuse) / 2),
            y: -((Math.cos(angle) * hypotenuse) / 2),
          });
        } else {
          gsap.to(this.el, {
            duration: 0.2,
            left: cursorMagneticPosition.left,
            top: cursorMagneticPosition.top,
            height: "12px",
            width: "12px",
          });

          gsap.to(single.querySelector(".text"), { duration: 0.2, x: 0, y: 0 });
        }
      });
    }
  }
  const cursorMagnetic = new CursorMagnetic(element, target);
 */
  return (
    <div>
     
          <div className="target">
            <p id="text" className="text">
               {children}
            </p>
          </div>
       
          {/*     <div className="cursorMagnetic" id="cursorMagnetic"></div>
           */}
       
    </div>
  );
};
