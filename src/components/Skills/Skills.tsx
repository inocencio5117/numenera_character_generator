import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

import "./Skills.scss";

function Skills() {
  const { characterInfo } = useContext(CharacterContext);

  const { type, descriptor, foci } = characterInfo;

  if (!type || !descriptor || !foci) return null;

  return (
    <>
      {/* Skills */}
      <div className="skills-container">
        <span className="skills-title">Skills</span>

        <div className="skills-wrapper">
          <span className="skills-children">
            <span>Practiced</span>

            <ul>
              {characterInfo?.type?.skills?.practiced?.map((practiced) => {
                return <li key={practiced}>{practiced}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Trained</span>

            <ul>
              {type?.skills.trained?.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
              {foci?.skills?.trained?.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
              {descriptor?.skills?.trained?.map((trained) => {
                return <li key={trained}>{trained}</li>;
              })}
            </ul>
          </span>

          <span className="skills-children">
            <span>Inabilities</span>

            <ul>
              {type?.skills.inability?.map((inability) => {
                return <li key={inability}>{inability}</li>;
              })}
              {descriptor?.skills?.inability?.map((inability) => {
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
