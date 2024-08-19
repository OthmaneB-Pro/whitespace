import styled from "styled-components"
import Navbar from "./navbar/Navbar"
import Home from "./home/Home"

export default function HomePage() {
  return (
    <HomePageStyled>
        <Navbar/>
        <Home/>
    </HomePageStyled>
  )
}


const HomePageStyled = styled.div`
    background: #043873;
    color: white;
    height: 100vh;
`