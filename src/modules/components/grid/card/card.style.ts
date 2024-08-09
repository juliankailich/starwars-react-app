import { styled } from "styled-components";
import { COLORS } from "../../../../shared/constants/constants";

export const Container = styled.div`
  width: 180px;
  height: 120px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid ${COLORS.mainColor};
  border-radius: 8px;
  text-align: center;
`;

export const Text = styled.p`
  color: ${COLORS.secondaryColor};
  font-size: 0.8rem;
  margin: 0;
`;

export const Title = styled.p`
  color: ${COLORS.mainColor};
  font-size: 1rem;
  margin: 0;
`;
