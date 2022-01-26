import React, { createContext, useState } from "react";

interface ICharacterInfo {
  type: string;
  descriptor: string;
  foci: string;
}

interface ICharacterContextProps {
  characterInfo: ICharacterInfo;
  setCharacterInfo: React.Dispatch<React.SetStateAction<ICharacterInfo>>;
}

const DEFAULT_CHARACTER_INFO = {
  characterInfo: {
    type: "",
    descriptor: "",
    foci: "",
  },
  setCharacterInfo: () => {},
};

const CharacterContext = createContext<ICharacterContextProps>(
  DEFAULT_CHARACTER_INFO
);

const CharacterContextProvider: React.FC = ({ children }) => {
  const [characterInfo, setCharacterInfo] = useState(
    DEFAULT_CHARACTER_INFO.characterInfo
  );

  return (
    <CharacterContext.Provider value={{ characterInfo, setCharacterInfo }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContextProvider, CharacterContext };
