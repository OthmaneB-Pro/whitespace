import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import FooterCallToAction from "./FooterCallToAction";
import FooterList from "../../../reusable-ui/List";
import TextFooter from "./TextFooter";

export default function FooterHome() {
  return (
    <FooterHomeStyle>
      <div className="container">
        <div>
          <Logo />
          <TextFooter />
        </div>
        <FooterList
          title="Product"
          items={["Overview", "Pricing", "Customer stories"]}
        />
        <FooterList
          title="Resources"
          items={["Blog", "Guides & tutorials", "Help center"]}
        />
        <FooterList
          title="Company"
          items={["About us", "Careers", "Media kit"]}
        />
        <FooterCallToAction />
      </div>
    </FooterHomeStyle>
  );
}

const FooterHomeStyle = styled.div`
  height: 60vh;
  background-color: #043873;

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 100px;
    padding: 0px 52px;
    transform: translate(0px, 140px);
  }
  p {
    width: 250px;
  }
`;
