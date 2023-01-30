import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "./SmallTitle";
// import Title from "./Title";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import ResumeItem from "./ResumeItem";

function Resume() {
  return (
    <ResumeStyled>
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={<BsBriefcaseFill />} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title={"Freelancer"}
            subTitle={"Front End Developper"}
            text={`I organized many projects such as eCommerce using many
            technologies. For Example Javascript, Jquery, React, Context, Redux,
            Redux Toolkit, Redux Thunk`}
          />
          <ResumeItem
            year={"2021 - 2022"}
            title={"Organization of civil service interviews"}
            subTitle={"State Examination Center"}
            text={`Setting up and making changes to the interface of the programs of the
            state examination center.Organization of civil service interviews, interview schedule
            preparation, talk with candidates and authorities, email
            send. Solve technical problems.
            `}
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={"State Examination Center - Intern"}
            subTitle={"State Examination Center"}
            text={`Setting up and making changes to the interface of the programs of the
            state examination center
            `}
          />
        </div>


        <div className="small-title u-small-title-margin">
          <SmallTitle icon={<FaGraduationCap />} title={" Educational Qualifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2012 - 2016"}
            title={"Information technologies and systems engineering"}
            subTitle={"Azerbaijan State Economic University"}
            text={
              `Lorem ipsum is placeholder text commonly used in the graphic, print`
            }
          />
            <ResumeItem
            year={"2021 - 2021"}
            title={"Front End Developper"}
            subTitle={"Texnoera Academy"}
            text={
              `Front End`
            }
          />
            <ResumeItem
            year={"2020 - 2021"}
            title={"Foundation"}
            subTitle={"Pragmatech"}
            text={
              `Foundation of Programming`
            }
          />
       
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

// year={"2012 - 2016"}
// title={"Information technologies and systems engineering"}
// subTitle={"Azerbaijan State Economic University"}
// text={
//   "Lorem ipsum is placeholder text commonly used in the graphic, print"
// }

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin{
        margin-top: 4rem;
    }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
