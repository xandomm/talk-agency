import styled from "styled-components";
import GreyButton from "./Button";

const Header = () => {
  return (
    <Container>
      <Logo>LOGO GOES HERE</Logo>
      <ButtonWrapper>
        <Button>LOREM</Button> <Button>DOLOR</Button>
        <Button>AMET</Button> <Button>ELIT</Button>
        <GreyButton variant="grey">BOOK A TABLE</GreyButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.header`
  display: flex;

  flex-direction: row;
  align-items: center;
  background-color: transparent;
  align-items: center;
  height: 10vh;
`;

const Logo = styled.div`
  display: flex;
  font-size: 40px;
  weight: 700;
  color: white;
  margin-right: 150px;
`;

const ButtonWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.div`
  color: white;
  margin: 35px;
  background-color: transparent;
  border: none;
`;
export default Header;
