/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import p1 from './p32.png';  // Ensure this path is correct according to your project structure
import registernow from './registernow.png';

const LeadershipCamps = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the survey page with a predefined sport
    navigate('/survey?class=Leadership Retreats');
  };
  return (
    <Container>
      <Title>Leadership Camps</Title>
      <Content>
        <ColumnLeft>
          <Image src={p1} alt="Leadership Camps" />
        </ColumnLeft>
        <ColumnRight>
          <Box>
            <LittleTitle>BUILD SKILLS ON AND OFF THE COURT</LittleTitle>
          </Box>
          <Box>
            <ContentTextSmallMargin>
              Multi-sport camp is crucial at young ages. We want our families to be given the opportunity to explore other sports, and becoming a wholistic athlete. There is so many skills, each sport has to offer!
            </ContentTextSmallMargin>
          </Box>
          <Box>
            <ContentText>
              <Strong>ABOUT OUR PROGRAM</Strong>
              <ul>
                <li>Primary sports will include: Soccer, Basketball, and Volleyball</li>
                <li>Staff to camper ratio is 1:8 (Counsellor to Camper)</li>
                <li>Camp programming is designed for children ages 5 to 12. Your child must be 5 years old before the first day of camp</li>
              </ul>
              <Red>Develop strategic thinking, game awareness, and decision-making skills.</Red>
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

export default LeadershipCamps;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10rem 2rem;

  @media (max-width: 768px) {
    padding: 10vw 1rem;
  }
`;

const Title = styled.h1`
  color: #95071A;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  padding-left: 7.5vw;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 768px) {
    padding-top: 10vw;
    padding-left: 2vw;
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
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Box = styled.div`
  border-radius: 5px;
  margin-bottom: 0.5rem;  // Adjusted margin to make boxes closer

  @media (max-width: 768px) {
    padding: 0 2vw;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const LittleTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 0;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: left;
    width: 100%;
  }
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  margin-top: 0.5rem;  // Ensure equal spacing

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

const ContentTextSmallMargin = styled(ContentText)`
  margin-top: 0.5rem;  // Ensure equal spacing
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;  // Ensure equal spacing

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

const RegisterImageButton = styled.button`
  background-image: url(${registernow});
  background-color: transparent;
  background-size: cover; // Ensures the image covers the entire button area
  background-repeat: no-repeat;
  background-position: center;
  width: 250px; // Set the width according to your image dimensions
  height: 50px; // Set the height according to your image dimensions
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Optional: adds a hover effect to the button
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
  }
`;

const Red = styled.div`
  color: #95071A;
  font-size: 1.2rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Strong = styled.div`
  font-size: 1.4rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;
