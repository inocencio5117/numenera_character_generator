import Modal from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "./ExportModal.scss";
import { ReactNode } from "react";

interface ExportModalProps {
  open: boolean;
  title: string;
  message: ReactNode | string;
  onTXT: () => void;
  onJSON: () => void;
  onClose: () => void;
}

function ExportModal({
  open,
  title,
  message,
  onJSON,
  onTXT,
  onClose,
}: ExportModalProps) {
  const handleInteraction = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      styles={{ modal: { borderRadius: ".5rem" } }}
    >
      <div className="export-modal">
        <h2>{title}</h2>
        <div>{message}</div>

        <div className="export-buttons">
          <button onClick={() => handleInteraction(onJSON)}>
            JSON
          </button>
          <button onClick={() => handleInteraction(onTXT)}>
            TXT
          </button>
        </div>
      </div>
    </Modal>
  );
}

export { ExportModal };
