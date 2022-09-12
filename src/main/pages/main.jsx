import Header from "../components/Header";
import styled from "styled-components";
import Button from "../components/Button";
const Main = () => {
  return (
    <Container>
      <ImplementedHeader />
      <MainWrapper>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </MainText>
        <ButtonWrapper>
          <Button>VIEW MENU</Button>
          <Button variant="grey">BOOK A TABLE</Button>
        </ButtonWrapper>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
`;

const ImplementedHeader = styled(Header)`
  display: flex;
`;

const MainWrapper = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const MainText = styled.div`
  font-size: 60px;
  font-weight: 700;
  width: 50vw;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;
export default Main;
