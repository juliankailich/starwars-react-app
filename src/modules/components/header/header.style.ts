import { keyframes, styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  padding: 12px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-top: 12px;
`;

/* funny comment: I made this animation just to simulate the force power! in my app  */
const logoShake = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const Logo = styled.img`
  width: 220px;
  height: 100%;
  margin-left: -25px;
  animation: ${logoShake} 8s ease-in-out infinite;
`;
