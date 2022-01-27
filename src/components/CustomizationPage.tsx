import React, { useContext, useEffect, useState } from "react";

import { types } from "../data/character_data";

import "../styles/CustomizationPage.scss";

import { CharacterContext } from "../contexts/CharacterContext";

type edgeType = number | undefined;

function CustomizationPage() {
  function resetPoolsPoint() {
    setMightValue(types[characterIndex].stats.might);
    setIntellectValue(types[characterIndex].stats.intellect);
    setSpeedValue(types[characterIndex].stats.speed);
    setPointsValue(types[characterIndex].stats.points);
  }

  function handleStatsPoints(operation: string): void {
    if (operation === "add") {
      setPointsValue(pointsValue - 1);
    }

    if (operation === "sub") {
      setPointsValue(pointsValue + 1);
    }
  }

  function buttonStatControllerSubtract(
    stat: string
  ): React.SetStateAction<number> | void {
    if (pointsValue === 6) return;

    switch (stat) {
      case "might": {
        handleStatsPoints("sub");
        return setMightValue(
          mightPoolValue === types[characterIndex].stats.might
            ? types[characterIndex].stats.might
            : mightPoolValue - 1
        );
      }

      case "speed": {
        handleStatsPoints("sub");
        return setSpeedValue(
          speedPoolValue === types[characterIndex].stats.speed
            ? types[characterIndex].stats.speed
            : speedPoolValue - 1
        );
      }

      case "intellect":
        handleStatsPoints("sub");
        return setIntellectValue(
          intellectPoolValue === types[characterIndex].stats.intellect
            ? types[characterIndex].stats.intellect
            : intellectPoolValue - 1
        );
    }
  }

  function buttonStatControllerAdd(
    stat: string
  ): React.SetStateAction<number> | void {
    if (pointsValue === 0) return;

    switch (stat) {
      case "might": {
        handleStatsPoints("add");
        return setMightValue(mightPoolValue + 1);
      }

      case "speed": {
        handleStatsPoints("add");
        return setSpeedValue(speedPoolValue + 1);
      }

      case "intellect": {
        handleStatsPoints("add");
        return setIntellectValue(intellectPoolValue + 1);
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

  const characterIndex =
    characterInfo.type !== ""
      ? types.findIndex((el) => el.name === characterInfo.type)
      : 2;

  // pool values
  const [mightPoolValue, setMightValue] = useState<number>(
    types[characterIndex].stats.might as number
  );

  const [speedPoolValue, setSpeedValue] = useState<number>(
    types[characterIndex].stats.speed as number
  );

  const [intellectPoolValue, setIntellectValue] = useState<number>(
    types[characterIndex].stats.intellect as number
  );

  const [pointsValue, setPointsValue] = useState<number>(
    types[characterIndex].stats.points as number
  );

  useEffect(() => {
    setMightValue(types[characterIndex].stats.might);
    setSpeedValue(types[characterIndex].stats.speed);
    setIntellectValue(types[characterIndex].stats.intellect);
    setPointsValue(types[characterIndex].stats.points);
  }, [characterIndex]);

  // edge values
  const [mightEdgeValue, setMightEdgeValue] = useState<edgeType>(
    types[characterIndex].edges.might
  );
  const [speedEdgeValue, setSpeedEdgeValue] = useState<edgeType>(
    types[characterIndex].edges.speed
  );
  const [intellectEdgeValue, setIntellectEdgeValue] = useState<edgeType>(
    types[characterIndex].edges.intellect
  );

  useEffect(() => {
    setMightEdgeValue(types[characterIndex].edges.might);
    setSpeedEdgeValue(types[characterIndex].edges.speed);
    setIntellectEdgeValue(types[characterIndex].edges.intellect);
  }, [characterIndex]);

  return (
    <div className="customization-page">
      <p className="character-phrase">
        I am a <b>{characterInfo.descriptor}</b> <b>{characterInfo.type}</b> who{" "}
        <b>{characterInfo.foci}</b>
      </p>

      <span className="pools-title">Pools</span>
      <div className="pools-container">
        <div className="pools-wrapper">
          <span>Might</span>

          <span>{mightPoolValue}</span>

          <div>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerSubtract("might")}
            >
              -
            </button>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerAdd("might")}
            >
              +
            </button>
          </div>
        </div>

        <div className="pools-wrapper">
          <span>Speed</span>

          <span>{speedPoolValue}</span>

          <div>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerSubtract("speed")}
            >
              -
            </button>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerAdd("speed")}
            >
              +
            </button>
          </div>
        </div>

        <div className="pools-wrapper">
          <span>Intellect</span>

          <span>{intellectPoolValue}</span>

          <div>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerSubtract("intellect")}
            >
              -
            </button>
            <button
              className="pools-button"
              onClick={() => buttonStatControllerAdd("intellect")}
            >
              +
            </button>
          </div>
        </div>

        <div className="pools-wrapper">
          <span>Points</span>

          <span>{pointsValue}</span>
          <button
            className="pools-reset-button"
            onClick={() => resetPoolsPoint()}
          >
            Reset
          </button>
        </div>
      </div>

      {/* edge */}

      <div className="edges-container">
        <span className="edges-title">Edge</span>

        <span className="edges-wrapper">
          <span className="edges-children">
            <span>Might</span>
            <span>{mightEdgeValue}</span>
          </span>

          <span className="edges-children">
            <span>Speed</span>
            <span>{speedEdgeValue}</span>
          </span>

          <span className="edges-children">
            <span>Intellect</span>
            <span>{intellectEdgeValue}</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export { CustomizationPage };
