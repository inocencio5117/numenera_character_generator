import React, { useContext, useState } from "react";

import { descriptors, foci, types } from "../data/character_data";

import "../styles/CustomizationPage.scss";

import { CharacterContext } from "../contexts/CharacterContext";

function CustomizationPage() {
  // context
  const { characterInfo } = useContext(CharacterContext);

  // character data
  const descriptorData = descriptors.find(
    (desc) => desc.name === characterInfo.descriptor
  );

  const fociData = foci.find((foci) => foci.name === characterInfo.foci);

  const typeData = types.find((type) => type.name === characterInfo.type);

  // pool values
  const [mightValue, setMightValue] = useState<number>(
    typeData?.stats.might as number
  );
  const [speedValue, setSpeedValue] = useState<number>(
    typeData?.stats.speed as number
  );
  const [intellectValue, setIntellectValue] = useState<number>(
    typeData?.stats.intellect as number
  );

  console.log(typeData?.stats.intellect);

  return (
    <div className="customization-page">
      <span className="character-phrase">
        I am a {characterInfo.descriptor} {characterInfo.type} who{" "}
        {characterInfo.foci}
      </span>

      <div className="pools-container">
        <span className="header-pools">Pools</span>

        <span className="might">
          <b>Might</b>

          <span className="pool-button">
            {mightValue}
            <button onClick={() => setMightValue(mightValue - 1)}>-</button>
            <button onClick={() => setMightValue(mightValue + 1)}>+</button>
          </span>
        </span>
        <span className="might">
          <b>Speed</b>

          <span className="pool-button">
            {speedValue}
            <button onClick={() => setSpeedValue(speedValue - 1)}>-</button>
            <button onClick={() => setSpeedValue(speedValue + 1)}>+</button>
          </span>
        </span>
        <span className="intellect">
          <b>Intellect</b>

          <span className="pool-button">
            {intellectValue}
            <button onClick={() => setIntellectValue(intellectValue - 1)}>
              -
            </button>
            <button onClick={() => setIntellectValue(intellectValue + 1)}>
              +
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}

export { CustomizationPage };
