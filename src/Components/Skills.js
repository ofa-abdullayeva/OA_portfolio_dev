import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";
import HTML from "../img/skills_logo/html.png";
import CSS from "../img/skills_logo/css.png";
import JavaScript from "../img/skills_logo/js.jpg";
import react from "../img/skills_logo/react.png";
import SASS from "../img/skills_logo/sass.png";
import Figma from "../img/skills_logo/figma.svg";
import Jquery from "../img/skills_logo/jquery.png";
import JSON from "../img/skills_logo/json.png";
import BOOTSTRAP from "../img/skills_logo/bootstrap.png";
import Matcss from "../img/skills_logo/matcss.png";
import STYLEDCOMP from "../img/skills_logo/styledc.png";
function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar img={HTML} text={"HTML"} />
          <ProgressBar img={CSS} text={"CSS"} />
          <ProgressBar img={SASS} text={"SASS"} />
          <ProgressBar img={Matcss} text={"Materialize"} />
          <ProgressBar img={STYLEDCOMP} text={"Styled Components"} />

          <ProgressBar img={BOOTSTRAP} text={"BOOTSTRAP"} />
          <ProgressBar img={JavaScript} text={"JAVASCRIPT"} />
          <ProgressBar img={Jquery} text={"JQUERY"} />
          <ProgressBar img={react} text={"REACT"} />

          <ProgressBar img={Figma} text={"FIGMA"} />
          <ProgressBar img={JSON} text={"JSON"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;


    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Skills;
