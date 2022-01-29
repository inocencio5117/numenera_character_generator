import React, { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { descriptors, foci, types } from "../data/character_data";

function Skills() {
  const { characterInfo } = useContext(CharacterContext);

  const characterIndex =
    characterInfo.type !== ""
      ? types.findIndex((el) => el.name === characterInfo.type)
      : 2;

  // character data
  const descriptorData = descriptors.find(
    (desc) => desc.name === characterInfo.descriptor
  );

  const fociData = foci.find((foci) => foci.name === characterInfo.foci);

  return (
    <>
      {/* Skills */}
      <div className="skills-container">
        <span className="skills-title">Skills</span>

        <div className="skills-wrapper">
          <span className="skills-children">
            <span>Practiced</span>

            <ul>
              {types[characterIndex].skills.practiced.map((practiced) => {
                return <li key={practiced}>{practiced}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Trained</span>

            <ul>
              {types[characterIndex].skills.trained.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
              {fociData?.skills?.trained.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
              {descriptorData?.skills?.trained.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Inabilities</span>

            <ul>
              {types[characterIndex].skills.inability?.map((inability) => {
                return <li key={inability}>{inability}</li>;
              })}
              {descriptorData?.skills?.inability?.map((inability) => {
                return <li key={inability}>{inability}</li>;
              })}
            </ul>
          </span>
        </div>
      </div>

      <span className="divider"></span>
    </>
  );
}

export { Skills };
