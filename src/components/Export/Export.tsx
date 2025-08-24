import { useContext, useEffect, useState } from "react";
import "./Export.scss";
import {
  CharacterContext,
  ICharacterInfo,
} from "../../contexts/CharacterContext";
import { ExportModal } from "../ExportModal/ExportModal";
import { useExport } from "../../hooks/useExport";

function Export() {
  const [exportData, setExportData] = useState<ICharacterInfo | null>(null);
  const [openExportModal, setOpenExportModal] = useState(false);

  const { characterInfo } = useContext(CharacterContext);
  const { handleExportTXT, handleExportJSON } = useExport(exportData);

  useEffect(() => {
    setExportData(characterInfo);
  }, [characterInfo]);

  return (
    <div className="export-container">
      <button
        className="export-button"
        onClick={() => setOpenExportModal(true)}
      >
        Export character sheet
      </button>

      <span className="divider" />

      <ExportModal
        open={openExportModal}
        onClose={() => setOpenExportModal(false)}
        message={
          <div style={{ margin: "1rem 0" }}>
            <p style={{ color: "#e74c3c", fontWeight: "bold" }}>You may fill out your pool, edge and abilities for a more complete export.</p>
            <br />
            <p>Choose the format to export your character sheet:</p>
          </div>
        }
        title="Export Character Sheet"
        onJSON={handleExportJSON}
        onTXT={handleExportTXT}
      />
    </div>
  );
}

export { Export };
