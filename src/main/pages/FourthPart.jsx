import styled from "styled-components";
import Title from "../components/Title";
import placeImage from "../assets/drink.svg";
import Button from "../components/Button";
const FourthPart = () => {
  return (
    <Container>
      <LeftSide>
        <Title>LOREM</Title>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus leo,
          leo tincidunt at est, tristique. Turpis nunc laoreet suspendisse id
          odio velit in duis. Aliquam integer viverra facilisi leo, blandit.
          Purus leo, leo tincidunt at est, tristique. Turpis nunc laoreet
          suspendisse id odio velit in duis.
        </p>

        <Button variant="black">DRINKS MENU</Button>
      </LeftSide>
      <RightSide>
        <div>
          <Image src={placeImage} />
        </div>
        <Label>Lorem ipsum dolor</Label>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: white;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  color: black;
  width: 30vw;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 3vh;
`;

const RightSide = styled.div`
  display: flex;
  width: 50vw;
  border: none;
  background: linear-gradient(-90deg, #c4c4c4 60%, #ffff 40%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const Image = styled.img`
  width: 30vw;
`;

const Label = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  margin-top: 10px;
  margin-left: -5vw;
`;
export default FourthPart;
