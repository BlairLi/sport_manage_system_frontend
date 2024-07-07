import styled from 'styled-components';
import p1 from './p1.jpg';
import p2 from './p4.jpg';
import p3 from './p3.jpg';
import { Link } from 'react-router-dom'; // Import Link

const Containerr = styled.div`  padding-top: 50px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-top: 0;
  
`;

const TopSection = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 70px;
  color: #95071A;
  font-weight: 800;
`;

const BottomSection = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 50px;
`;

const FullSizeImage = styled.img`
  width: 100%;  // Each image takes about a third of the container width
  height: auto;  // Maintain aspect ratio

`;


const Title = styled.h1`
  font-size: 70px;
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
`;

const OurProgram = () => {
  return (
    <Containerr>
    <Container>
      <TopSection>
        <Title>OUR PROGRAMS</Title>
      </TopSection>
      <BottomSection>
  
        <ImageContainer>
          <Link to="/BTraining">
            <FullSizeImage src={p1} alt="Basketball" />
          </Link>
          <Link to="/AllGirlsTrainingAcademy">
            <FullSizeImage src={p2} alt="All-Girls Training Academy" />
          </Link>
          <Link to="/LeadershipCamps">
            <FullSizeImage src={p3} alt="Leadership Camps" />
          </Link>
        </ImageContainer>
      </BottomSection>
    </Container></Containerr>
  );
};

export default OurProgram;
