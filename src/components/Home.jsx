import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main from "./Main/Main";
import DiscountPopup from "./Popup/DiscountPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Any logic for triggering the popup can be added here, such as a timer or a condition.
  }, []);

  return (
    <Container>
      {showPopup && <DiscountPopup onClose={handleClosePopup} />}
      <br/>
      <br/>
      <Main />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-repeat: repeat;
  background-color: #ffffff;
  @media(max-width: 640px){
    /* background-color: #77787D; */
    margin-top: -11px;
    }
`;
