import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/img/logo.PNG" alt="logo" /> whitespace
    </LogoStyled>
  )
}


const LogoStyled = styled.h1`
      display: flex;
      align-items: center;
`