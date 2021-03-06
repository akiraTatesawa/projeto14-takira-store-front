import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--container-bg);
  border-radius: 5px;
  padding: 0.7em;
  margin-bottom: 0.7em;
`;

export const Image = styled.img`
  width: 20%;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 5px;
  margin-right: 0.7em;
`;

export const ItemInfos = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-size: clamp(0.8em, 0.4em + 2vw, 1.2em);
    font-weight: 500;
    var(--text-primary);
  }
`;

export const GeneralInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 0.5em;

  h3 {
    font-size: clamp(0.8em, 0.4em + 2vw, 1.2em);
    font-weight: 400;
    line-height: 1.2em;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: clamp(0.8em, 0.4em + 2vw, 1.2em);
    font-weight: 500;
    text-align: right;
    var(--text-primary);
    margin-left: 0.9em;
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: clamp(0.8em, 0.4em + 2vw, 1.2em);
    font-weight: 500;
    var(--text-primary);
  }
`;
