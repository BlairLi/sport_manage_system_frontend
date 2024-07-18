import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import welcome from './welcome.png';



const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  p{font-size:20px;font-weight:800;
    font-family: 'League Spartan', sans-serif;
  }
  @media (max-width: 1024px) {
  transform: scale(0.8);
    }
  @media (max-width: 640px) {
  transform: scale(0.8);
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const Button = styled.button`
  margin: 15px;
  padding: 10px 20px;
  background-color: #95071A;
  color: white;
  border: 3px solid black;  
  border-radius: 25px;
  width: 180px;
  height: 60px;
  font-size: 150%;
  font-weight: 800;
  font-family: 'League Spartan', sans-serif;
  cursor: pointer;
  flex: 1 1 45%;  

  &:hover {
    background-color: #700211;
  }
  @media (max-width: 768px) {
    font-size: 110%;
  }
`;

const Button2 = styled.button`
  margin: 15px;
  padding: 10px 20px 5px 20px;
  background-color: #95071A;
  color: white;
  border: 3px solid black;  
  border-radius: 25px;
  width: 360px;
  height: 60px;
  font-size: 150%;
  font-weight: 800;
  font-family: 'League Spartan', sans-serif;
  cursor: pointer;
  flex: 1 1 45%;  

  &:hover {
    background-color: #700211;
  }
  @media (max-width: 768px) {
    font-size: 110%;
    width: 90%;
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const Popup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOptionClick = (age) => {
    navigate(`/survey?initialAge=${age}`);
    onClose();
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <img src={welcome} alt="Welcome" style={{ maxWidth: '80%', height: 'auto' }} />
        <p>Get started by selecting your child’s age range below</p>
        <ButtonContainer>
          <Button onClick={() => handleOptionClick('5-6')}>5-6 YEARS OLD</Button>
          <Button onClick={() => handleOptionClick('7-8')}>7-8 YEARS OLD</Button>
          <Button onClick={() => handleOptionClick('9-10')}>9-10 YEARS OLD</Button>
          <Button onClick={() => handleOptionClick('11-13')}>11-13 YEARS OLD</Button>
        </ButtonContainer>
        <Button2 onClick={() => handleOptionClick('High School')}>HIGH SCHOOL KIDS</Button2>
      </PopupContent>
    </PopupContainer>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Popup;
