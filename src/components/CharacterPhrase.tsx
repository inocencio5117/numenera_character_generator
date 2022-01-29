import React, { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContext";

function CharacterPhrase() {
  // context
  const { characterInfo } = useContext(CharacterContext);

  return (
    <>
      <p className="character-phrase">
        I am a <b>{characterInfo.descriptor} </b> <b>{characterInfo.type} </b>{" "}
        who <b>{characterInfo.foci}</b>
      </p>

      <span className="divider"></span>
    </>
  );
}

export { CharacterPhrase };
