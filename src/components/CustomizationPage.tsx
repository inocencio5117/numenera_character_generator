import React, { useContext, useEffect, useState } from "react";

import { types } from "../data/character_data";

import "../styles/CustomizationPage.scss";

import { CharacterContext } from "../contexts/CharacterContext";

function CustomizationPage() {
  function handleStatsPoints(operation: string) {
    if (operation === "add") {
      setPointsValue(pointsValue - 1);
    }

    if (operation === "sub") {
      setPointsValue(pointsValue + 1);
    }
  }

  function buttonStatControllerSubtract(stat: string): any {
    if (pointsValue === 6) return;

    switch (stat) {
      case "might": {
        handleStatsPoints("sub");
        return setMightValue(
          mightValue === types[typeIndex].stats.might
            ? types[typeIndex].stats.might
            : mightValue - 1
        );
      }

      case "speed": {
        handleStatsPoints("sub");
        return setSpeedValue(
          speedValue === types[typeIndex].stats.speed
            ? types[typeIndex].stats.speed
            : speedValue - 1
        );
      }

      case "intellect":
        handleStatsPoints("sub");
        return setIntellectValue(
          intellectValue === types[typeIndex].stats.intellect
            ? types[typeIndex].stats.intellect
            : intellectValue - 1
        );
    }
  }

  function buttonStatControllerAdd(stat: string): any {
    if (pointsValue === 0) return;

    switch (stat) {
      case "might": {
        handleStatsPoints("add");
        return setMightValue(mightValue + 1);
      }

      case "speed": {
        handleStatsPoints("add");
        return setSpeedValue(speedValue + 1);
      }

      case "intellect": {
        handleStatsPoints("add");
        return setIntellectValue(intellectValue + 1);
      }
    }
  }

  // context
  const { characterInfo } = useContext(CharacterContext);

  // character data
  // const descriptorData = descriptors.find(
  //   (desc) => desc.name === characterInfo.descriptor
  // );

  // const fociData = foci.find((foci) => foci.name === characterInfo.foci);

  const typeIndex =
    characterInfo.type !== ""
      ? types.findIndex((el) => el.name === characterInfo.type)
      : 2;

  // pool values
  const [mightValue, setMightValue] = useState<number>(
    types[typeIndex].stats.might as number
  );

  const [speedValue, setSpeedValue] = useState<number>(
    types[typeIndex].stats.speed as number
  );

  const [intellectValue, setIntellectValue] = useState<number>(
    types[typeIndex].stats.intellect as number
  );

  const [pointsValue, setPointsValue] = useState<number>(
    types[typeIndex].stats.points as number
  );

  useEffect(() => {
    setMightValue(types[typeIndex].stats.might);
    setSpeedValue(types[typeIndex].stats.speed);
    setIntellectValue(types[typeIndex].stats.intellect);
    setPointsValue(types[typeIndex].stats.points);
  }, [typeIndex]);

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
            <button onClick={() => buttonStatControllerSubtract("might")}>
              -
            </button>
            <button onClick={() => buttonStatControllerAdd("might")}>+</button>
          </span>
        </span>
        <span className="might">
          <b>Speed</b>

          <span className="pool-button">
            {speedValue}
            <button onClick={() => buttonStatControllerSubtract("speed")}>
              -
            </button>
            <button onClick={() => buttonStatControllerAdd("speed")}>+</button>
          </span>
        </span>
        <span className="intellect">
          <b>Intellect</b>

          <span className="pool-button">
            {intellectValue}
            <button onClick={() => buttonStatControllerSubtract("intellect")}>
              -
            </button>
            <button onClick={() => buttonStatControllerAdd("intellect")}>
              +
            </button>
          </span>

          <span className="points">
            <b>Points</b>

            {pointsValue}
          </span>
        </span>
      </div>
    </div>
  );
}

export { CustomizationPage };
