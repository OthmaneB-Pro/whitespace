import { FaArrowRight } from "react-icons/fa6";
import Button from "../../../reusable-ui/Button";
import styled from "styled-components";
import Paragraph from "./Paragraph";

export default function TextHome() {
  return (
    <TextHomeStyled>
      <Paragraph />
      <Button label="Try Whitepace free" Icon={<FaArrowRight />} />
    </TextHomeStyled>
  );
}

const TextHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
