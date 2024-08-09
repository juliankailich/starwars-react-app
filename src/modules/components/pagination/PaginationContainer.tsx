import React from "react";
import { PaginationModel } from "../../../shared/model/pagination.model";
import { Pagination } from "./Pagination";

const PaginationContainer = ({
  page,
  setPage,
  total,
  query,
  handleSearch,
}: PaginationModel) => {
  return (
    <Pagination
      page={page}
      setPage={setPage}
      total={total}
      query={query}
      handleSearch={handleSearch}
    />
  );
};

export default PaginationContainer;
