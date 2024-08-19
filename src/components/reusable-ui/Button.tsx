import styled from "styled-components";

type ButtonType = {
  label: string;
  Icon?: JSX.Element;
  className? : string;
};

export default function Button({ label, Icon, className }: ButtonType) {
  return (
    <ButtonStyled className={className}>
      {label}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 227px;
  height: 60px;
  background-color: #4f9cf9;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 16px;
  box-shadow: 2px 2px 10px black;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.425);
  svg {
    width: 10px;
    height: 10px;
  }
`;
