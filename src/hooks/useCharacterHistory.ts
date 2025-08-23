import { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

const useCharacterHistory = () => {
    const { characterInfo, setCharacterInfo } = useContext(CharacterContext);

    const [value, setValue, removeValue] = useLocalStorage<typeof characterInfo[]>("characterHistory", []);

    const navigate = useNavigate();

    const saveCharacterToHistory = () => {
        if (characterInfo !== undefined && characterInfo !== null) {
            const isDuplicate = value.some(
                (item) => JSON.stringify(item) === JSON.stringify(characterInfo)
            );
            if (!isDuplicate) {
                const newHistory = [characterInfo, ...value];
                setValue(newHistory);
            }
        }
    };

    const loadCharacterFromHistory = (index: number) => {
        const characterToLoad = value[index];
        if (characterToLoad) {
            setCharacterInfo(characterToLoad);
            navigate("/generator");
            window.scrollTo(0, 0)
        }
    };

    const clearHistory = () => {
        removeValue();
    }

    if (value.length > 50) {
        setValue([...value.slice(0, 50)]);
    }

    return {
        history: value,
        saveCharacterToHistory,
        loadCharacterFromHistory,
        clearHistory,
    };
}

export { useCharacterHistory };