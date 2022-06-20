import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import logoSub from "../../assets/images/logo-s.png";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          {" "}
          Hi, <br /> I'm <img src={logoSub} alt="developer" />
          lobodan <br /> Frontend Developer{" "}
        </h1>
        <h2> Frontend Developer | Javascript Expert | Gamer </h2>
        {/* <Link to="/contact" className="flat-btn">
          {" "}
          CONTACT ME{" "}
        </Link> */}
        <button className="flat-btn"> CONTACT ME </button>
      </div>
    </div>
  );
};

export default Home;
