import styled from "styled-components";
import placeImage from "../assets/dinner.svg";
import Button from "../components/Button";

const Apresentation = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={placeImage} />
        </Left>
        <Right>
          <LeftLabel>LOREM</LeftLabel>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est
            enim eget diam mi. Viverra enim metus sed scelerisque commodo
            consequat in blandit. Dictum lorem tempus amet mauris. Molestie
            rhoncus vitae imperdiet ornare est aliquet semper. Mattis nec urna,
            sit sed sagittis nec donec. Lorem rutrum quis aliquam tristique nibh
            bibendum vel eget. Condimentum vulputate lacus praesent et egestas
            fames diam praesent aliquet.
            <br />
            Sit sit mattis enim adipiscing. Varius odio facilisis orci at vel.
            Donec eget nisi velit rutrum sed suscipit. Eget varius nisl
            imperdiet mollis velit sed.
          </p>
          <BorderButton variant="grey">BOOK FUNCTION</BorderButton>
        </Right>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 80vh;
  color: white !important;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  justify-content: start;
`;
const LeftLabel = styled.div`
  display: flex;
  text-align: start;
  color: white;
  font-size: 58px;
  weight: 700;
  font-family: "Helvetica Neue";
`;

const Right = styled.div`
  padding-left: 10vw;
  display: flex;
  width: 50vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  align-items: start;
  padding-right: 10vw;
`;
const Image = styled.img`
  width: 30vw;
  height: 80vh;
  margin-left: -0.5vw;
`;

const BorderButton = styled(Button)`
  border: 1px solid white;
`;
export default Apresentation;
