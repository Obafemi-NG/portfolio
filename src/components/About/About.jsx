import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import AnimatedLetter from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";
import {
  faCss3,
  faGithubSquare,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterName, setLetterName] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterName("animate-about");
    }, 3000);
  }, []);
  return (
    <>
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
            lover and tech-obsessed. And one of the quotes I adopted over time
            is that <b> Obsession is a bigger drive that Talent</b>{" "}
          </p>
        </div>
        <div className="cubic-container">
          <div className="cubic-spinner">
            <div className="face-1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face-2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face-3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face-4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD810" />
            </div>
            <div className="face-5">
              <FontAwesomeIcon icon={faGithubSquare} color="#000000" />
            </div>
            <div className="face-6">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
