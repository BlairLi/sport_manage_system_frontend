import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './CDLogo.png';  // Ensure the path is correct

const CountdownContainer = styled.div`
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;   
  text-align: center;
  color: #333;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 5px;  
  padding: 10px;   
  position: fixed;   
  bottom: 0;   
  left: 0;   
  width: 100%;  
  background: #ffffffd6;   
  z-index: 999;  
  @media (max-width: 640px) {
    display: flex;   
  }
`;

const Logo = styled.img`
  height: 30px;  // Smaller logo to fit the line
  width: auto;
`;

const CountdownToEvent = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 8, 21); // September 21st of the current year
    const difference = targetDate - now;

    if (difference < 0) {
      // If we're past September 21st, set for next year
      targetDate.setFullYear(now.getFullYear() + 1);
    }

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const formatTime = n => n.toString().padStart(2, '0');

  return (
    <CountdownContainer>
      <Logo src={logo} alt="Countdown Logo" />
      {formatTime(timeLeft.days)} Days : {formatTime(timeLeft.hours)} Hr : 
      {formatTime(timeLeft.minutes)} Min : {formatTime(timeLeft.seconds)} Sec
    </CountdownContainer>
  );
};

export default CountdownToEvent;
