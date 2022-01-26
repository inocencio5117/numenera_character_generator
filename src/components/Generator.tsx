import React, { useContext, useState } from "react";

import { foci, types, descriptors } from "../data/character_data";

import { CharacterContext } from "../contexts/CharacterContext";

import "../styles/Generator.scss";

function Generator() {
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
      <header>
        <h1>Numenera Character Creator</h1>
      </header>

      <form onSubmit={(e) => getUserInput(e)}>
        <b>I am a</b>
        <select
          name="descriptor"
          id="descriptor"
          onChange={(e) => getDescriptor(e)}
        >
          <option value="" selected disabled></option>

          {descriptors.map((descriptor) => {
            return (
              <option value={descriptor.name} key={descriptor.name}>
                {descriptor.name}
              </option>
            );
          })}
        </select>

        <select name="type" id="type" onChange={(e) => getType(e)}>
          <option value="" selected disabled></option>

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
          <option value="" selected disabled></option>

          {foci.map((foci) => {
            return (
              <option value={foci.name} key={foci.name}>
                {foci.name}
              </option>
            );
          })}
        </select>

        <input className="submit-button" type="submit" value="Generate" />
      </form>
    </div>
  );
}

export { Generator };
