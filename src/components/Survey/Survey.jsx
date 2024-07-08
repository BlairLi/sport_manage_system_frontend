// Import necessary hooks and styled-components
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo2.png';
import arrow from './arrow.png'

const Survey = () => {
  const [addMoreChildren, setAddMoreChildren] = useState(false);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [sport, setSport] = useState('');
  const [day, setDay] = useState('');
  const [location, setLocation] = useState('');


  const navigate = useNavigate();
  const locationData = useLocation();
  const queryParams = new URLSearchParams(locationData.search);


  useEffect(() => {
    const initialAge = queryParams.get('initialAge');
    const initialSport = queryParams.get('class');

    // Update state only if it has not been initialized yet
    if (initialAge && age === '') {
      setAge(initialAge);
    }
    if (initialSport && sport === '') {
      setSport(initialSport);
    }
}, [queryParams]);

  const handleRadioButtonChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleNext = () => {
    if (!gender || !age || !sport || !day || !location) {
      alert("Please fill in all required fields.");
      return;
    }

    const surveyData = {
      addMoreChildren,
      gender,
      age,
      sport,
      day,
      location
    };

    const surveyQuery = new URLSearchParams(surveyData).toString();
    if (addMoreChildren) {
      navigate(`/Registration2?${surveyQuery}`);
    } else {
      navigate(`/Registration1?${surveyQuery}`);
    }
  };


  return (
    <BackgroundContainer>
    <Container>
      <Title>PICK THE RIGHT PROGRAM</Title>
      <p>Please complete each indicated question<tag> * </tag></p>
      <FormSection>
        <FormRow>
          <P>Player Information</P>
          <InputLabel>Gender<tag> * </tag></InputLabel>
          <RadioGroup>
            <RadioButton>
              <input type="radio" name="gender" value="Girls" checked={gender === "Girls"} onChange={handleRadioButtonChange(setGender)} />
              Girls
            </RadioButton>
            <RadioButton>
              <input type="radio" name="gender" value="COED" checked={gender === "COED"} onChange={handleRadioButtonChange(setGender)} />
              COED/All Genders
            </RadioButton>
          </RadioGroup>
        </FormRow>
        <FormRow>
          <InputLabel>Age<tag> * </tag></InputLabel>
          <RadioGroup>
            {['5-6', '7-8', '9-10', '11-13'].map(ageOption => (
              <RadioButton key={ageOption}>
                <input type="radio" name="age" value={ageOption} checked={age === ageOption} onChange={handleRadioButtonChange(setAge)} />
                {ageOption}
              </RadioButton>
            ))}
          </RadioGroup>
        </FormRow>
          <P>Program Information</P>
          <FormRow>
          <InputLabel>Program of Choice<tag> * </tag></InputLabel>
          <RadioGroup>
            {['Basketball Group Academy Training', 'All-Girls Training Academy' ,'Leadership Retreats'].map(sportOption => (
              <RadioButton key={sportOption}>
                <input type="radio" name="sport" value={sportOption} checked={sport === sportOption} onChange={handleRadioButtonChange(setSport)} />
                {sportOption}
              </RadioButton>
            ))}
          </RadioGroup>
        </FormRow>
        <FormRow>
          <InputLabel>Preferred day(s) of program<tag> * </tag></InputLabel>
          <RadioGroup>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(dayOption => (
              <RadioButton key={dayOption}>
                <input type="radio" name="day" value={dayOption} checked={day === dayOption} onChange={handleRadioButtonChange(setDay)} />
                {dayOption}
              </RadioButton>
            ))}
          </RadioGroup>
        </FormRow>
        <FormRow>
          <InputLabel>Desired Location<tag> * </tag></InputLabel>
          <RadioGroup>
            {['Meadowvale', 'Port Credit', 'Dixie', 'Etobicoke'].map(locationOption => (
              <RadioButton key={locationOption}>
                <input type="radio" name="location" value={locationOption} checked={location === locationOption} onChange={handleRadioButtonChange(setLocation)} />
                {locationOption}
              </RadioButton>
            ))}
          </RadioGroup>
        </FormRow>
        <FormRow>
          <InputLabel>Do you want to add more child(ren)?<tag> * </tag>10% off</InputLabel>
          <RadioGroup>
            <RadioButton>
              <input type="radio" name="addMoreChildren" value="yes" checked={addMoreChildren} onChange={() => setAddMoreChildren(true)} />
              Yes
            </RadioButton>
            <RadioButton>
              <input type="radio" name="addMoreChildren" value="no" checked={!addMoreChildren} onChange={() => setAddMoreChildren(false)} />
              No
            </RadioButton>     
               <ButtonRow>

          <NextLink onClick={handleNext}>Next            
             <img src={arrow} alt="Next" />
          </NextLink>
          
        </ButtonRow>
          </RadioGroup>
        </FormRow>

      </FormSection>
    </Container></BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: auto; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${logo}) no-repeat center center;
    background-size: 45%; 
    opacity: 0.1;
    z-index: -1; 
  }
  @media(max-width: 1024px){
    
  }

  @media(max-width: 480px){
    &::before {
      top: 0px; 
      background-size: 100%; 
    }
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 75px 20px 0 20px ;
  background-color: transparent; 
  z-index: 1; 
  position: relative;
  tag{color:red}
  p{
      font-style: italic;
    }
  @media(max-width: 1024px){
  
  }

  @media(max-width: 480px){
    width: 100%;
    padding: 75px 10px 0 10px ;
    p{
      font-size: 4vw;
    }
  }
`;



const Title = styled.h2`
  margin-bottom: 20px;
  color: #95071A;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 53px;
  @media(max-width: 1024px){

  }

  @media(max-width: 480px){
    font-size: 8vw;
    margin-bottom: 1vw;
  }
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  @media(max-width: 480px){
    font-size: 3vw;
    margin-bottom: 3vw;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 5px; 
  font-weight: bold;
  tag{
    color: #ff0022;
  }
  
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const RadioButton = styled.label`
  margin-right: 20px; 
  margin-bottom: 5px; 
  display: flex;
  align-items: center; 
  cursor: pointer;
  text-decoration: underline; 
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;  
  margin-top: 20px;           
  width: 90%;                
`;



const NextLink = styled.span`
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 800;
  margin-bottom: 25px; 

  &:hover {
    color: #660613;
  }
  img {
    margin-left: 5px;
    width: 20px; 
    height: auto;
  }
  @media(max-width: 480px){
    padding: 0;
    margin-bottom: 0;
  }
`;


const P = styled.div` 
 margin-bottom: 5px; 
  font-weight: bold;
  font-size: 23px;
  color: #95071A;
  font-family: 'League Spartan', sans-serif;
 
    @media(max-width: 480px){
      font-size: 5vw;
      margin-bottom: 0; 
}
`
 

export default Survey;
