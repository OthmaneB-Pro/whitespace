import styled from "styled-components";

type ImageType = {
  src: string;
  alt: string;
  className? : string;
};

export default function Image({ src, alt, className }: ImageType) {
  return (
    <ImageStyled >
      <img src={src} alt={alt} className={className}/>
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  img {
    width: 685px;
    height: 456px;
  }
`;
