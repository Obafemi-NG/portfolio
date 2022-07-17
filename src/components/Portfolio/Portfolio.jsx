import "./Portfolio.scss";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import AnimatedLetter from "../AnimatedLetters/AnimatedLetters";
import { useState } from "react";
import Scandiweb from "../../assets/images/Scandiweb_ss.png";
import CrownStore from "../../assets/images/CrownStore_ss.png";
import LadeLogo from "../../assets/images/LadeLogo.png";
import JulsLogo from "../../assets/images/JulsAfriqueLogo.jpg";
import HairIt from "../../assets/images/Hair-it.png";
import { useEffect } from "react";
import Loader from "react-loaders";

const Portfolio = () => {
  const [letterName, setLetterName] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterName("animate-about");
    }, 3000);
  }, []);
  const projects = [
    {
      index: 1,
      title: "Scandiweb e-Commerce",
      category: "code",
      imgUrl: Scandiweb,
      gitHubLink: "https://github.com/Obafemi-NG/jnr-frontend-task",
      description:
        "This is an  e-commerce website built with React which fetches all its data from a GraphQL backend using apollo",
    },
    {
      index: 2,
      title: "Crown store",
      category: "code",
      imgUrl: CrownStore,
      gitHubLink: "https://github.com/Obafemi-NG/crown-ecommerce-store",
      websiteLink: "https://crown-estore.netlify.app/",
      description:
        "This is the first e-commerce project i built just to practise. It was built with react while using Firebase for the backend, database and user authentication",
    },
    {
      index: 3,
      title: "Lade Jewelry",
      category: "design",
      imgUrl: LadeLogo,
      websiteLink: "https://ibb.co/xqyhQDH",
      description:
        "This is a Logo designed for a business that deals with the sales of clothing accessories(jewelries majorly)",
    },
    {
      index: 4,
      title: "Juls Afrique ",
      category: "design",
      imgUrl: JulsLogo,
      websiteLink: "https://ibb.co/KFMP6N7",
      description:
        "This is a Logo designed for a clothing line that is focused on making designs using only african fabrics. This explains the whole inspiration behind the design",
    },
    {
      index: 5,
      title: "Hairit",
      category: "design",
      imgUrl: HairIt,
      description:
        "This is a Logo that was designed for a Business brand that is focus mainly on the sales of Ladies Hair",
      websiteLink: "https://ibb.co/tmWgPGp",
    },
  ];
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-area">
          <h1>
            <AnimatedLetter
              letterName={letterName}
              strArray={[
                "M",
                "y",
                " ",
                "P",
                "o",
                "r",
                "t",
                "f",
                "o",
                "l",
                "i",
                "o",
              ]}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <PortfolioCard
              key={project.index}
              title={project.title}
              category={project.category}
              imgUrl={project.imgUrl}
              description={project.description}
              gitHubLink={project.gitHubLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
