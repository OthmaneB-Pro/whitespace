import styled from "styled-components";

export default function Paragraph() {
  return (
    <ParagraphStyled>
      <h1>Get More Done with whitepace</h1>
      <p>
        Project management software that enables your teams to collaborate,
        plan, analyze and manage everyday tasks
      </p>
    </ParagraphStyled>
  );
}

const ParagraphStyled = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 64px;
  }
  p {
    width: 651px;
    font-size: 18px;
    margin-bottom: 60px;
  }
`;
