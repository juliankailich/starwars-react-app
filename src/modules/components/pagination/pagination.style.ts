import { styled } from "styled-components";
import { COLORS } from "../../../shared/constants/constants";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Page = styled.p`
  font-size: 1rem;
  color: ${COLORS.secondaryColor};
`;
