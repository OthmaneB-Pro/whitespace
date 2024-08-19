import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Button from "../../../reusable-ui/Button";
import ListNavbar from "./ListNavbar";

export default function Navbar() {
  return (
    <ContainerStyled>
      <NavbarStyled>
        <Logo />
        <ListNavbar />
        <div>
          <Button label="Login" className="button-login" />
          <Button label="Try Whitepace free" Icon={<FaArrowRight />} />
        </div>
      </NavbarStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  height: 92px;
  overflow: hidden;
`;
const NavbarStyled = styled.nav`
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  .button-login {
    width: 126px;
    background-color: #ffe492;
    color: #043873;
    margin-right: 24px;
  }
`;
