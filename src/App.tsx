import React from "react";
import "./styles/MainContainer.scss";
import "./styles/MainContainer.scss";
import "./styles/GlobalStyles.scss";
import "./styles/Pools.scss";
import "./styles/Skills.scss";
import "./styles/Abilities.scss";
import "./styles/AdditionalInfo.scss";
import "./styles/Divider.scss";
import "./styles/Responsive.scss";

import { Generator } from "./components/Generator";
import { CustomizationPage } from "./components/CustomizationPage";

import { CharacterContextProvider } from "./contexts/CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <div className="main-container">
        <Generator />
        <CustomizationPage />

        <span className="trademark">TM and © 2021 Monte Cook Games, LLC.</span>
      </div>
    </CharacterContextProvider>
  );
}

export default App;
