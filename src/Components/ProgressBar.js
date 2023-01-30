import React from "react";
import styled from "styled-components";

function ProgressBar({ img, text }) {
  return (
    <ProgressBarrStyled>
      <div className="progress-bar">
        <div className="progress">
          <img src={img} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </ProgressBarrStyled>
  );
}

const ProgressBarrStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    background: rgba(255, 255, 255, 0.19);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    /* padding: .3rem .3rem; */
    /* background-color: #6c757d; */

    .progress {
      width: 50%;
      height: 90%;
      img {
        /* width: 70%; */
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      padding-right: 1.1rem;
    }

    /* .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        border: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    } */
  }
`;
export default ProgressBar;
