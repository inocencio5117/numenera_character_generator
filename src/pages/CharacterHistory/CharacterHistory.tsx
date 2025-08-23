import { useCharacterHistory } from "../../hooks/useCharacterHistory";
import { useState } from "react";
import { ConfirmationModal } from "../../components/ConfirmationModal/ConfirmationModal";

import "./CharacterHistory.scss";

export function CharacterHistory() {
  const { history, loadCharacterFromHistory, clearHistory } =
    useCharacterHistory();

  const [openModal, setOpenModal] = useState(false);

  const handleClearHistory = () => {
    clearHistory();
    setOpenModal(false);
  };

  return (
    <>
      <div className="character-history-intro">
        <h3>Reminder:</h3>
        <p>
          Keep in mind that the character history is limited to 50 characters.
          And also it will only save your characters on your browser's local
          storage, so if you clear your browser's cache or use a different
          browser, the history will not be available.
        </p>
      </div>

      <div className="character-history-container">
        <h1>Character History</h1>

        {history.length > 0 && (
          <div className="character-history-actions">
            <button onClick={() => setOpenModal(true)}>Clear history</button>
          </div>
        )}

        {history.length === 0 ? (
          <p>No character history available.</p>
        ) : (
          <div className="character-history-list">
            {history.map((character, index) => (
              <div key={index} className="character-history-item">
                <span
                  className="character-history-fake-link"
                  onClick={() => loadCharacterFromHistory(index)}
                >
                  #{index + 1} - I am a {character.descriptor?.name}{" "}
                  {character.type?.name} who {character.foci?.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <ConfirmationModal
        title="Clear History"
        message="Are you sure you want to clear the character history? This action cannot be undone."
        onConfirm={handleClearHistory}
        onCancel={() => setOpenModal(false)}
        open={openModal}
      />
    </>
  );
}
