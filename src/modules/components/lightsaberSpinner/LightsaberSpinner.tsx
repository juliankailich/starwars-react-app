import React from "react";
import {
  Container,
  RedLightsaber,
  BlueLightsaber,
  SpinnerText,
  LightsabersContainer,
} from "./lightsaberspinner.style";
import redLightsaber from "../../../assets/redLightsaber.png";
import blueLightsaber from "../../../assets/blueLightsaber.png";
import { COLORS } from "../../../shared/constants/constants";

export const LightsaberSpinner = () => {
  return (
    <Container>
      <LightsabersContainer>
        <RedLightsaber src={redLightsaber} alt="redLightsaber" />
        <BlueLightsaber src={blueLightsaber} alt="blueLightsaber" />
      </LightsabersContainer>
      <SpinnerText>
        Loading with the help of{" "}
        <span style={{ color: COLORS.mainColor }}>the force</span>...
      </SpinnerText>
    </Container>
  );
};
