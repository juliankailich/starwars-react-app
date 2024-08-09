import React from "react";
import { SearchModel } from "../../../shared/model/search.model";
import { Search } from "./Search";

const SearchContainer = ({
  query,
  setQuery,
  handleSearch,
  setPage,
  setTotal,
}: SearchModel) => {
  const props = {
    query,
    setQuery,
    handleSearch,
    setPage,
    setTotal,
  };

  return <Search {...props} />;
};

export default SearchContainer;
