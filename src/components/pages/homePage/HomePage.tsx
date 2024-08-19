import styled from "styled-components"
import Navbar from "./navbar/Navbar"
import Home from "./home/Home"
import ProjectManagement from "./projectManagement/ProjectManagement"

export default function HomePage() {
  return (
    <HomePageStyled>
        <Navbar/>
        <Home/>
        <ProjectManagement/>
    </HomePageStyled>
  )
}


const HomePageStyled = styled.div`
    background: #043873;
    color: white;
    height: 100vh;
`