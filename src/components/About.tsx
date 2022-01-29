import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="get-started">
        <Link to="/generator" className="start-button">
          Get Started!
        </Link>
      </div>

      <div className="about-container">
        <h1>About</h1>
        <p>
          Hello, I am Vinicius Inocêncio, a web dev student, nerd, and an RPG
          fan.
        </p>
        <p>If you find any bugs, errors, or missing information contact me!</p>
        <p>I hope you enjoy it!</p>
        <p>You can find me here: </p>
        <a
          href="mailto:vinicius@inocencio@dev?subject=Numenera Character Generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://twitter.com/1nocenci0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://github.com/inocencio5117"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github profile
        </a>
        <a
          href="https://github.com/inocencio5117/numenera_character_generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          This project Repo
        </a>
      </div>
    </>
  );
}

export { About };
