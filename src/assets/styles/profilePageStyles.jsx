import styled from "styled-components";

export const ProfileMainContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 8em 2.6em 2em 2.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Username = styled.span`
  padding-top: 1.2em;
  font-size: 1.5em;
  font-weight: 500;
`;

export const ProfileOrderHistory = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 3em;
  gap: 1.5em;

  & h2 {
    font-size: 1.2em;
    font-weight: 500;
    padding-bottom: 0.5em;
    text-align: center;
  }

  & p {
    font-size: 1em;
    font-weight: 600;
    text-align: center;
    color: var(--text-error);
  }
`;

export const OrderContainer = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0px 0px 5px 2px rgb(222 222 229);
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  height: auto;
  min-height: 7em;
`;

export const Date = styled.span`
  display: inline-block;
  border: 1px solid rgba(126, 138, 151, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 100%;
  padding: 0.7em 0.7em 0.2em 0.7em;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const OrderDetails = styled.div`
  width: 100%;
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.7em;
`;

export const Items = styled.span`
  font-size: 1.2em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Total = styled.span`
  text-align: right;
  color: var(--text-error);
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
