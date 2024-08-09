import { keyframes, styled } from "styled-components";
import { COLORS } from "../../../shared/constants/constants";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LightsabersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const translateRed = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const translateBlue = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-45px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const RedLightsaber = styled.img`
  width: 80px;
  height: 80px;
  animation: ${translateRed} 1.8s linear infinite;
`;

export const BlueLightsaber = styled.img`
  width: 85px;
  height: 85px;
  animation: ${translateBlue} 1.8s linear infinite;
`;

export const SpinnerText = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.secondaryColor};
`;
