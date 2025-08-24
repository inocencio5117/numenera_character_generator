import React, { useContext, useEffect, useState } from "react";

import { CharacterContext } from "../../contexts/CharacterContext";

import {
  Descriptor,
  descriptorsRepository,
} from "../../assets/data/Descriptors";
import { Type, typesRepository } from "../../assets/data/Types";
import { Foci, fociRepository } from "../../assets/data/Foci";

import "./Generator.scss";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { useCharacterHistory } from "../../hooks/useCharacterHistory";

function GeneratorHeader() {
  const [stateType, setStateType] = useState<Type | null>(null);
  const [stateDescriptor, setStateDescriptor] = useState<Descriptor | null>(
    null
  );
  const [stateFoci, setStateFoci] = useState<Foci | null>(null);

  const [openModal, setOpenModal] = useState(false);

  const { characterInfo, setCharacterInfo } = useContext(CharacterContext);
  const { saveCharacterToHistory } = useCharacterHistory();

  function getFoci(e: React.ChangeEvent<HTMLSelectElement>) {
    const fociFormValue = e.target.value;

    const fociData = fociRepository.find((foci) => foci.name === fociFormValue);
    setStateFoci(fociData ?? null);
  }

  function getType(e: React.ChangeEvent<HTMLSelectElement>) {
    const type = e.target.value;

    const typeData =
      typesRepository[typesRepository.findIndex((el) => el.name === type)];
    setStateType(typeData ?? null);
  }

  function getDescriptor(e: React.ChangeEvent<HTMLSelectElement>) {
    const descriptor = e.target.value;

    const descriptorData = descriptorsRepository.find(
      (desc) => desc.name === descriptor
    );
    setStateDescriptor(descriptorData ?? null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setCharacterInfo(prev => ({
      ...prev,
      type: stateType,
      descriptor: stateDescriptor,
      foci: stateFoci,
    }));
  }

  function randomize() {
    const randomType =
      typesRepository[Math.floor(Math.random() * typesRepository.length)];
    const randomDescriptor =
      descriptorsRepository[
        Math.floor(Math.random() * descriptorsRepository.length)
      ];
    const randomFoci =
      fociRepository[Math.floor(Math.random() * fociRepository.length)];

    setStateType(randomType);
    setStateDescriptor(randomDescriptor);
    setStateFoci(randomFoci);
  }

  function reset() {
    setCharacterInfo({
      ...characterInfo,
      type: null,
      descriptor: null,
      foci: null,
    });
    setStateType(null);
    setStateDescriptor(null);
    setStateFoci(null);
  }

  useEffect(() => {
    if (
      !characterInfo.type ||
      !characterInfo.descriptor ||
      !characterInfo.foci
    ) {
      return;
    }

    saveCharacterToHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterInfo.descriptor, characterInfo.type, characterInfo.foci]);

  return (
    <div className="generator">
      <h1>Numenera Character Generator</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="selectors">
          <b>I am a</b>

          <select
            name="descriptor"
            id="descriptor"
            onChange={(e) => getDescriptor(e)}
            value={stateDescriptor?.name ?? ""}
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

          <select
            name="type"
            id="type"
            onChange={(e) => getType(e)}
            value={stateType?.name ?? ""}
          >
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

          <select
            name="foci"
            id="foci"
            onChange={(e) => getFoci(e)}
            value={stateFoci?.name ?? ""}
          >
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
        </div>

        <div className="buttons">
          <input className="submit-button" type="submit" value="Generate" />
          <input
            className="randomize-button"
            onClick={randomize}
            type="button"
            value="Randomize"
          />
          <input
            className="reset-button"
            onClick={() => setOpenModal(true)}
            type="button"
            value="Reset"
          />
        </div>
      </form>

      <ConfirmationModal
        open={openModal}
        title="Reset Character"
        message="Are you sure you want to reset your character? This action cannot be undone."
        onConfirm={() => {
          reset();
          setOpenModal(false);
        }}
        onCancel={() => setOpenModal(false)}
      />
    </div>
  );
}

export { GeneratorHeader };
