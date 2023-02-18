import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";

import { RiCodepenFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function HomePage() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay:1700,
      strings: ["Ofeliya Abdullayeva", "Developper"],
    });
  }, []);
  return (
    <HomePageStyled>
      <div className="Typography">
        <h1>
          Hi, I'm <span ref={textRef}></span>
        </h1>
        <p className="description">
          A developer with a strong interest in projects that require both
          conceptual and analytical thinking. Fully committed to designing and
          developing innovative web applications that users will love. Always
          eager to learn more from anyone regardless of the industry they're
          working in.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/ofeliya-abdullayeva-4ba2341b2/"
            className="icon i-linkedin"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/ofa-abdullayeva"
            className="icon i-github"
          >
            <BsGithub />
          </a>
          <a href="https://codepen.io/your-work" className="icon i-codepen">
            <RiCodepenFill />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .Typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HomePage;
