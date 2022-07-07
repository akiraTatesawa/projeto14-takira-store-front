import styled from "styled-components";

export const SliderContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
  margin: 0 5px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: var(--brand);
  border-radius: 50%;
  margin-bottom: 7px;
`;

export const Name = styled.p`
  font-size: 12px;
  color: var(--text-primary);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
