import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Button from "../../../reusable-ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import Paragraph from "../../../reusable-ui/Paragraph";

export default function FooterHome() {
  return (
    <FooterHomeStyle>
      <div>
        <Logo />
        <p>
          whitepace was created for the new ways we live and work. We make a
          better workspace around the world
        </p>
      </div>
      <div>
        <ul>
          <li>Product</li>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Customer stories</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Resources</li>
          <li>Blog</li>
          <li>Guides & turials</li>
          <li>Help center</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Media kit</li>
        </ul>
      </div>
      <div>
        
        <Paragraph
          span="Try it Today"
          label="Get started for free.
Add your whole team as your needs grow."
        />
        <Button label="Start today" Icon={<FaArrowRight />} />
      </div>
    </FooterHomeStyle>
  );
}

const FooterHomeStyle = styled.div`
height: 60vh;
background-color: #043873;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap : 100px ;
`;
