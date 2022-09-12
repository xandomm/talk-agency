import styled from "styled-components";
import Title from "../components/Title";
import placeImage from "../assets/restaurant.svg";
import Button from "../components/Button";
const SecondPart = () => {
  return (
    <Container>
      <LeftSide>
        <div>
          <Title>LOREM</Title>

          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            felis!
          </Subtitle>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            felis, senectus pulvinar in nibh suspendisse mattis aliquam. Cras
            consequat cras enim lacus. Amet sed sed placerat venenatis.
            <br />
            <br />
            Enim augue vel sed amet sit magna magna morbi. Scelerisque ut ut
            amet ullamcorper faucibus gravida duis. Mauris purus a ultrices cras
            a cursus consequat.
            <br />
            <br />
            Eu porttitor ut dictum arcu etiam. Proin sollicitudin pretium
            pellentesque fringilla faucibus a risus id nulla. Et condimentum
            amet, neque donec pharetra auctor vel commodo.
          </p>

          <Button variant="black">BOOK A TABLE</Button>
        </div>
      </LeftSide>
      <RightSide>
        <Image src={placeImage} />
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
  align-items: center;
  text-align: start;
  color: black;
  width: 30vw;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 3vh;
`;

const Subtitle = styled.div`
  padding: 40px;
  font-size: 28px;
  margin-left: -40px;
  border: 2px solid black;
  margin-top: 20px;
`;

const RightSide = styled.div`
  display: flex;
  width: 40vw;
  border: none;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
`;

const Image = styled.img`
  width: 30vw;
`;
export default SecondPart;
