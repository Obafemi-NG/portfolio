import React, { useEffect, useState } from "react";
import "./Home.scss";
import logoSub from "../../assets/images/logo-s.png";
import { useNavigate } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetters/AnimatedLetters";

import Logo from "./Logo/Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterName, setLetterName] = useState("text-animate");
  const navigate = useNavigate();
  const nameArray = ["e", "z", "c", "o", "d", "e"];
  const jobArray = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterName("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-area">
          <h1>
            <span className={`${letterName}`}>H</span>
            <span className={`${letterName} _12`}>i,</span>
            <br /> <span className={`${letterName} _13`}> I</span>
            <span className={`${letterName} _14`}>'m </span>{" "}
            <img src={logoSub} alt="developer" />
            <AnimatedLetter
              letterName={letterName}
              strArray={nameArray}
              idx={15}
            />{" "}
            <br />{" "}
            <AnimatedLetter
              letterName={letterName}
              strArray={jobArray}
              idx={21}
            />{" "}
          </h1>
          <h2> Frontend Developer | Javascript Expert | Gamer </h2>
          <button onClick={() => navigate("/contact")} className="flat-btn">
            {" "}
            CONTACT ME{" "}
          </button>
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
