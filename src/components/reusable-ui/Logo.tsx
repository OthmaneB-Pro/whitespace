import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/img/logo.PNG" alt="logo" /> whitepace
    </LogoStyled>
  );
}

const LogoStyled = styled.h1`
  display: flex;
  align-items: center;
  img {
    width: 37px;
    height: 29px;
    margin-right: 10px;
  }
`;
