import styled from "styled-components";

export const Slider = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-bottom: 4em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5em;
  margin: 0 0.4em;
`;

export const Circle = styled.div`
  width: 4.5em;
  height: 4.5em;
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
