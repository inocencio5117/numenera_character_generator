import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <>
      <div className="get-started">
        <Link to="/generator" className="start-button">
          Get Started!
        </Link>
      </div>

      <div className="copyright-container">
        <h1>Copyright</h1>
        <p>
          The Monte Cook Games logo, Numenera, and the Numenera logo are
          trademarks of Monte Cook Games, LLC in the U.S.A. and other countries.
          All Monte Cook Games characters and character names, and the
          distinctive likenesses thereof, are trademarks of Monte Cook Games,
          LLC. Content on this site or associated files derived from Monte Cook
          Games publications is © 2013 Monte Cook Games, LLC. Monte Cook Games
          permits web sites and similar fan-created publications for their
          games, subject to the policy given at{" "}
          <a
            href="
            https://www.montecookgames.com/fan-support/fan-use-policy/
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            Fan Use Policy
          </a>
        </p>
        <p>
          {" "}
          The contents of this site are for personal, non-commercial use only.
          Use of Monte Cook Games’s trademarks and copyrighted materials
          anywhere on this site and its associated files should not be construed
          as a challenge to those trademarks or copyrights. Materials on this
          site may not be reproduced or distributed except with the permission
          of the site owner and in compliance with Monte Cook Games policy given
          at{" "}
          <a
            href="
            https://www.montecookgames.com/fan-support/fan-use-policy/
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            Fan Use Policy
          </a>
        </p>
        <p>
          Numenera and all related materials © Monte Cook Games. This is an
          unofficial fan project by Inocêncio.
        </p>
      </div>
    </>
  );
}

export { Copyright };
