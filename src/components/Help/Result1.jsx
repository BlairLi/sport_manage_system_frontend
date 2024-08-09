import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signUpButtonImage from './signmeup.png';  
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
  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem; // Consistent size on desktop
  color: #95071a;
  margin-bottom: 2vw;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 4vw;
    margin-bottom: 10vw;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;  
  margin-bottom: 15px;
  font-family: 'League Spartan', sans-serif;
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  width: 55%;              
  margin: 0 auto;          
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3.5vw;
    width: 80%;              
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  @media (max-width: 768px) {
    margin-top: 10vw;
  }
`;

const StyledImage = styled.img`
  width: 70%;
  height: auto;
  max-width: 400px;
  @media (max-width: 768px) {
    width: 80%; 
    padding: 0;
  }
`;

function ProgramFiltering() {
  return (
    <Container>
      <Title>THANKS FOR YOUR PATIENCE</Title>
      <Subtitle>We would recommend that you enroll in...</Subtitle>
      <DescriptionTitle>SMALL GROUP TRAINING</DescriptionTitle>
      <Description>Your score indicates that <strong>Small Group Training</strong> is ideal for your child. It is designed for children who enjoy learning and playing in a team environment as it focuses on fundamental skills and team strategies.</Description>
      <ImageContainer>
        <Link to="/OurProgram">
          <StyledImage src={signUpButtonImage} alt="Sign Me Up" />
        </Link>
      </ImageContainer>
    </Container>
  );
}

export default ProgramFiltering;
