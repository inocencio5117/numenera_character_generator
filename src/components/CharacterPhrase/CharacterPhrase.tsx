import React, { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

function CharacterPhrase() {
  const { characterInfo } = useContext(CharacterContext);

  const { type, descriptor, foci } = characterInfo;

  return (
    <>
      <p className="character-phrase">
        I am a <b>{descriptor?.name} </b> <b>{type?.name} </b>{" "}
        who <b>{foci?.name}</b>
      </p>

      <span className="divider"></span>
    </>
  );
}

export { CharacterPhrase };
