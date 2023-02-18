import React from "react";
import styled from "styled-components";
// import Portfolios from '../data/Portfolios'
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
// import Portfolios from "../data/Portfolios";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <SiNetlify />
                    </a>
                  </li>
                </ul>
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    width: 100%;
    height: auto;
    
    .portfolio-content {
      /* width: 100%; */
      height: 50vh;
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        /* height: 30vh; */
        object-fit: cover;
      }
      ul {
        /* display: none; */
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          padding: 1rem;
          border-radius: 50%;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            transition: all 0.4s ease-in-out;
          }
        }
      }
      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              transition: all 0.4s ease-in-out;
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 32%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.5;
          transform-origin: left;
        }
      }
    }
  }
`;
export default Menu;
