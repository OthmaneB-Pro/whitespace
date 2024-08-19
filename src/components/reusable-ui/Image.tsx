import styled from "styled-components"

type ImageType = {
    src : string;
    alt: string;
}


export default function Image({src, alt} : ImageType) {
  return (
    <ImageStyled>
        <img src={src} alt={alt} />
    </ImageStyled>
  )
}

const ImageStyled = styled.div`
img{
    width: 685px;
    height: 456px;
  }`