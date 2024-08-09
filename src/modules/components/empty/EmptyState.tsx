import React from "react";
import { EmptyTitle, Subtitle } from "./empty.style";

export const EmptyState = () => {
  return (
    <div>
      <EmptyTitle>No results found</EmptyTitle>
      <Subtitle>"use the force to get results"</Subtitle>
    </div>
  );
};
