import "./styles.css";
import { ButtonGroup, PageWrapper } from "../wrappers";
import Logo from "../logo";
import React from "react";
import Icon, { TypeIcon } from "../game/components/icon";

export interface ISocialNetworks {
  title: string;
  icon: TypeIcon;
  link: string;
}

const SOCIAL_NETWORKS: ISocialNetworks[] = [
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://twitter.com",
  },
  {
    title: "Github",
    icon: "github",
    link: "https://github.com/mrxSteve",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mrXsteve",
  },
  {
    title: "Dev.to",
    icon: "devto",
    link: "https://dev.to",
  },
  {
    title: "bio.link",
    icon: "games",
    link: "https://bio.link",
  },
];

const AboutGame = () => {
  return (
    <PageWrapper>
      <div className="about-game">
        <Logo />
        <ButtonGroup label="About">
          <p>
            <a
              title="licenciada velis"
              href="https://en.wikipedia.org/wiki/Yatzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yatzy
            </a>{" "}
            Es un juego de dados similar al Yacht y Yahtzee. jhgfdfghgfddfghgfddfghgfds
            Está relacionado con el juego latinoamericano Generala 
            y el juego de dados de póquer inglés. 
            El Yatzy es más popular en los países nórdicos.
          </p>
          <p>
            This version was developed by{" "}
            <a
              title="Jorge Rubiano"
              href="https://instagram.com/_mrxsteve"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steve Tobar
            </a>{" "}
            en{" "}
            <a
              title="ReactJS"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>{" "}
            y{" "}
            <a
              title="TypeScript"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
          </p>
          <p>
            Musica por{" "}
            <a
              title="freesound"
              href="https://freesound.org/people/Setuniman/sounds/171394/"
              target="_blank"
              rel="noopener noreferrer"
            >
              freesound.org
            </a>
          </p>
        </ButtonGroup>
        <div className="about-game-social">
          {SOCIAL_NETWORKS.map(({ title, icon, link }, key) => (
            <a
              className="about-game-social-link"
              key={key}
              title={`Jorge Rubiano on ${title}`}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type={icon} fill="white" />
            </a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default React.memo(AboutGame);