import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import { FaArrowRight } from "react-icons/fa6";
import Paragraph from "../../../reusable-ui/Paragraph";
import Button from "../../../reusable-ui/Button";

export default function Customise() {
  return (
    <CustomiseStyled>
      <div className="container">
      <Image src="/img/work.avif" alt="work" />
        <div className="text">
          <Paragraph
            span="Customise it to your needs"
            label={
              "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
            }
            className="size"
          />
          <Button label="Let’s Go" Icon={<FaArrowRight />} />
        </div>
      </div>
    </CustomiseStyled>
  );
}

const CustomiseStyled = styled.div`
  height: 100vh;
  margin-left: 52px;
  color: black;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transform: translateY(140px);
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 600px;
      transform: translateX(60px);
      .size {
        width: 600px;
      }
    }
  }
`;
