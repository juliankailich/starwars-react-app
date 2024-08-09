import { styled } from "styled-components";
import { COLORS } from "../../../shared/constants/constants";

export const EmptyTitle = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.secondaryColor};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  color: ${COLORS.mainColor};
  text-align: center;
  margin-top: -12px;
  font-style: italic;
`;
