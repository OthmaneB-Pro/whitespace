import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import TextHome from "./TextHome";

export default function Home() {
  return (
    <ContainerHomeStyled>
      <TextHome />
      <Image src="/img/bureau.png" alt="bureau" />
    </ContainerHomeStyled>
  );
}

const ContainerHomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px 52px 100px 52px;
`;
