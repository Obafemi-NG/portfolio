import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterName, setLetterName] = useState("text-animate");
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterName("animate-about");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c7p52px",
        "template_ym0gj2s",
        formRef.current,
        "Wd_PzjQj0iCoWV7-F"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterName={letterName}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="form-area">
            <form ref={formRef} onSubmit={sendEmail}>
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
        <div className="map-container">
          <div className="dev-info">
            Obafemi Oludahunsi <br /> Dele Ajayi close, 100275 <br /> Alimosho
            LGA, <br /> Lagos, Nigeria. <br />{" "}
            <span> oludahunsiobafemi18@gmail.com</span>
          </div>
          <div id="map" className="map-wrap">
            <MapContainer center={[6.6025737, 3.297146]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[6.6025737, 3.297146]}>
                <Popup>
                  Hezcode Lives here. <br /> He's an introvert, You'll
                  definitely meet him at home.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
