import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

// import GlobalStyle from '../styles/GlobalSyle'

function SideBar({navToggle, setNavToggle}) {
  return (
    <SideBarStyled className={`${navToggle? 'nav-toggle' : ''}`}>
      <Navigation setNavToggle={setNavToggle} navToggle={navToggle}/>
    </SideBarStyled>
  )
}
  const SideBarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    z-index: 1;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width:1200px){
      transform: translateX(-100%);
      z-index: 20;
    }
  `;
export default SideBar
