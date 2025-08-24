import "./styles/MainContainer.scss";
import "./styles/GlobalStyles.scss";
import "./styles/Divider.scss";
import "./styles/Responsive.scss";

import { CharacterContextProvider } from "./contexts/CharacterContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

import { Generator } from "./pages/Generator/Generator";
import { Copyright } from "./pages/Copyright/Copyright";
import { About } from "./pages/About/About";
import { CharacterHistory } from "./pages/CharacterHistory/CharacterHistory";

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
            <Route path="/character-history" element={<CharacterHistory />} />
          </Routes>
        </BrowserRouter>
        <span className="trademark">TM and © 2021 Monte Cook Games, LLC.</span>
      </div>
    </CharacterContextProvider>
  );
}

export default App;
