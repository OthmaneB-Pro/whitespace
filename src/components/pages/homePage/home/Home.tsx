import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import { FaArrowRight } from "react-icons/fa6";
import Paragraph from "../../../reusable-ui/Paragraph";
import Button from "../../../reusable-ui/Button";

export default function Home() {
  return (
    <ContainerHomeStyled>
      <div className="text">
        <Paragraph
          span="Get More Done with whitepace"
          label={
            "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          }
        />
        <Button label="Try Whitepace free" Icon={<FaArrowRight />} />
      </div>
      <Image src="/img/company.avif" alt="bureau" />
    </ContainerHomeStyled>
  );
}

const ContainerHomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px 52px 100px 52px;
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
