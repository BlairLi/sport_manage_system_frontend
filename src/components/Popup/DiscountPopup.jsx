import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PUT from './PopupTittle.png';  // Importing title image
import PUL from './PopupIcon.png';   // Importing icon image

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
  width: 450px;
  @media(max-width: 768px) {
    width: 90%;
  }
  @media(max-width: 480px) {
    width: 90%;
    padding: 15px;
  }
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px; // Space between the image and the title
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Gagalin', sans-serif;
  font-weight: bold;
  color: #C62323;
  @media(max-width: 480px) {
    font-size: 23px;
  }
`;

const Icon = styled.img`
  width: 50px;  
  height: auto;
  position: absolute;
  left: 20%; 
  top: 85%;    
  transform: translateY(-50%);
  @media(max-width: 480px) {
    width: 45px; 
    top: 87%;    
    left: 13%; 
  }
`;

// const Input = styled.input`
//   width: calc(100% - 60px);  
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 20px;
//   padding-right: 60px;  
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 20px;
  margin: 10px 20px;
  padding: 10px 0px;
  margin-bottom: 20px;

  @media(max-width: 768px) {  
    flex-direction: column;  
    width: 95%;   
    margin: 0 auto;   
    margin-bottom: 20px;
    padding: 0px 0px;
  }
`;

const Button = styled.button`
  font-family: 'League Spartan', sans-serif;
  background-color: #014AAD;
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 18px;
  border: 3px solid #000000;
  font-size: 22px;
  cursor: pointer;
  flex-grow: 1;
  &:not(:last-child) {
    margin-right: 10px;
    @media(max-width: 768px) {
      margin-right: 0;  
      margin-bottom: 10px;  
    }
  }
  &:hover {
    background-color: #033c8b;
  }
  @media(max-width: 480px) {
    font-size: 35px;
    padding: 30px 0px;
    margin: 10px 0px;
  }
`;

const CloseLink = styled.p`
  cursor: pointer;
  text-decoration: underline;
  color: #333;
  font-size: 14px;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
`;

const Price = styled.span`
  text-decoration: line-through;  
  color: inherit; 
`;

const DiscountPopup = ({ onClose }) => {
  // const [email, setEmail] = useState('');

  // const handleScarboroughClick = () => {
  //   window.location.href = 'https://forms.gle/vGC1KKTgKVD4WLAN7';
  // };

  const handleMississaugaClick = () => {
    window.location.href = 'https://form.jotform.com/242575648974272';
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupImage src={PUT} alt="Popup Title" />
        <Title>FALL SPECIAL  <Price>$100.00</Price> </Title>
        {/* <Input
          type="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <ButtonContainer>
          <Button onClick={handleMississaugaClick}>MISSISSAUGA</Button>
        </ButtonContainer>
        <Icon src={PUL} alt="Popup Icon" />
        <CloseLink onClick={onClose}>NO DISCOUNT, THANKS</CloseLink>
      </PopupContent>
    </PopupContainer>
  );
};

DiscountPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DiscountPopup;
