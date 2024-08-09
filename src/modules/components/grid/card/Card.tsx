import React from "react";
import { CharactersModel } from "../../../../shared/model/characters.model";
import { Container, Text, Title } from "./card.style";

interface Props {
  characterInfo: CharactersModel;
}

export const Card = ({ characterInfo }: Props) => {
  return (
    <Container>
      <Title>{characterInfo.name}</Title>
      <Text>{`World: ${characterInfo.homeworld}`}</Text>
      <Text>{`Species: ${characterInfo.species}`}</Text>
    </Container>
  );
};
