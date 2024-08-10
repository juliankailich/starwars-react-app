import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  gap: 14px;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyText = styled.p`
  font-size: 1.2rem'
`;
