import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

const Contact = () => {
  const [letterName, setLetterName] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterName("animate-about");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterName={letterName}
              strArray={["C", "o", "n", "t", "a", "c ", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
