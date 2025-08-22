import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

import "./Abilities.scss";

function Abilities() {
  function removeSelectedAbility(ability: string) {
    setSelectedAbility(selectedAbility.filter((item) => item !== ability));
  }

  function addSelectedAbility(ability: string) {
    if (selectedAbility.length === 2) return;
    if (selectedAbility.some((item) => item === ability)) return;

    setSelectedAbility([...selectedAbility, ability]);
  }

  const { characterInfo } = useContext(CharacterContext);

  const { type, descriptor, foci } = characterInfo;


  // Abilities
  const [selectedAbility, setSelectedAbility] = useState<string[]>([]);

  useEffect(() => {
    setSelectedAbility(selectedAbility);
  }, [selectedAbility]);

  if (!type || !descriptor || !foci) return null;

  return (
    <>
      <div className="abilities-container">
        <span className="abilities-title">Abilities</span>

        <div className="abilities-wrapper">
          <span className="abilities-children">
            <span>Fixed Abilities:</span>

            <span className="abilities-fixed">
              {type?.name === "Jack" ? (
                <span>{type.fixedability?.map((ability) => ability)}</span>
              ) : null}

              {foci?.abilities?.map((abilities) => {
                return <span key={abilities}>{abilities}</span>;
              })}
              {descriptor?.abilities?.map((abilities) => {
                return <span key={abilities}>{abilities}</span>;
              })}
            </span>
          </span>

          <span className="abilities-children">
            {selectedAbility.length === 2 ? null : (
              <span>Click to choose two from the following:</span>
            )}

            <span className="abilities-choice">
              {selectedAbility.length === 2
                ? null
                : type?.abilities?.map((ability) => {
                    return (
                      <span
                        onClick={() => addSelectedAbility(ability)}
                        key={ability}
                      >
                        {ability}
                      </span>
                    );
                  })}
            </span>

            {selectedAbility.length === 0 ? null : (
              <span>
                <br />
                Click to remove
                <br />
                Selected:
              </span>
            )}
            <span className="abilities-selected">
              {selectedAbility?.map((ability) => {
                return (
                  <span
                    onClick={() => removeSelectedAbility(ability)}
                    key={ability}
                  >
                    {ability}
                  </span>
                );
              })}
            </span>
          </span>
        </div>
      </div>

      <span className="divider"></span>
    </>
  );
}

export { Abilities };
