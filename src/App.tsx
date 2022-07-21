import React from "react";
import "./styles/MainContainer.scss";
import "./styles/GlobalStyles.scss";
import "./styles/Divider.scss";
import "./styles/Responsive.scss";

import { Generator } from "./components/Generator/Generator";
import { Copyright } from "./components/Copyright/Copyright";

import { CharacterContextProvider } from "./contexts/CharacterContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { About } from "./components/About/About";

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
