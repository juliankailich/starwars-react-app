import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import Characters from "../../components/grid/CharactersContainer";
import Header from "../../components/header/Header";
import Search from "../../components/search/SearchContainer";
import { LightsaberSpinner } from "../../components/lightsaberSpinner/LightsaberSpinner";
import { Container } from "./home.styles";
import {
  checkDuplicates,
  getAllPlanets,
  getAllSpecies,
  handleError,
} from "../../../shared/utils/utils";
import { EmptyState } from "../../components/empty/EmptyState";
import Pagination from "../../components/pagination/PaginationContainer";
import { CharactersModel } from "../../../shared/model/characters.model";
import { Planets } from "../../../shared/model/planets.model";
import { Species } from "../../../shared/model/species.model";

export const Home = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [characters, setCharacters] = useState<CharactersModel[] | null>(null);
  const [query, setQuery] = useState<string>("");
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [species, setSpecies] = useState<Species[]>([]);

  const {
    isLoading,
    setIsLoading,
    fetchCharacters,
    fetchCharactersByPlanet,
    fetchCharactersBySpecie
  } = useApi();

  const fetchInitialData = async () => {
    try {
      setIsLoading(true);
      const allPlanets = await getAllPlanets();
      const allSpecies = await getAllSpecies();
      setPlanets(allPlanets);
      setSpecies(allSpecies);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleSearch = async (query: string, page: number) => {
    try {
      setIsLoading(true);
      const [charactersData, charactersByPlanet, charactersBySpecie] =
        await Promise.all([
          fetchCharacters(query, page, planets, species, setTotal),
          fetchCharactersByPlanet(query, page, planets, species),
          fetchCharactersBySpecie(query, page, planets, species),
        ]);

      let allResults: CharactersModel[] = [];

      if (charactersData.length > 0)
        allResults = allResults.concat(charactersData);
      if (charactersByPlanet.length > 0)
        allResults = allResults.concat(charactersByPlanet);
      if (charactersBySpecie.length > 0)
        allResults = allResults.concat(charactersBySpecie);

      const filteredCharacters = checkDuplicates(allResults);

      setCharacters(filteredCharacters.length > 0 ? filteredCharacters : null);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LightsaberSpinner />}
      <Container>
        <Header />
        <Search
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          setPage={setPage}
          setTotal={setTotal}
        />
        {characters && characters.length > 0 ? (
          <>
            <Characters characters={characters} />
            <Pagination
              page={page}
              setPage={setPage}
              total={total}
              query={query}
              handleSearch={handleSearch}
            />
          </>
        ) : (
          <EmptyState />
        )}
      </Container>
    </>
  );
};
