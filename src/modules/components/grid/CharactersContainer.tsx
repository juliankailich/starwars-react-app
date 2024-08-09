import React from "react";
import { CharactersModel } from "../../../shared/model/characters.model";
import { Characters } from "./Characters";

interface Props {
  characters: CharactersModel[];
}

const CharactersContainer = ({ characters }: Props) => {
  return <Characters characters={characters} />;
};

export default CharactersContainer;
