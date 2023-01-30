import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
// import ServicesSection from '../Components/ServicesSection'
// import ReviewSection from '../Components/ReviewSection'
function ResumePage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Resume"} span={"Resume"} />
        <ImageSection />
        <Skills/>
        <Resume />
        {/* <ServicesSection/> */}
        {/* <ReviewSection/> */}
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;
export default ResumePage;
