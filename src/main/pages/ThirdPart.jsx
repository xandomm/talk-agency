import styled from "styled-components";
import Title from "../components/Title";
import placeImage from "../assets/food.svg";
import Button from "../components/Button";
const ThirdPart = () => {
  return (
    <Container>
      <LeftSide>
        <RotatedLabel>Lorem ipsum</RotatedLabel>
        <div>
          <Image src={placeImage} />
        </div>
      </LeftSide>
      <RightSide>
        <Title>LOREM</Title>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum felis,
          senectus pulvinar in nibh suspendisse mattis aliquam. Cras consequat
          cras enim lacus. Amet sed sed placerat venenatis. Enim augue vel sed
          amet sit magna magna morbi. Scelerisque ut ut amet ullamcorper
          faucibus gravida duis. Mauris purus a ultrices cras a cursus
          consequat.
          <br />
          <br />
          Eu porttitor ut dictum arcu etiam. Proin sollicitudin pretium
          pellentesque fringilla faucibus a risus id nulla. Et condimentum amet,
          neque donec pharetra auctor vel commodo.
        </p>
        <ButtonContainer>
          <Button variant="black">ALL DAY MENU</Button>
          <Button variant="black">DINNER MENU</Button>
          <Button variant="black">BAR MENU</Button>
          <Button variant="black">KIDS MENU</Button>
        </ButtonContainer>
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
  width: 50vw;
  border: none;
  background: linear-gradient(90deg, #c4c4c4 60%, #ffff 40%);
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const RightSide = styled.div`
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

const Image = styled.img`
  width: 30vw;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-gap: 10px;
  align-items: start;
  justify-items: start;
`;

const RotatedLabel = styled.h1`
  transform: rotate(-90deg);
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  margin-right: -7vw;
`;
export default ThirdPart;
