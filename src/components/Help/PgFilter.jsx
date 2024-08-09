import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from './Yes.png';
import p2 from './No.png';
import backgroundLogo from './backgroundlogo.png';

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
  position: relative;
  min-height: 85vh;
  padding: 20px 0 0 0;

  &::before {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundLogo});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.05;
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #95071a;
  font-weight: bold;
  font-family: 'League Spartan', sans-serif;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 10vw;
    font-size: 5vw;
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 30px;
  color: #d6b263;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 4vw;
    margin-bottom: 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2vw 15vw;
  }
`;

function ProgramFiltering() {
  return (
    <Container>
      <Title>DO YOU NEED HELP CHOOSING A PROGRAM?</Title>
      <Subtitle>Click on options below...</Subtitle>
      <ImageContainer>
        <Link to="/HelpOnProgram">
          <StyledImage src={p1} alt="Option 1" />
        </Link>
        <Link to="/OurProgram">
          <StyledImage src={p2} alt="Option 2" />
        </Link>
      </ImageContainer>
    </Container>
  );
}

export default ProgramFiltering;
