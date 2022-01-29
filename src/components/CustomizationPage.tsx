import React, { useContext, useEffect, useState } from "react";

import { types, foci, descriptors } from "../data/character_data";

import "../styles/CustomizationPage.scss";

import { CharacterContext } from "../contexts/CharacterContext";

type edgeType = number | undefined;

function CustomizationPage() {
  function addSelectedAbility(ability: string) {}

  // adds a button underneath the edges values when jack the jack type is chosen
  function addEdgeValueForJack(stat: string) {
    if (
      intellectEdgeValue === 1 ||
      mightEdgeValue === 1 ||
      speedEdgeValue === 1
    )
      return;

    if (characterInfo.type === "Jack") {
      switch (stat) {
        case "might":
          return setMightEdgeValue(1);

        case "speed":
          return setSpeedEdgeValue(1);

        case "intellect":
          return setIntellectEdgeValue(1);
      }
    }
  }

  // resets the pool points that were distributed in the pools
  function resetPoolsPoint() {
    setMightValue(
      types[characterIndex].stats.might + mightFromDescriptor + mightFromFocus
    );
    setSpeedValue(
      types[characterIndex].stats.speed + speedFromDescriptor + speedFromFocus
    );
    setIntellectValue(
      types[characterIndex].stats.intellect +
        intellectFromDescriptor +
        intellectFromFocus
    );
    setPointsValue(types[characterIndex].stats.points);
    setIntellectEdgeValue(types[characterIndex].edges.intellect);
    setMightEdgeValue(types[characterIndex].edges.might);
    setSpeedEdgeValue(types[characterIndex].edges.speed);
  }

  // handle the distribution of stats updating the points value
  function handleStatsPoints(operation: string): void {
    if (operation === "add") {
      setPointsValue(pointsValue - 1);
    }

    if (operation === "sub") {
      setPointsValue(pointsValue + 1);
    }
  }

  // handle the click on a - button in the stats pool
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

  // handle the click on a + button in the stats pool
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
  const descriptorData = descriptors.find(
    (desc) => desc.name === characterInfo.descriptor
  );

  const fociData = foci.find((foci) => foci.name === characterInfo.foci);

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

  // descriptor stats values
  const intellectFromDescriptor = descriptorData?.stats?.intellect || 0;
  const speedFromDescriptor = descriptorData?.stats?.speed || 0;
  const mightFromDescriptor = descriptorData?.stats?.might || 0;

  // focus stats values
  const intellectFromFocus = fociData?.stats?.intellect || 0;
  const speedFromFocus = fociData?.stats?.speed || 0;
  const mightFromFocus = fociData?.stats?.might || 0;

  // Loads all stats values
  useEffect(() => {
    setMightValue(
      types[characterIndex].stats.might + mightFromDescriptor + mightFromFocus
    );
    setSpeedValue(
      types[characterIndex].stats.speed + speedFromDescriptor + speedFromFocus
    );
    setIntellectValue(
      types[characterIndex].stats.intellect +
        intellectFromDescriptor +
        intellectFromFocus
    );
    setPointsValue(types[characterIndex].stats.points);
  }, [
    characterIndex,
    intellectFromDescriptor,
    intellectFromFocus,
    mightFromDescriptor,
    mightFromFocus,
    speedFromDescriptor,
    speedFromFocus,
  ]);

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

  // loads all edge values
  useEffect(() => {
    setMightEdgeValue(types[characterIndex].edges.might);
    setSpeedEdgeValue(types[characterIndex].edges.speed);
    setIntellectEdgeValue(types[characterIndex].edges.intellect);
  }, [characterIndex]);

  // Abilities

  const [selectedAbility, setSelectedAbility] = useState();

  return (
    <div className="customization-page">
      <p className="character-phrase">
        I am a <b>{characterInfo.descriptor}</b> <b>{characterInfo.type}</b> who{" "}
        <b>{characterInfo.foci}</b>
      </p>

      <span className="divider"></span>

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

      <span className="divider"></span>

      {/* edge */}

      <div className="edges-container">
        <span className="edges-title">Edge</span>

        <span className="edges-wrapper">
          <span className="edges-children">
            <span>Might</span>
            <span>{mightEdgeValue}</span>
            {characterInfo.type === "Jack" ? (
              <button
                className="edge-button"
                onClick={() => addEdgeValueForJack("might")}
              >
                +
              </button>
            ) : null}
          </span>

          <span className="edges-children">
            <span>Speed</span>
            <span>{speedEdgeValue}</span>
            {characterInfo.type === "Jack" ? (
              <button
                className="edge-button"
                onClick={() => addEdgeValueForJack("speed")}
              >
                +
              </button>
            ) : null}
          </span>

          <span className="edges-children">
            <span>Intellect</span>
            <span>{intellectEdgeValue}</span>
            {characterInfo.type === "Jack" ? (
              <button
                className="edge-button"
                onClick={() => addEdgeValueForJack("intellect")}
              >
                +
              </button>
            ) : null}
          </span>
        </span>
      </div>

      <span className="divider"></span>

      {/* Skills */}
      <div className="skills-container">
        <span className="skills-title">Skills</span>

        <div className="skills-wrapper">
          <span className="skills-children">
            <span>Practiced</span>

            <ul>
              {types[characterIndex].skills.practiced.map((practiced) => {
                return <li>{practiced}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Trained</span>

            <ul>
              {types[characterIndex].skills.trained.map((trained) => {
                return <li>{trained}</li>;
              })}
              {fociData?.skills?.trained.map((trained) => {
                return <li>{trained}</li>;
              })}
              {descriptorData?.skills?.trained.map((trained) => {
                return <li>{trained}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Inabilities</span>

            <ul>
              {types[characterIndex].skills.inability?.map((inability) => {
                return <li>{inability}</li>;
              })}
              {descriptorData?.skills?.inability?.map((inability) => {
                return <li>{inability}</li>;
              })}
            </ul>
          </span>
        </div>
      </div>

      <span className="divider"></span>

      <div className="abilities-container">
        <span className="abilities-title">Abilities</span>

        <div className="abilities-wrapper">
          <span className="abilities-children">
            <span>Fixed Abilities</span>

            <span className="abilities-fixed">
              {fociData?.abilities?.map((abilities) => {
                return <span>{abilities}</span>;
              })}
              {descriptorData?.abilities?.map((abilities) => {
                return <span>{abilities}</span>;
              })}
            </span>
          </span>

          <span className="abilities-children">
            <span>Choose two from the following:</span>

            <span className="abilities-choice">
              {types[characterIndex].abilities.map((abilities) => {
                return (
                  <span onClick={() => addSelectedAbility(abilities)}>
                    {abilities}
                  </span>
                );
              })}
            </span>

            <span className="abilities-selected"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export { CustomizationPage };
