import { FaArrowRight } from "react-icons/fa6";
import Button from "../../../reusable-ui/Button";
import styled from "styled-components";

export default function FooterCallToAction() {
  return (
    <FooterSection>
      <h1>Try it Today</h1>
      <p>Get started for free. Add your whole team as your needs grow.</p>
      <Button label="Start today" Icon={<FaArrowRight />} />
    </FooterSection>
  );
}

const FooterSection = styled.div``;
