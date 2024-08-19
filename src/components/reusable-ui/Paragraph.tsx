import styled from "styled-components";

type ParagraphType = {
  label: string;
  span: string;
  className?: string;
};

export default function Paragraph({ label, span, className }: ParagraphType) {
  return (
    <ParagraphStyled className={className}>
      <h1>{span}</h1>
      <p>{label}</p>
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
