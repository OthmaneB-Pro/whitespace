import styled from "styled-components";

type FooterListType = {
  title: string;
  items: string[];
};

export default function FooterList({ title, items }: FooterListType) {
  return (
    <FooterSection>
      <ul>
        <li>
          <h3>{title}</h3>
        </li>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </FooterSection>
  );
}
const FooterSection = styled.div`
  li {
    list-style-type: none;
    margin-bottom: 15px;
  }
`;
