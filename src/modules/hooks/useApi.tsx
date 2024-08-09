import { useState } from "react";
import apiCall from "../../config/axiosConfig";
import { ApiResponse } from "../../shared/model/axios.model";
import { CharactersModel } from "../../shared/model/characters.model";
import { Planets } from "../../shared/model/planets.model";
import { Species } from "../../shared/model/species.model";
import {
  getCharacterByURL,
  getCharacterByWorldAndSpecie,
  handleError,
} from "../../shared/utils/utils";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = async (
    query: string,
    page: number,
    planets: Planets[],
    species: Species[],
    setTotal: Function
  ): Promise<CharactersModel[]> => {
    try {
      setIsLoading(true);
      const response: ApiResponse = await apiCall.get(
        `/people?search=${query}&page=${page}`
      );
      if (response && response.data.results) {
        const { results, count } = response.data;
        setTotal(count);
        const charactersWithHomeworld = await Promise.all(
          results.map(async (character: CharactersModel) => {
            const { homeworld, characterSpecie } = getCharacterByWorldAndSpecie(
              { planets, species, character }
            );
            return { ...character, homeworld, species: characterSpecie };
          })
        );
        return charactersWithHomeworld;
      } else {
        return [];
      }
    } catch (error) {
      handleError(error)
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCharactersByPlanet = async (
    query: string,
    page: number,
    planets: Planets[],
    species: Species[]
  ): Promise<CharactersModel[]> => {
    try {
      setIsLoading(true);
      const response: ApiResponse = await apiCall.get(
        `/planets?search=${query}&page=${page}`
      );
      if (response.data.results[0]) {
        const urls = response.data.results[0].residents;
        if (urls) {
          return await Promise.all(
            urls.map((characterURL: string) =>
              getCharacterByURL(characterURL, planets, species)
            )
          );
        }
      }
      return [];
    } catch (error) {
      handleError(error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCharactersBySpecie = async (
    query: string,
    page: number,
    planets: Planets[],
    species: Species[]
  ): Promise<CharactersModel[]> => {
    try {
      setIsLoading(true);
      const response: ApiResponse = await apiCall.get(
        `/species?search=${query}&page=${page}`
      );
      if (response.data.results[0]) {
        const urls = response.data.results[0].people;
        if (urls) {
          return await Promise.all(
            urls.map((characterURL: string) =>
              getCharacterByURL(characterURL, planets, species)
            )
          );
        }
      }
      return [];
    } catch (error) {
      handleError(error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchCharacters,
    fetchCharactersByPlanet,
    fetchCharactersBySpecie,
    setIsLoading,
  };
};
