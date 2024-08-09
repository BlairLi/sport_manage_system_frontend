import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 5rem auto;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #95071A;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const QuestionGroup = styled.div`
  margin-bottom: 40px;
`;

const QuestionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  color: #0047ab;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Option = styled.label`
  font-size: 1rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;

  & > input {
    margin-right: 8px;
  }
`;

const NextButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #95071A;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }

  & > svg {
    margin-left: 10px;
  }
`;

const SurveyPage = () => {
  return (
    <Container>
      <Title>CHOOSE THE RIGHT PROGRAM</Title>
      <SubTitle>
        Thank you for taking the time to participate in our survey. Your responses will help us match your child with the best training programs we offer. Please answer the following questions:
      </SubTitle>

      <QuestionGroup>
        <QuestionTitle>Parental Support:</QuestionTitle>
        <QuestionText>I am committed to supporting my child's participation in basketball.</QuestionText>
        <Options>
          <Option><input type="radio" name="support" value="1" />① Strongly Disagree</Option>
          <Option><input type="radio" name="support" value="2" />② Disagree</Option>
          <Option><input type="radio" name="support" value="3" />③ Neutral</Option>
          <Option><input type="radio" name="support" value="4" />④ Agree</Option>
          <Option><input type="radio" name="support" value="5" />⑤ Strongly Agree</Option>
        </Options>
      </QuestionGroup>

      <QuestionGroup>
        <QuestionTitle>Fundamental Skills:</QuestionTitle>
        <QuestionText>My child has strong dribbling skills.</QuestionText>
        <Options>
          <Option><input type="radio" name="skills" value="1" />① Strongly Disagree</Option>
          <Option><input type="radio" name="skills" value="2" />② Disagree</Option>
          <Option><input type="radio" name="skills" value="3" />③ Neutral</Option>
          <Option><input type="radio" name="skills" value="4" />④ Agree</Option>
          <Option><input type="radio" name="skills" value="5" />⑤ Strongly Agree</Option>
        </Options>
      </QuestionGroup>

      <QuestionGroup>
        <QuestionTitle>Teamwork:</QuestionTitle>
        <QuestionText>My child is comfortable working and playing with other children.</QuestionText>
        <Options>
          <Option><input type="radio" name="teamwork" value="1" />① Strongly Disagree</Option>
          <Option><input type="radio" name="teamwork" value="2" />② Disagree</Option>
          <Option><input type="radio" name="teamwork" value="3" />③ Neutral</Option>
          <Option><input type="radio" name="teamwork" value="4" />④ Agree</Option>
          <Option><input type="radio" name="teamwork" value="5" />⑤ Strongly Agree</Option>
        </Options>
      </QuestionGroup>

      <NextButton to="/HelpOnProgram2">
        Next <AiOutlineArrowRight />
      </NextButton>
    </Container>
  );
};

export default SurveyPage;