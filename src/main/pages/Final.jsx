import styled from "styled-components";

const Final = () => {
  return (
    <Container>
      <Content>
        <div>
          <Title> LOGO GOES HERE</Title>
        </div>
        <Wrapper>
          <Label>LOREM IPSUM</Label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <br />
            Mi gravida ante purus mauris.
          </p>
        </Wrapper>
        <Wrapper>
          <Label>LOREM IPSUM</Label>
          <p>
            Lorem ipsum dolor
            <br />
            <br />
            Lorem ipsum dolor
          </p>
        </Wrapper>
        <Wrapper>
          <Label>LOREM IPSUM</Label>
          <p>
            Lorem <br />
            <br />
            ipsum
            <br />
            <br /> dolor
            <br />
            <br /> Lorem
          </p>
        </Wrapper>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;

  grid-gap: 20px;
  align-items: start;
  justify-items: start;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
`;

const Title = styled.h1``;
export default Final;
