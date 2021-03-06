/* eslint-disable array-callback-return */
import React, { useContext, useState } from "react";

import { foci, types, descriptors } from "../../data/character_data";

import { CharacterContext } from "../../contexts/CharacterContext";

import "../Generator/Generator.scss";

function GeneratorHeader() {
  const [stateType, setStateType] = useState("");
  const [stateDescriptor, setStateDescriptor] = useState("");
  const [stateFoci, setStateFoci] = useState("");

  const { characterInfo, setCharacterInfo } = useContext(CharacterContext);

  function getFoci(e: React.ChangeEvent<HTMLSelectElement>) {
    const foci = e.target.value;

    setStateFoci(foci);
  }

  function getType(e: React.ChangeEvent<HTMLSelectElement>) {
    const type = e.target.value;

    setStateType(type);
  }

  function getDescriptor(e: React.ChangeEvent<HTMLSelectElement>) {
    const descriptor = e.target.value;

    setStateDescriptor(descriptor);
  }

  function getUserInput(e: React.FormEvent) {
    e.preventDefault();

    setCharacterInfo({
      ...characterInfo,
      type: stateType,
      descriptor: stateDescriptor,
      foci: stateFoci,
    });
  }

  return (
    <div className="generator">
      <h1>Numenera Character Generator</h1>

      <form onSubmit={(e) => getUserInput(e)}>
        <b>I am a</b>

        <select
          name="descriptor"
          id="descriptor"
          onChange={(e) => getDescriptor(e)}
        >
          <option value="" selected disabled>
            adjective
          </option>

          {/* Destiny & Discovery */}
          <option disabled>Destiny & Discovery</option>
          {descriptors.map((descriptor) => {
            if (
              descriptor.sourcebook === "Numenera Discovery" ||
              descriptor.sourcebook === "Numenera Destiny"
            ) {
              return (
                <option value={descriptor.name} key={descriptor.name}>
                  {descriptor.name}
                </option>
              );
            }
          })}

          {/* Corebook */}
          <option disabled>Corebook</option>
          {descriptors.map((descriptor) => {
            if (descriptor.sourcebook === "Numenera Corebook") {
              return (
                <option value={descriptor.name} key={descriptor.name}>
                  {descriptor.name}
                </option>
              );
            }
          })}
        </select>

        <select name="type" id="type" onChange={(e) => getType(e)}>
          <option value="" selected disabled>
            noun
          </option>

          {/* Discovery & Destiny */}
          {types.map((type) => {
            return (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>

        <b>who</b>

        <select name="foci" id="foci" onChange={(e) => getFoci(e)}>
          <option value="" selected disabled>
            verbs
          </option>

          {/* Discovery & Destiny*/}
          <option disabled>Destiny & Discovery</option>
          {foci.map((foci) => {
            if (
              foci.sourcebook === "Numenera Discovery" ||
              foci.sourcebook === "Numenera Destiny"
            ) {
              return (
                <option value={foci.name} key={foci.name}>
                  {foci.name}
                </option>
              );
            }
          })}

          {/* Corebook */}
          <option disabled>Corebook</option>
          {foci.map((foci) => {
            if (foci.sourcebook === "Numenera Corebook") {
              return (
                <option value={foci.name} key={foci.name}>
                  {foci.name}
                </option>
              );
            }
          })}
        </select>

        <input className="submit-button" type="submit" value="Generate" />
      </form>
    </div>
  );
}

export { GeneratorHeader };
