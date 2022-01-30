import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { descriptors, foci, types } from "../data/character_data";

type edgeType = number | undefined;

function Pools() {
  function adaptableCornerCase(stat: string) {
    if (adaptableCornerCaseAdded) return;

    switch (stat) {
      case "might":
        setAdaptableCornerCaseAdded(true);
        return setMightValue(mightPoolValue + 2);

      case "speed":
        setAdaptableCornerCaseAdded(true);
        return setSpeedValue(speedPoolValue + 2);

      case "intellect":
        setAdaptableCornerCaseAdded(true);
        return setIntellectValue(intellectPoolValue + 2);
    }
  }

  // set 2 points for distribution for intimidation descriptor
  function intimidationCornerCase(stat: string) {
    if (intimidatingCornerCaseAdded) return;

    switch (stat) {
      case "might":
        setIntimidatingCornerCaseAdded(true);
        return setMightValue(mightPoolValue + 2);

      case "intellect":
        setIntimidatingCornerCaseAdded(true);
        return setIntellectValue(intellectPoolValue + 2);

      case "both":
        setIntimidatingCornerCaseAdded(true);
        setIntellectValue(intellectPoolValue + 1);
        setMightValue(mightPoolValue + 1);
        break;
    }
  }

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
          setJackEdgeAdded(true);
          return setMightEdgeValue(1);

        case "speed":
          setJackEdgeAdded(true);
          return setSpeedEdgeValue(1);

        case "intellect":
          setJackEdgeAdded(true);
          return setIntellectEdgeValue(1);
      }
    }
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

    const mightTotalValue =
      types[characterIndex].stats.might +
      (descriptorData?.stats?.might || 0) +
      (fociData?.stats?.might || 0);

    const speedTotalValue =
      types[characterIndex].stats.speed +
      (descriptorData?.stats?.speed || 0) +
      (fociData?.stats?.speed || 0);

    const intellectTotalValue =
      types[characterIndex].stats.intellect +
      (descriptorData?.stats?.intellect || 0) +
      (fociData?.stats?.intellect || 0);

    switch (stat) {
      case "might": {
        if (mightPoolValue === mightTotalValue) return;
        handleStatsPoints("sub");
        return setMightValue(
          mightPoolValue === types[characterIndex].stats.might
            ? types[characterIndex].stats.might
            : mightPoolValue - 1
        );
      }

      case "speed": {
        if (speedPoolValue === speedTotalValue) return;
        handleStatsPoints("sub");
        return setSpeedValue(
          speedPoolValue === types[characterIndex].stats.speed
            ? types[characterIndex].stats.speed
            : speedPoolValue - 1
        );
      }

      case "intellect":
        if (intellectPoolValue === intellectTotalValue) return;
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
    setPointsValue(
      types[characterIndex].stats.points + (descriptorData?.stats?.points || 0)
    );
    setIntellectEdgeValue(types[characterIndex].edges.intellect);
    setMightEdgeValue(types[characterIndex].edges.might);
    setSpeedEdgeValue(types[characterIndex].edges.speed);

    if (descriptorData?.name === "Adaptable")
      setAdaptableCornerCaseAdded(false);

    if (descriptorData?.name === "Intimidating" || "Persevering")
      setIntimidatingCornerCaseAdded(false);

    if (types[characterIndex]?.name === "Jack") setJackEdgeAdded(false);
  }

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

  // corner cases
  // controls adaptable corner case addition to a pool
  const [adaptableCornerCaseAdded, setAdaptableCornerCaseAdded] =
    useState<boolean>(false);

  // controls intimidating corner case addition to a pool
  const [intimidatingCornerCaseAdded, setIntimidatingCornerCaseAdded] =
    useState<boolean>(false);

  const [jackEdgeAdded, setJackEdgeAdded] = useState<boolean>(false);

  useEffect(() => {
    setAdaptableCornerCaseAdded(false);
    setIntimidatingCornerCaseAdded(false);
    setJackEdgeAdded(false);
  }, []);

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
    setPointsValue(
      types[characterIndex].stats.points + (descriptorData?.stats?.points || 0)
    );
  }, [
    characterIndex,
    descriptorData?.stats?.points,
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

  return (
    <>
      <span className="pools-title">Pools</span>
      <div className="pools-container">
        <div className="pools-wrapper">
          <span>Might</span>

          <span>{mightPoolValue}</span>

          {/* adaptable corner case */}
          {descriptorData?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("might")}
              className="adaptable-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {(descriptorData?.name === "Intimidating" ||
            descriptorData?.name === "Persevering") &&
          !intimidatingCornerCaseAdded ? (
            <button
              onClick={() => intimidationCornerCase("might")}
              className="intimidating-case-button"
            >
              +2
            </button>
          ) : null}

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

          {/* adaptable corner case */}
          {descriptorData?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("speed")}
              className="lawful-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {descriptorData?.name === "Intimidating" &&
          !intimidatingCornerCaseAdded ? (
            <button
              onClick={() => intimidationCornerCase("both")}
              className="intimidating-case-button"
            >
              +1 in both
            </button>
          ) : null}

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

          {/* adaptable corner case */}
          {descriptorData?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("intellect")}
              className="adaptable-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {(descriptorData?.name === "Intimidating" ||
            descriptorData?.name === "Persevering") &&
          !intimidatingCornerCaseAdded ? (
            <button
              onClick={() => intimidationCornerCase("intellect")}
              className="intimidating-case-button"
            >
              +2
            </button>
          ) : null}

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

            {characterInfo.type === "Jack" && !jackEdgeAdded ? (
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

            {characterInfo.type === "Jack" && !jackEdgeAdded ? (
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

            {characterInfo.type === "Jack" && !jackEdgeAdded ? (
              <button
                className="edge-button"
                onClick={() => addEdgeValueForJack("intellect")}
              >
                +
              </button>
            ) : null}
          </span>
        </span>

        <b>Effort: 1</b>
      </div>

      <span className="divider"></span>
    </>
  );
}

export { Pools };
