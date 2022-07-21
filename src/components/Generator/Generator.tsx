import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import { CustomizationPage } from "../CustomizationPage/CustomizationPage";
import { GeneratorHeader } from "../GeneratorHeader/GeneratorHeader";

import "./Generator.scss";

function Generator() {
  const { characterInfo } = useContext(CharacterContext);

  const loadedInfo =
    characterInfo.descriptor !== "" &&
    characterInfo.foci !== "" &&
    characterInfo.type !== "";

  return (
    <>
      <GeneratorHeader />
      {loadedInfo ? <CustomizationPage /> : null}
    </>
  );
}

export { Generator };
