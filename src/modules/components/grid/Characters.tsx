import React from "react";
import { CharactersModel } from "../../../shared/model/characters.model";
import { Card } from "./card/Card";
import { Container } from "./characters.style";

interface Props {
  characters: CharactersModel[];
}

export const Characters = ({ characters }: Props) => {
  return (
    <>
      <Container>
        {characters?.length > 0 &&
          characters.map((character: CharactersModel) => (
            <Card characterInfo={character} key={character.name} />
          ))}
      </Container>
    </>
  );
};
