import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export default function ListNavbar() {
  return (
    <ListNavbarStyled>
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
    </ListNavbarStyled>
  );
}

const ListNavbarStyled = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 218px;
  margin-right: 75.5px;

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
`;
