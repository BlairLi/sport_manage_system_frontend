/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import p1 from './p12.png';
import registernow from './registernow.png';

const BTraining = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the survey page with a predefined sport
    navigate('/survey?class=Basketball Group Academy Training');
  };

  return (
    <Container>
      <Title>BASKETBALL GROUP TRAINING ACADEMY</Title>
      <Content>
        <ColumnLeft>
          <Image src={p1} alt="Basketball Training" />
        </ColumnLeft>
        <ColumnRight>
          <Box>
            <LittleTitle>PERFECT STARTING POINT FOR YOUR CHILD</LittleTitle>
            <ContentText>
              Welcome to our dynamic Beginner’s Basketball Program, designed to support the beginning of your child's basketball journey! We focus on building fundamental skills, fostering fun, and connecting young players with new friends. This program is perfect for introducing physical literacy and skill development.
              <br /><br />
              <ul>
                <li>Master essential skills: dribbling, shooting, finishing and defense.</li>
                <br />
                <li>Refine agility and coordination for improved on-court performance.</li>
                <br />
                <li>Achieve greater confidence and competitive edge.</li>
              </ul>
              <None><br /><br /></None>
              <strong>ABOUT OUR PROGRAM</strong>
              <br />
              This is an on-going program, that runs through all seasons. Participants can progress to our house leagues when they're ready to take their skills to the next level.
              <br /><br />
              <Red>Builds confidence on and off the court, and understands intricate game strategies.</Red>
            </ContentText>
          </Box>
          <Box>
            <RegisterButtonContainer>
              <RegisterImageButton onClick={handleRegisterClick} />
            </RegisterButtonContainer>
          </Box>
        </ColumnRight>
      </Content>
    </Container>
  );
};

export default BTraining;

const Container = styled.div`
  margin: 0 auto;
  padding: 10rem 2rem;

  @media (max-width: 768px) {
    padding: 10vw 0vw 0vw 0vw;
  }
`;

const Title = styled.h1`
  padding-left: 9.5vw;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 50px;
  font-family: 'League Spartan', sans-serif;
  color: #95071A;

  @media (max-width: 768px) {
    padding-top: 10vw;
    padding-left: 1vw;
    font-size: 10vw;
    margin-bottom: 3vw;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ColumnLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 60%;
  height: auto;
  border-radius: 10px;
`;

const Box = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 2vw;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const LittleTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: left;
    width: 100%;
    margin-bottom: 4vw;
  }
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  @media (max-width: 768px) {
    font-size: 3vw;
    text-align: left;
    width: 100%;
  }

  ul {
    padding-left: 1.5rem;
    list-style: disc;

    @media (max-width: 768px) {
      padding-left: 1.5rem;
    }
  }

  ul li {
    margin-bottom: 1rem;   
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;   
    }
  }
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

const RegisterImageButton = styled.button`
  background-image: url(${registernow});
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
  }
`;

const Red = styled.div`
  color: #95071A;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const None = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
