import { FaArrowRight } from "react-icons/fa6";
import Button from "../../../reusable-ui/Button";
import styled from "styled-components";
import Image from "../../../reusable-ui/Image";

export default function Home() {
  return (
    <ContainerHomeStyled>
      <div className="text">
        <h1>Get More Done with whitepace</h1>
        <p>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <Button label="Try Whitepace free" Icon={<FaArrowRight />} />
      </div>
      <Image src="/img/bureau.png" alt="bureau"/>
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
  p{
    width: 651px;
    font-size: 18px;
    margin-bottom: 60px;
  }
  h1{
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 64px;
  }
`;
