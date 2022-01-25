import React from "react";

import "../styles/CustomizationPage.scss";

function CustomizationPage() {
  return (
    <div className="customization-page">
      <h1>Character phrase</h1>

      <h3>Pools</h3>

      <span>
        <b>Might</b>

        <span className="pool-button">
          10
          <button>+</button>
          <button>-</button>
        </span>
      </span>
    </div>
  );
}

export { CustomizationPage };
