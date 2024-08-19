import styled from "styled-components"
import Navbar from "./navbar/Navbar"
import Home from "./home/Home"
import ProjectManagement from "./projectManagement/ProjectManagement"
import WorkTogether from "./workTogether/WorkTogether"
import AsExtension from "./asExtension/AsExtension"
import Customise from "./customise/Customise"

export default function HomePage() {
  return (
    <HomePageStyled>
        <Navbar/>
        <Home/>
        <ProjectManagement/>
        <WorkTogether/>
        <AsExtension/>
        <Customise/>
    </HomePageStyled>
  )
}


const HomePageStyled = styled.div`
    background: #043873;
    color: white;
    height: 100vh;
`