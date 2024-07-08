/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import p1 from './p42.jpg';  // Ensure this path is correct according to your project structure
import { useNavigate } from 'react-router-dom';
import registernow from './registernow.png';

const AllGirlsTrainingAcademy = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    // Navigate to the survey page with a predefined sport
    navigate('/survey?class=All-Girls Training Academy');
  };
  return (
    <Container>
      <Title>All-Girls Training Academy</Title>
      <None><Title2>All-Girls <br />Training Academy</Title2></None>
      <Content>
        <ColumnLeft>
          <Image src={p1} alt="All-Girls Training Academy" />
        </ColumnLeft>
        <ColumnRight>
          <Box>
            <LittleTitle>GREAT WAY TO APPLY SKILLS IN-GAME</LittleTitle>
          </Box>
          <Box>
            <ContentTextSmallMargin>
              Elevate your child's basketball experience with our seasonal house league programs. Designed for young players, this league offers a unique blend of skill development and gameplay, making it the perfect platform to hone their developing skills.
            </ContentTextSmallMargin>
          </Box>
          <Box>
            <ContentText>
              <Strong>What to Expect:</Strong>
              <ul>
                <li>Regular skill development sessions focusing on dribbling, shooting, passing, and defensive techniques</li>
                <li>Frequent house league gameplay to apply skills in real-game scenarios, emphasizing teamwork and strategic play</li>
                <li>Great coaching staff that provide personalized feedback, track progress and make adjustments</li>
                <li>A fun and engaging environment with opportunities for social interaction, competitive play, and recognition through awards</li>
              </ul>
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

export default AllGirlsTrainingAcademy;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10rem 2rem;

  @media (max-width: 768px) {
    padding: 10vw 1rem;
  }
`;

const None = styled.div`
  @media (min-width: 768px) {
    display: none;
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
    display: none;
  }
`;

const Title2 = styled.h1`
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
  margin-bottom: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0vw 2vw 0vw 2vw;
    margin-bottom: 1rem;
  }
`;

const LittleTitle = styled.div`
  font-size: 2rem;
  color: #333;
  margin: 0;
  font-weight: 800;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 4vw;
    width: 100%;
    text-align: left;
  }
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  margin-top: 1rem;
  text-align: left;

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
  margin-top: 1rem;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

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
