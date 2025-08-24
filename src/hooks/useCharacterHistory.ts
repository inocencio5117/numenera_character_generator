import { useContext } from "react";
import { CharacterContext, ICharacterInfo } from "../contexts/CharacterContext";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

const useCharacterHistory = () => {
  const { characterInfo, setCharacterInfo } = useContext(CharacterContext);

  const [value, setValue, removeValue] = useLocalStorage<ICharacterInfo[]>(
    "characterHistory",
    []
  );

  const navigate = useNavigate();

  const saveCharacterToHistory = () => {
    const isDuplicate = value.some(
      (item) =>
        item.type?.name === characterInfo.type?.name &&
        item.descriptor?.name === characterInfo.descriptor?.name &&
        item.foci?.name === characterInfo.foci?.name
    );
    if (!isDuplicate) {
      setValue((prev) => [characterInfo, ...prev]);
    }
  };

  const loadCharacterFromHistory = (index: number) => {
    const characterToLoad = value[index];
    if (characterToLoad) {
      setCharacterInfo(characterToLoad);
      navigate("/generator");
      window.scrollTo(0, 0);
    }
  };

  const clearHistory = () => {
    removeValue();
  };

  if (value.length > 50) {
    setValue([...value.slice(0, 50)]);
  }

  return {
    history: value,
    saveCharacterToHistory,
    loadCharacterFromHistory,
    clearHistory,
  };
};

export { useCharacterHistory };
