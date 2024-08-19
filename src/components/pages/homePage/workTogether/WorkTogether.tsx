import styled from "styled-components";
import Paragraph from "../../../reusable-ui/Paragraph";
import Button from "../../../reusable-ui/Button";
import Image from "../../../reusable-ui/Image";
import { FaArrowRight } from "react-icons/fa6";

export default function WorkTogether() {
  return (
    <WorkTogetherStyled>
      <Image src="/img/rond.PNG" alt="rondLogo" className="image"/>
      <div className="text">
        <Paragraph
          span="Work together"
          label="With whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others."
          className="taille"
        />
        <Button label="Try it now" Icon={<FaArrowRight />} />
      </div>
    </WorkTogetherStyled>
  );
}

const WorkTogetherStyled = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 140px 52px 100px 52px;
  color: black;
  .text {
    display: flex;
    height: 70vh;
    flex-direction: column;
    justify-content: center;
    width: 593px;
    .taille{
        width: 570px;
    }
  }
  .image{
    height: 542px;
    margin-right: 160px;
  }
`;
