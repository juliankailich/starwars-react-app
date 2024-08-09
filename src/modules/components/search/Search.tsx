import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Input } from "./search.style";
import { SearchModel } from "../../../shared/model/search.model";
import { COLORS } from "../../../shared/constants/constants";

export const Search = ({
  query,
  setQuery,
  handleSearch,
  setPage,
  setTotal
}: SearchModel) => {
  return (
    <Container>
      <Input
        placeholder="Search for characters by name, world or species"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FontAwesomeIcon
        color={COLORS.secondaryColor}
        icon={faSearch}
        style={{
          cursor: query.length > 0 ? "pointer" : "default",
          position: "relative",
          left: "-70px",
          opacity: query.length > 0 ? "1" : "0.5",
          pointerEvents: query.length > 0 ? "all" : "none",
        }}
        onClick={() => {
          handleSearch(query, 1);
          setPage(1);
          setTotal(0);
        }}
        pulse={false}
      />
      <FontAwesomeIcon
        color={COLORS.secondaryColor}
        icon={faClose}
        style={{
          cursor: query.length > 0 ? "pointer" : "default",
          position: "relative",
          left: "-70px",
          opacity: query.length > 0 ? "1" : "0.5",
          pointerEvents: query.length > 0 ? "all" : "none",
        }}
        onClick={() => {
          setPage(1);
          setTotal(0);
          handleSearch("", 1);
          setQuery("");
        }}
        pulse={false}
      />
    </Container>
  );
};
