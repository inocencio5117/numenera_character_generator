// import React, { useState } from "react";
import "./styles/MainContainer.scss";
import "./styles/MainContainer.scss";
import "./styles/GlobalStyles.scss";

import { Generator } from "./components/Generator";
import { CustomizationPage } from "./components/CustomizationPage";

function App() {
  return (
    <div className="main-container">
      <Generator />
      <CustomizationPage />
    </div>
  );
}

export default App;
