import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

import "./AdditionalInfo.scss";

function AdditionalInfo() {
  const { characterInfo } = useContext(CharacterContext);

  const { type, descriptor, foci } = characterInfo;

  // shins
  const [shinsValue, setShinsValue] = useState<number | undefined>(0);

  useEffect(() => {
    setShinsValue(
      (descriptor?.shins ? descriptor.shins : 0) + (type?.shins || 0)
    );
  }, [descriptor?.shins, type?.shins]);

  return (
    <>
      <div className="additional-container">
        <span className="additional-title">Additional Information</span>

        <div className="additional-wrapper">
          <span className="additional-children">
            <b>Equipment:</b>

            <ul>
              {type?.equipment?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {foci?.equipment?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {descriptor?.equipment?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          </span>

          <span className="additional-children">
            <b>Shins: {shinsValue}</b>

            <b>Cyphers</b>
            {type?.cyphers?.map((cypher) => (
              <span key={cypher}>{cypher}</span>
            ))}
            <span>Cypher limit: {type?.cypherlimit}</span>

            <b>Oddities</b>
            {type?.oddities.map((oddity) => (
              <span key={oddity}>{oddity}</span>
            ))}

            {foci?.extras || descriptor?.extras ? <b>Extras:</b> : null}
            <ul>
              {foci?.extras?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {descriptor?.extras?.map((extras) => {
                return <li key={extras}>{extras}</li>;
              })}
            </ul>

            {foci?.artifacts ? <b>Artifacts:</b> : null}
            <ul>
              {foci?.artifacts?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>

            {descriptor?.armor || foci?.armor ? (
              <b>Armor: {(descriptor?.armor || 0) + (foci?.armor || 0)}</b>
            ) : null}
          </span>

          <span className="additional-children">
            <b>References:</b>

            <b>{type?.name}</b>
            <span>
              {type?.sourcebook}, page {type?.page}
            </span>

            <b>{foci?.name}</b>
            <span>
              {foci?.sourcebook}, page {foci?.page}
            </span>

            <b>{descriptor?.name}</b>
            <span>
              {descriptor?.sourcebook}, page {descriptor?.page}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export { AdditionalInfo };
