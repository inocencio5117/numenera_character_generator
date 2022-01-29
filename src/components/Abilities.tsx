import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { descriptors, foci, types } from "../data/character_data";

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

  const characterIndex =
    characterInfo.type !== ""
      ? types.findIndex((el) => el.name === characterInfo.type)
      : 2;

  // character data
  const descriptorData = descriptors.find(
    (desc) => desc.name === characterInfo.descriptor
  );

  // Abilities
  const [selectedAbility, setSelectedAbility] = useState<string[]>([]);

  useEffect(() => {
    setSelectedAbility(selectedAbility);
  }, [selectedAbility]);

  const fociData = foci.find((foci) => foci.name === characterInfo.foci);

  return (
    <>
      <div className="abilities-container">
        <span className="abilities-title">Abilities</span>

        <div className="abilities-wrapper">
          <span className="abilities-children">
            <span>Fixed Abilities:</span>

            <span className="abilities-fixed">
              {types[characterIndex].name === "Jack" ? (
                <span>{types[characterIndex].fixedability}</span>
              ) : null}

              {fociData?.abilities?.map((abilities) => {
                return <span>{abilities}</span>;
              })}
              {descriptorData?.abilities?.map((abilities) => {
                return <span>{abilities}</span>;
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
                : types[characterIndex].abilities.map((abilities) => {
                    return (
                      <span onClick={() => addSelectedAbility(abilities)}>
                        {abilities}
                      </span>
                    );
                  })}
            </span>

            {selectedAbility.length === 0 ? null : <span>Selected:</span>}
            <span className="abilities-selected">
              {selectedAbility.map((ability) => {
                return (
                  <span onClick={() => removeSelectedAbility(ability)}>
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
