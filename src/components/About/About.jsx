import React, { useEffect, useState } from "react";
import AnimatedLetter from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

const About = () => {
  const [letterName, setLetterName] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterName("animate-about");
    }, 3000);
  }, []);
  return (
    <div className="container about-page">
      <div className="text-area">
        <h1>
          <AnimatedLetter
            letterName={letterName}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious Front-End Developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          {" "}
          I'm quietly confident, naturally curious and perpetually working on
          improving my chops on one design one design at a time.{" "}
        </p>
        <p>
          {" "}
          If I need to define myself in one sentence that would be a young,
          vibrant, ambitious, a sports fanatics, a Madrististas, Soccer game
          lover and tech-obsessed. And one of the quotes I adopted over time is
          that <b> Obsession is a bigger drive that Talent</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
