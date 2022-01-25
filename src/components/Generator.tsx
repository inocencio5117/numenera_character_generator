import React, { useState } from "react";

import { foci, types, descriptors } from "../data/character_data";

import "../styles/Generator.scss";

function Generator() {
  const [stateType, setStateType] = useState("");
  const [stateDescriptor, setStateDescriptor] = useState("");
  const [stateFoci, setStateFoci] = useState("");

  function getFoci(e: any) {
    const foci = e.target.value;

    setStateFoci(foci);
  }

  function getType(e: any) {
    const type = e.target.value;

    setStateType(type);
  }

  function getDescriptor(e: any) {
    const descriptor = e.target.value;

    setStateDescriptor(descriptor);
  }

  function getUserInput(e: any) {
    e.preventDefault();

    console.log(stateFoci);
    console.log(stateDescriptor);
    console.log(stateType);
  }

  return (
    <div className="generator">
      <header>
        <h1>Numenera Character Creator</h1>
      </header>

      <b>I am a</b>
      <form onSubmit={(e) => getUserInput(e)}>
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

        {/* <button onClick={(e) => getUserInput(e)}>Generate</button> */}
        <input className="submit-button" type="submit" value="Generate" />
      </form>
    </div>
  );
}

export { Generator };
