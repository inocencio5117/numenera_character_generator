import React, { useContext, useState } from "react";

import { CharacterContext } from "../../contexts/CharacterContext";

import { Descriptor, descriptorsRepository } from "../../assets/data/Descriptors";
import { Type, typesRepository } from "../../assets/data/Types";
import { Foci, fociRepository } from "../../assets/data/Foci";


import "./Generator.scss";

function GeneratorHeader() {
  const [stateType, setStateType] = useState<Type | null>(null);
  const [stateDescriptor, setStateDescriptor] = useState<Descriptor | null>(null);
  const [stateFoci, setStateFoci] = useState<Foci | null>(null);

  const { characterInfo, setCharacterInfo } = useContext(CharacterContext);

  function getFoci(e: React.ChangeEvent<HTMLSelectElement>) {
    const fociFormValue = e.target.value;

    const fociData = fociRepository.find((foci) => foci.name === fociFormValue);
    setStateFoci(fociData ?? null);
  }

  function getType(e: React.ChangeEvent<HTMLSelectElement>) {
    const type = e.target.value;

    const characterIndex =
      !characterInfo.type
        ? typesRepository.findIndex((el) => el.name === type)
        : 2;
    const typeData = typesRepository[characterIndex];
    setStateType(typeData ?? null);
  }

  function getDescriptor(e: React.ChangeEvent<HTMLSelectElement>) {
    const descriptor = e.target.value;

    const descriptorData = descriptorsRepository.find(
      (desc) => desc.name === descriptor
    );
    setStateDescriptor(descriptorData ?? null);
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
          {descriptorsRepository?.map((descriptor) => {
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
            return null;
          })}

          {/* Corebook */}
          <option disabled>Corebook</option>
          {descriptorsRepository?.map((descriptor) => {
            if (descriptor.sourcebook === "Numenera Corebook") {
              return (
                <option value={descriptor.name} key={descriptor.name}>
                  {descriptor.name}
                </option>
              );
            }

            return null;
          })}
        </select>

        <select name="type" id="type" onChange={(e) => getType(e)}>
          <option value="" selected disabled>
            noun
          </option>

          {/* Discovery & Destiny */}
          {typesRepository?.map((type) => {
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
          {fociRepository?.map((foci) => {
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

            return null;
          })}

          {/* Corebook */}
          <option disabled>Corebook</option>
          {fociRepository.map((foci) => {
            if (foci.sourcebook === "Numenera Corebook") {
              return (
                <option value={foci.name} key={foci.name}>
                  {foci.name}
                </option>
              );
            }

            return null;
          })}
        </select>

        <input className="submit-button" type="submit" value="Generate" />
      </form>
    </div>
  );
}

export { GeneratorHeader };
