import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import { descriptors, foci, types } from "../../assets/data/character_data";

import "./AdditionalInfo.scss";

function AdditionalInfo() {
  const { characterInfo } = useContext(CharacterContext);

  // character data
  const characterIndex =
    characterInfo.type !== ""
      ? types.findIndex((el) => el.name === characterInfo.type)
      : 2;

  const descriptorData = descriptors.find(
    (desc) => desc.name === characterInfo.descriptor
  );

  const fociData = foci.find((foci) => foci.name === characterInfo.foci);

  // shins
  const [shinsValue, setShinsValue] = useState<number | undefined>(0);

  useEffect(() => {
    setShinsValue(
      (descriptorData?.shins ? descriptorData.shins : 0) +
        types[characterIndex].shins
    );
  }, [characterIndex, descriptorData?.shins]);

  return (
    <>
      <div className="additional-container">
        <span className="additional-title">Additional Information</span>

        <div className="additional-wrapper">
          <span className="additional-children">
            <b>Equipment:</b>

            <ul>
              {types[characterIndex].equipment.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {fociData?.equipment?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {descriptorData?.equipment?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          </span>

          <span className="additional-children">
            <b>Shins: {shinsValue}</b>

            <b>Cyphers</b>
            <span>{types[characterIndex].cyphers}</span>
            <span>Cypher limit: {types[characterIndex].cypherlimit}</span>

            <b>Oddities</b>
            <span>{types[characterIndex].oddities}</span>

            {fociData?.extras || descriptorData?.extras ? <b>Extras:</b> : null}
            <ul>
              {fociData?.extras?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
              {descriptorData?.extras?.map((extras) => {
                return <li key={extras}>{extras}</li>;
              })}
            </ul>

            {fociData?.artifacts ? <b>Artifacts:</b> : null}
            <ul>
              {fociData?.artifacts?.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>

            {descriptorData?.armor || fociData?.armor ? (
              <b>
                Armor: {(descriptorData?.armor || 0) + (fociData?.armor || 0)}
              </b>
            ) : null}
          </span>

          <span className="additional-children">
            <b>References:</b>

            <b>{types[characterIndex].name}</b>
            <span>
              {types[characterIndex].sourcebook}, page{" "}
              {types[characterIndex].page}
            </span>

            <b>{fociData?.name}</b>
            <span>
              {fociData?.sourcebook}, page {fociData?.page}
            </span>

            <b>{descriptorData?.name}</b>
            <span>
              {descriptorData?.sourcebook}, page {descriptorData?.page}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export { AdditionalInfo };
