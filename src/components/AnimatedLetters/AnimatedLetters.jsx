import React from "react";
import "./AnimatedLetters.scss";

const AnimatedLetter = ({ letterName, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterName} _${i + idx} `}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
