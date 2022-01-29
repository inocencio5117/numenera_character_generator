import React from "react";

import "../styles/CustomizationPage.scss";

import { Pools } from "./Pools";
import { Skills } from "./Skills";
import { Abilities } from "./Abilities";
import { AdditionalInfo } from "./AdditionalInfo";
import { CharacterPhrase } from "./CharacterPhrase";

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
