import React, { createContext, useState } from "react";
import { Foci } from "../../assets/data/Foci";
import { Type } from "../../assets/data/Types";
import { Descriptor } from "../../assets/data/Descriptors";

export interface ICharacterInfo {
  type: Type | null;
  descriptor: Descriptor | null;
  foci: Foci | null;
  pools: {
    might: number;
    speed: number;
    intellect: number;
  };
  edge: {
    might: number;
    speed: number;
    intellect: number;
  };
  abilities: string[] | null;
}

interface ICharacterContextProps {
  characterInfo: ICharacterInfo;
  setCharacterInfo: React.Dispatch<React.SetStateAction<ICharacterInfo>>;
}

const DEFAULT_CHARACTER_INFO = {
  characterInfo: {
    type: null,
    descriptor: null,
    foci: null,
    pools: {
      might: 0,
      speed: 0,
      intellect: 0,
    },
    edge: {
      might: 0,
      speed: 0,
      intellect: 0,
    },
    abilities: [],
  },
  setCharacterInfo: () => {},
};

const CharacterContext = createContext<ICharacterContextProps>(
  DEFAULT_CHARACTER_INFO
);

const CharacterContextProvider: React.FC = ({ children }) => {
  const [characterInfo, setCharacterInfo] = useState<ICharacterInfo>(
    DEFAULT_CHARACTER_INFO.characterInfo
  );

  return (
    <CharacterContext.Provider value={{ characterInfo, setCharacterInfo }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContextProvider, CharacterContext };
