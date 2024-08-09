import { styled } from "styled-components";
import { COLORS } from "../../../shared/constants/constants";

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;
  background-color: transparent;
  border: 1px solid ${COLORS.mainColor};
  color: ${COLORS.secondaryColor};
  padding: 12px;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
`;

