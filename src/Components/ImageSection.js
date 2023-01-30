import React from "react";
import styled from "styled-components";
import Primarybutton from "./Primarybutton";

function ImageSection() {
  return (
    <ImageSectionStyled>

      <div className="right-content">
       
          <h4>I am <span>Ofeliya Abdullayeva </span></h4>
     
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>

        <div className="about-info">
          <div className="info-title">
                <p>Full Name</p>
                <p>Age Name</p>
                <p>Nationality</p>
                <p>Languages</p>
                <p>Location</p>
                <p>Service</p>
          </div>

          <div className="info">
                <p>: Ofeliya Abdullayeva</p>
                <p>: 28</p>
                <p>: Azerbaijan</p>
                <p>: English,Turkish</p>
                <p>: Azerbaijan, Baku</p>
                <p>: Freelance</p>
          </div>
        </div>
        <Primarybutton title={'Download Cv'}/>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    @media screen and (max-width:1000px) {
      flex-direction: column;

      .left-content{
        margin-bottom: 2rem;
      }
     }
    .left-content{
        width: 60%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    /* .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        } */
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    
`;
export default ImageSection;
