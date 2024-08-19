import styled from "styled-components";
import Paragraph from "../../../reusable-ui/Paragraph";
import Button from "../../../reusable-ui/Button";
import Image from "../../../reusable-ui/Image";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectManagement() {
  return (
    <ProjectManagementStyled>
      <div className="text">
        <Paragraph span="Project Management" label="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."  />
        <Button label="Get Started" Icon={<FaArrowRight />} />
      </div>
      <Image src="/img/bureau.png" alt="bureau" />
    </ProjectManagementStyled>
  );
}

const ProjectManagementStyled = styled.div`
  height: 160vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 140px 52px 100px 52px;
  color: black;
  .text{
    display: flex;
    height: 70vh;
    flex-direction: column;
    justify-content: center;
  }
`;
