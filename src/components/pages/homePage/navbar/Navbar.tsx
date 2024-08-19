import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Button from "../../../reusable-ui/Button";

export default function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <Logo/>
        <ul>
          <li>
            <a href="/">
              Products <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="/">
              Solutions <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="/">
              Resources <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="/">
              Pricing <IoIosArrowDown />
            </a>
          </li>
        </ul>
        <div>
          <button className="button-login">Login</button>
          <Button label="Try Whitespace free" Icon={<FaArrowRight />}/>
        </div>
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  height: 92px;
  overflow: hidden;

  nav {
    margin-top: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    img {
      width: 37px;
      height: 29px;
      margin-right: 10px;
    }
    ul {
      display: flex;
      flex-direction: row;
      margin-left: 218px;
      margin-right: 75.5px;
    }
    li {
      list-style-type: none;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        margin-right: 32px;
        svg {
          margin-left: 10px;
          width: 9px;
        }
      }
    }
    .button-login {
      width: 126px;
      height: 60px;
      background-color: #ffe492;
      border-radius: 8px;
      color: #043873;
      border: none;
      margin-right: 24px;
      font-size: 16px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.425);
    }
    
  }
`;
