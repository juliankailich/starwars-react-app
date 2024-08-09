import React from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Page } from "./pagination.style";
import { COLORS } from "../../../shared/constants/constants";
import { PaginationModel } from "../../../shared/model/pagination.model";

export const Pagination = ({
  page,
  setPage,
  total,
  query,
  handleSearch,
}: PaginationModel) => {
  return (
    <Container>
      <FontAwesomeIcon
        color={COLORS.mainColor}
        icon={faArrowCircleLeft}
        onClick={() => {
          setPage(page - 1);
          handleSearch(query, page - 1);
        }}
        style={{
          cursor: page > 1 ? "pointer" : "default",
          opacity: page > 1 ? "1" : "0.5",
          pointerEvents: page > 1 ? "all" : "none",
        }}
        size={'lg'}
      />
      <Page>{page}</Page>
      <FontAwesomeIcon
        color={COLORS.mainColor}
        icon={faArrowCircleRight}
        onClick={() => {
          setPage(page + 1);
          handleSearch(query, page + 1);
        }}
        style={{
          cursor: page < total / 10 ? "pointer" : "default",
          opacity: page < total / 10 ? "1" : "0.5",
          pointerEvents: page < total / 10 ? "all" : "none",
        }}
        size={'lg'}
      />
    </Container>
  );
};
