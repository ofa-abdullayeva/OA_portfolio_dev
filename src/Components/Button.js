import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  padding: 1.3rem;
  background-color: var(--primary-color);
  margin-right: 1rem;
  border-radius: 0.4rem;
  border: none;
  color: var(--white-color);
  cursor: pointer;
  font-size: inherit;
  outline: none;
  border-right: 2px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover{
    transform: scale(1.1);
    background-color: var(--white-color);
    color: var(--primary-color);
  }
  @media screen and (max-width: 890px) {
    /* width: 100%; */
    /* display: grid; */
    grid-template-columns: repeat(3, 1fr);
    margin: 0.6rem 0.5rem;
    padding: 0.5rem;
  }
`;
const ButtonsStyled = styled.div`
  margin: 1rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;

`;
export default Button;
