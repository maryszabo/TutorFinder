/*
Initial code from: https://www.newline.co/@andreeamaco/react-dropdown-tutorial-for-beginners-create-a-dropdown-menu-from-scratch--9831d197
Code modified for our project

Must enter: npm i styled-components
in order to install the styled components folder onto computer
*/
import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;
