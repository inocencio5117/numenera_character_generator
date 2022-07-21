import React from "react";

import "./CustomizationPage.scss";

import { Pools } from "../Pools/Pools";
import { Skills } from "../Skills/Skills";
import { Abilities } from "../Abilities/Abilities";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";
import { CharacterPhrase } from "../CharacterPhrase/CharacterPhrase";

function CustomizationPage() {
  return (
    <div className="customization-page">
      <CharacterPhrase />

      <Pools />

      <Skills />

      <Abilities />

      <AdditionalInfo />
    </div>
  );
}

export { CustomizationPage };
