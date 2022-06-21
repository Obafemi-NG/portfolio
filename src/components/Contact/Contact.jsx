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
          <div className="form-area">
            <form>
              <ul>
                <li className="half">
                  <input type="text" placeholder="Name" name="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="E-mail Address"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                <li>
                  <input type="submit" className="send-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
