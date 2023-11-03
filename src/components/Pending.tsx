import styled from "styled-components";

function Pending() {
  return (
    <Container>
      <Title>Oops!</Title>
      <Description>Please test it with an iOS Safari</Description>
    </Container>
  );
}

export default Pending;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: #25262b;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.8px;
`;

const Description = styled.p`
  color: #696a6c;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: -0.32px;
`;
