import styled from "styled-components";

const Button = ({ children, variant, ...props }) => {
  if (variant === "grey") {
    return <GreyButton {...props}>{children}</GreyButton>;
  }

  if (variant === "black") {
    return <BlackBorderButton {...props}>{children}</BlackBorderButton>;
  }
  return <WhiteButton {...props}>{children}</WhiteButton>;
};
const GreyButton = styled.button`
  background-color: #c4c4c4;
  color: WHITE;
  border: none;
  height: 40px;
  width: 180px;
  margin: 10px;
  weight: 700;
`;

const BlackBorderButton = styled.button`
  color: black;
  border: 2px solid black;
  height: 40px;
  width: 180px;
  weight: 700;
  background-color: white;
`;
const WhiteButton = styled.button`
  background-color: white;
  color: green;
  border: none;
  height: 40px;
  width: 180px;
  margin: 10px;
  weight: 700;
`;
export default Button;
