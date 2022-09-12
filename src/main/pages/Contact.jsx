import styled from "styled-components";

import Button from "../components/Button";

const Contact = () => {
  return (
    <Container>
      <Left>
        <Title>Lorem Ipsum</Title>
        <Subtitle>LOREM IPSUM DOLOR SIT AMET ELIT</Subtitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
          faucibus quis nisi, pulvinar dui curabitur quis facilisis rhoncus.
        </p>
      </Left>
      <Right>
        <form>
          <InputWrapper>
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Your email" />
            <Input type="text" placeholder="Phone number" />
            <Input type="text" placeholder="Booking date" />
            <Input type="text" placeholder="Time" />
            <Input type="text" placeholder="Party size" />
          </InputWrapper>

          <NotesInput type="text" placeholder="Additional notes" />

          <SendButton variant="grey">ENQUIRE NOW</SendButton>
        </form>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  height: 100vh;
`;

const Left = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 40vw;
  padding-left: 10vw;
`;

const Right = styled.div`
  padding-left: 10vw;
  display: flex;
  width: 40vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  align-items: start;
  padding-right: 10vw;
`;

const Title = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
`;

const Subtitle = styled.h2`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 10px;
  align-items: start;
  justify-items: start;
  margin-bottom: 30px;
`;

const Input = styled.input`
  background-color: black;

  border: 1px solid white;
  height: 50px;
  width: 20vw;
  ::placeholder {
    color: white;
    padding: 10px;
  }
`;

const NotesInput = styled.textarea`
  background-color: black;
  border: 1px solid white;
  width: 42vw;
  height: 20vh;
  ::placeholder {
    color: white;
    padding: 10px;
  }
`;

const SendButton = styled(Button)`
  margin-left: 0px;
`;
export default Contact;
