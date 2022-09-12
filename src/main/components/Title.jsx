import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.b`
  display: flex;
  text-align: start;
  color: black;
  font-size: 58px;
  weight: 700;
  font-family: "Helvetica Neue";
`;
export default Title;
