import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import { FaArrowRight } from "react-icons/fa6";
import Paragraph from "../../../reusable-ui/Paragraph";
import Button from "../../../reusable-ui/Button";

export default function AsExtension() {
  return (
    <AsExtensionStyled>
      <div className="container">
        <div className="text">
          <Paragraph
            span="Use as Extension"
            label={
              "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            }
            className="size"
          />
          <Button label="Let’s Go" Icon={<FaArrowRight />} />
        </div>
        <Image src="/img/bureau.png" alt="bureau" />
      </div>
    </AsExtensionStyled>
  );
}

const AsExtensionStyled = styled.div`
  height: 100vh;
  background: #043873;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transform: translateY(140px);
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 400px;
      transform: translateX(52px);

      .size {
        width: 552px;
      }
    }
  }
`;
