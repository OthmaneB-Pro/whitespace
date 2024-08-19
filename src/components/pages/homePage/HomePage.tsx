import styled from "styled-components"
import Navbar from "./navbar/Navbar"

export default function HomePage() {
  return (
    <HomePageStyled>
        <Navbar/>
    </HomePageStyled>
  )
}


const HomePageStyled = styled.div`
    background: #043873;
    color: white;
    height: 100vh;
`