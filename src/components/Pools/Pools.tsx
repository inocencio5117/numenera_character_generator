import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

import "./Pools.scss";
import { Type } from "../../assets/data/Types";
import { Descriptor } from "../../assets/data/Descriptors";
import { Foci } from "../../assets/data/Foci";

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

    if (type?.name === "Jack") {
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
  function buttonStatControllerSubtract({
    stat,
    type,
    foci,
    descriptor
  }: {
    stat: string;
    type: Type | null;
    foci: Foci | null;
    descriptor: Descriptor | null;
  }): React.SetStateAction<number> | void {
    if (!type || !descriptor || !foci) return;
    if (pointsValue === 6) return;

    const mightTotalValue =
      type.stats.might +
      (descriptor?.stats?.might || 0) +
      (foci?.stats?.might || 0);

    const speedTotalValue =
      type.stats.speed +
      (descriptor?.stats?.speed || 0) +
      (foci?.stats?.speed || 0);

    const intellectTotalValue =
      type.stats.intellect +
      (descriptor?.stats?.intellect || 0) +
      (foci?.stats?.intellect || 0);

    switch (stat) {
      case "might": {
        if (mightPoolValue === mightTotalValue) return;
        handleStatsPoints("sub");
        return setMightValue(
          mightPoolValue === type.stats.might
            ? type.stats.might
            : mightPoolValue - 1
        );
      }

      case "speed": {
        if (speedPoolValue === speedTotalValue) return;
        handleStatsPoints("sub");
        return setSpeedValue(
          speedPoolValue === type.stats.speed
            ? type.stats.speed
            : speedPoolValue - 1
        );
      }

      case "intellect":
        if (intellectPoolValue === intellectTotalValue) return;
        handleStatsPoints("sub");
        return setIntellectValue(
          intellectPoolValue === type.stats.intellect
            ? type.stats.intellect
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
  function resetPoolsPoint(type: Type | null, descriptor: Descriptor | null) {
    if (!type || !descriptor) return;

    setMightValue(
      type.stats.might + mightFromDescriptor + mightFromFocus
    );
    setSpeedValue(
      type.stats.speed + speedFromDescriptor + speedFromFocus
    );
    setIntellectValue(
      type.stats.intellect +
        intellectFromDescriptor +
        intellectFromFocus
    );
    setPointsValue(
      type.stats.points +
        (isVarjjelan ? (descriptor?.stats?.points || 0) || 0 : 0)
    );
    setIntellectEdgeValue(type.edges.intellect);
    setMightEdgeValue(type.edges.might);
    setSpeedEdgeValue(type.edges.speed);

    if (descriptor?.name === "Adaptable")
      setAdaptableCornerCaseAdded(false);

    if (descriptor?.name === "Intimidating" || "Persevering")
      setIntimidatingCornerCaseAdded(false);

    if (type?.name === "Jack") setJackEdgeAdded(false);
  }

  const { characterInfo } = useContext(CharacterContext);

  const { type, descriptor, foci } = characterInfo;

  // pool values
  const [mightPoolValue, setMightValue] = useState<number>(
    type?.stats.might as number
  );

  const [speedPoolValue, setSpeedValue] = useState<number>(
    type?.stats.speed as number
  );

  const [intellectPoolValue, setIntellectValue] = useState<number>(
    type?.stats.intellect as number
  );

  const [pointsValue, setPointsValue] = useState<number>(
    type?.stats.points as number
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
  const intellectFromDescriptor = descriptor?.stats?.intellect || 0;
  const speedFromDescriptor = descriptor?.stats?.speed || 0;
  const mightFromDescriptor = descriptor?.stats?.might || 0;

  // focus stats values
  const intellectFromFocus = foci?.stats?.intellect || 0;
  const speedFromFocus = foci?.stats?.speed || 0;
  const mightFromFocus = foci?.stats?.might || 0;

  // varjjelan corner case
  const isVarjjelan = descriptor?.name === "Varjellan" ? true : false;

  // Loads all stats values
  useEffect(() => {
    setMightValue(
      (type?.stats?.might || 0) + mightFromDescriptor + mightFromFocus
    );
    setSpeedValue(
      (type?.stats?.speed || 0) + speedFromDescriptor + speedFromFocus
    );
    setIntellectValue(
      (type?.stats?.intellect || 0) +
        intellectFromDescriptor +
        intellectFromFocus
    );
    setPointsValue(
      (type?.stats.points || 0) +
        (isVarjjelan ? descriptor?.stats?.points || 0 : 0)
    );
  }, [descriptor, intellectFromDescriptor, intellectFromFocus, isVarjjelan, mightFromDescriptor, mightFromFocus, speedFromDescriptor, speedFromFocus, type?.stats?.intellect, type?.stats?.might, type?.stats.points, type?.stats?.speed]);

  // edge values
  const [mightEdgeValue, setMightEdgeValue] = useState<edgeType>(
    type?.edges.might
  );
  const [speedEdgeValue, setSpeedEdgeValue] = useState<edgeType>(
    type?.edges.speed
  );
  const [intellectEdgeValue, setIntellectEdgeValue] = useState<edgeType>(
    type?.edges.intellect
  );

  // loads all edge values
  useEffect(() => {
    setMightEdgeValue(type?.edges.might);
    setSpeedEdgeValue(type?.edges.speed);
    setIntellectEdgeValue(type?.edges.intellect);
  }, [type?.edges?.intellect, type?.edges?.might, type?.edges?.speed]);

  if (!type || !descriptor || !foci) return null;

  return (
    <>
      <span className="pools-title">Pools</span>
      <div className="pools-container">
        <div className="pools-wrapper">
          <span>Might</span>

          <span>{mightPoolValue}</span>

          {/* adaptable corner case */}
          {descriptor?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("might")}
              className="adaptable-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {(descriptor?.name === "Intimidating" ||
            descriptor?.name === "Persevering") &&
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
              onClick={() => buttonStatControllerSubtract({
                stat: "might",
                type,
                foci,
                descriptor
              })}
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
          {descriptor?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("speed")}
              className="lawful-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {descriptor?.name === "Intimidating" &&
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
              onClick={() => buttonStatControllerSubtract({
                stat: "speed",
                type,
                foci,
                descriptor
              })}
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
          {descriptor?.name === "Adaptable" && !adaptableCornerCaseAdded ? (
            <button
              onClick={() => adaptableCornerCase("intellect")}
              className="adaptable-case-button"
            >
              +2
            </button>
          ) : null}

          {/* intimidating corner case*/}
          {(descriptor?.name === "Intimidating" ||
            descriptor?.name === "Persevering") &&
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
              onClick={() => buttonStatControllerSubtract({
                stat: "intellect",
                type,
                foci,
                descriptor
              })}
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
            onClick={() => resetPoolsPoint(type, descriptor)}
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

            {type?.name === "Jack" && !jackEdgeAdded ? (
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

            {type?.name === "Jack" && !jackEdgeAdded ? (
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

            {type?.name === "Jack" && !jackEdgeAdded ? (
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
