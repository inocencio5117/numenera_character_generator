import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "./ConfirmationModal.scss";

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationModal({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  return (
    <Modal open={open} onClose={onCancel} center showCloseIcon={false} styles={{ modal: { borderRadius: '.5rem' } }}>
      <div className="confirmation-modal">
        <h2>{title}</h2>
        <p>{message}</p>

        <div className="confirmation-buttons">
          <button className="cancel" onClick={onCancel}>Cancel</button>
          <button className="confirm" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </Modal>
  );
}
