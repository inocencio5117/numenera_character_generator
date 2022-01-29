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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          impedit, dignissimos maiores similique id et deserunt explicabo
          debitis corporis iure a eos odio, alias labore culpa obcaecati placeat
          atque voluptates.
        </p>
      </div>
    </>
  );
}

export { About };
