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
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border: none;
  color: var(--white-color);
  cursor: pointer;
  font-size: inherit;
    outline: none;
    border-right: 2px solid var(--border-color);
    /* border-radius: 1rem; */
    /* background-color: var(--background-light-color-2);
    padding: 0.4rem 2rem;
    
    
    /* transition: all 0.4s ease-in-out;
    margin-bottom: 0.6rem; */
    /* &:active,
    &:focus {
      background-color: var(--primary-color);
    }
    &:hover {
      background-color: var(--primary-color);
    }
    &:not(:last-child) {
      margin-right: 0.6rem;
    } */
  
`;

const ButtonsStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 2.4rem auto;
`;
export default Button;
