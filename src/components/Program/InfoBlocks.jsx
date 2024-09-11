import React from 'react';
import styled from 'styled-components';

const InfoBlocksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;  // Maintain this for regular screens
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);  // Two columns
    gap: 10px;  // Reduced gap
    padding: 10px;  // Reduced padding
  }
  @media (max-width: 320px) {
    gap: 5px;  // Further reduced gap for very narrow screens
    padding: 5px;  // Minimal padding to maximize space
    width: 90%;
  }
`;

const InfoBlock = styled.div`
  background-color: white;
  border: 2px solid #95071A;
  border-radius: 10px;
  padding: 20px;
  width: 20%;
  height: auto;  // Adjust height to be dynamic
  min-width: 200px;
  text-align: center;
  margin: 10px;  // Adds margin to create space around blocks

  @media (max-width: 768px) {
    width: 40%;
    padding: 15px;  // Slightly reduced padding
  }

  @media (max-width: 480px) {
    width: 100%;  // Each block takes full width of its column
    padding: 10px;  // Reduce padding for more space
    min-width: 0;  // Remove minimum width restriction
    margin: 5px;  // Reduced margin
  }

  @media (max-width: 320px) {
    padding: 8px;  // Even smaller padding
    margin: 3px;  // Reduced margin to fit better
  }
`;

const InfoTitle = styled.div`
  font-size: 1.3rem;
  color: #95071A;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1rem;  // Smaller font size
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;  // Even smaller font size for very small screens
  }
`;

const InfoText = styled.div`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.8rem;   
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;   
  }
`;

const InfoBlocks = () => (
  <InfoBlocksContainer>
    <InfoBlock>
      <InfoTitle>5+ YEARS</InfoTitle>
      <InfoText>of Coaching Experience</InfoText>
    </InfoBlock>
    <InfoBlock>
      <InfoTitle>99%</InfoTitle>
      <InfoText>Athlete Skill Improvement Rate</InfoText>
    </InfoBlock>
    <InfoBlock>
      <InfoTitle>250+</InfoTitle>
      <InfoText>Successful Training Sessions</InfoText>
    </InfoBlock>
    <InfoBlock>
      <InfoTitle>100%</InfoTitle>
      <InfoText>Supportive Coaches</InfoText>
    </InfoBlock>
  </InfoBlocksContainer>
);

export default InfoBlocks;
