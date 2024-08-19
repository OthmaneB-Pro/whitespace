import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Button from "../../../reusable-ui/Button";
import { FaArrowRight } from "react-icons/fa6";

export default function FooterHome() {
  return (
    <FooterHomeStyle>
      <div className="onverra">
        <div>
          <Logo />
          <p>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div>
          <ul>
            <li>
              <h3>Product</h3>
            </li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Resources</h3>
            </li>
            <li>Blog</li>
            <li>Guides & turials</li>
            <li>Help center</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>
        <div>
          <h1>Try it Today</h1>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <Button label="Start today" Icon={<FaArrowRight />} />
        </div>
      </div>
    </FooterHomeStyle>
  );
}

const FooterHomeStyle = styled.div`
  height: 60vh;
  background-color: #043873;

  .onverra {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 100px;
    padding: 0px 52px;
    transform: translate(0px, 140px);
  }
  p {
    width: 250px;
  }
  li {
    list-style-type: none;
    margin-bottom: 15px;
  }
`;
