import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import logo from '../../public/image.png';  // Ensure you have the logo image path correctly
import check from '../../public/check.png';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  color: #95071A;
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #000000;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const Checkmark = styled.img`
  width: 50px; // Adjust size as necessary
  height: auto;
  margin-bottom: 20px;
`;

const HomeButton = styled(Link)`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const url = import.meta.env.VITE_MONGODB_URL;

const Success = () => {
  useEffect(() => {
    // Extract session ID from URL
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    const bookingId = params.get('booking_id');
    const child1Amount = params.get('child1Amount');
    const child1Amount2 = params.get('child1Amount2');
    const child2Amount = params.get('child2Amount');
    if (sessionId) {
      // Verify the session with Stripe
      verifySession(sessionId, bookingId, child1Amount, child1Amount2, child2Amount);
    }
  }, []);

  const verifySession = async (sessionId, bookingID, child1Amount, child1Amount2, child2Amount) => {
    try {
      const response = await axios.post(`${url}/verify-checkout-session`, { sessionId });
      if (response.data.success) {
        // Call your updatedRegistration function here
        updatedRegistration(bookingID, child1Amount, child1Amount2, child2Amount);
        console.log('Payment confirmed.');
      } else {
        console.error('Payment not confirmed.');
      }
    } catch (error) {
      console.error('Error verifying session:', error);
    }
  };

  const updatedRegistration = async (id, child1Amount, child1Amount2, child2Amount) => {
    const updateRegistration = {
      child1Amount: child1Amount,
      child1Amount2: child1Amount2 ? Number(child1Amount2) : 0,
      child2Amount: child2Amount ? Number(child2Amount) : 0,
    };

    console.log('updateRegistration:', updateRegistration);
    try {
      await axios.put(`${url}/api/updateRegistration/${id}`, updateRegistration);
    } catch (error) {
        console.error('Error updating schedule:', error);
        throw error;
    } 
    console.log('Payment successful, registration updated!');
  };

  return (
    <Container>
      <Title>THANK YOU!</Title>
      <Logo src={logo} alt="Junior Athletics Logo" />
      <Checkmark src={check} alt="Checkmark" />
      <Message>
        Thank you for filling out the form. <br />
        We have received your information and will get back to you shortly. <br/>
        If you have any questions in the meantime, please don't hesitate to contact us.
      </Message>
      <HomeButton to="/">Go Back to Home Page</HomeButton>
    </Container>
  );
};

export default Success;
