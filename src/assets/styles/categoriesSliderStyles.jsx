import styled from "styled-components";

export const Slider = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5em;
  margin: 0 0.5em;
`;

export const Circle = styled.div`
  width: 5em;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--brand);
  border-radius: 50%;
  margin-bottom: 0.5em;
`;

export const Name = styled.span`
  font-size: 0.9em;
  color: var(--text-primary);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
