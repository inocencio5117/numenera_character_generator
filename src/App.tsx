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
import "./styles/Copyright.scss";
import "./styles/NavBar.scss";
import "./styles/About.scss";

import { Generator } from "./components/Generator";
import { Copyright } from "./components/Copyright";

import { CharacterContextProvider } from "./contexts/CharacterContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";

function App() {
  return (
    <CharacterContextProvider>
      <div className="main-container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Copyright />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
        <span className="trademark">TM and © 2021 Monte Cook Games, LLC.</span>
      </div>
    </CharacterContextProvider>
  );
}

export default App;
