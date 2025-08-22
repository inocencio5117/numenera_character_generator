import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import { CustomizationPage } from "../../components/CustomizationPage/CustomizationPage";
import { GeneratorHeader } from "../../components/GeneratorHeader/GeneratorHeader";

function Generator() {
  const { characterInfo } = useContext(CharacterContext);

  const loadedInfo =
    Boolean(characterInfo?.descriptor) &&
    Boolean(characterInfo?.foci) &&
    Boolean(characterInfo?.type);

  return (
    <>
      <GeneratorHeader />
      {loadedInfo ? <CustomizationPage /> : null}
    </>
  );
}

export { Generator };
