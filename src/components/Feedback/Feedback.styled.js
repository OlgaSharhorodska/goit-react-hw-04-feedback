import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  text-transform: capitalize;
  background-color: yellow;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: grey;
  }
  &:active {
    color: red;
  }
`;
