import React, { useEffect, useRef } from "react";
import "./Logo.scss";
import logoS from "../../../assets/images/logo-s.png";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

const Logo = () => {
  const bgRef = useRef();
  const solidRef = useRef();
  const outlineRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineRef.current, {
        drawSVG: "100%",
        duration: 10,
      });
    gsap.fromTo(
      solidRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 4, delay: 4 }
    );
  }, []);
  return (
    <div ref={bgRef} className="logo-container">
      <img ref={solidRef} src={logoS} alt="S" className="solid-logo" />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 561.96 905.85"
      >
        <path
          className="svg-container"
          style={{ fill: "none" }}
          d="M131.67,998.22V182.44a53.2,53.2,0,0,1,53.2-53.2H309.29V442.61H490.72V144.53A15.29,15.29,0,0,1,506,129.24H614.71a48.55,48.55,0,0,1,48.55,48.55V950.42a59.93,59.93,0,0,1-59.92,59.93H495.17a11.43,11.43,0,0,1-11.43-11.43V671h-177V998.33a12,12,0,0,1-12,12H143.8a12.13,12.13,0,0,1-12.13-12.13Z"
          transform="translate(-131.67 -104.5)"
        />
        <path
          ref={outlineRef}
          className="svg-container"
          style={{ fill: "none" }}
          d="M162,973.48V157.7a53.2,53.2,0,0,1,53.2-53.2H322.92a16.73,16.73,0,0,1,16.74,16.73V417.87H521.08V119.79a15.29,15.29,0,0,1,15.3-15.29H645.07a48.56,48.56,0,0,1,48.56,48.55V925.68a59.93,59.93,0,0,1-59.92,59.93H525.54a11.43,11.43,0,0,1-11.43-11.43V646.24h-177V973.59a12,12,0,0,1-12,12H174.17A12.13,12.13,0,0,1,162,973.48Z"
          transform="translate(-131.67 -104.5)"
        />
      </svg>
    </div>
  );
};

export default Logo;
