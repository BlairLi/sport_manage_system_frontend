import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C3469;  // Dark blue background to match the navbar
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'League Spartan', sans-serif;
`;

const TimeSection = styled.div`
  text-align: center;
  margin: 0 5px;
`;

const EmptySpace = styled.div`
  width: 90px;  // Adjust width as needed to create the desired spacing
`;

const TimeLabel = styled.div`
  font-size: 0.9rem;  // Smaller font for labels
`;

const TimeValue = styled.div`
  font-size: 1.2rem;  // Larger font for values
`;

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`01/01/${new Date().getFullYear() + 1}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index, array) => {
    timerComponents.push(
      <TimeSection key={interval}>
        <TimeLabel>{interval.toUpperCase()}</TimeLabel>
        <TimeValue>{timeLeft[interval]}</TimeValue>
      </TimeSection>
    );
    // Insert an empty space after "HOURS" and before "MINUTES"
    if (interval === 'hours') {
      timerComponents.push(<EmptySpace key="empty" />);
    }
  });

  return (
    <TimerContainer>
      {timerComponents.length ? timerComponents : <TimeValue>Time's up!</TimeValue>}
    </TimerContainer>
  );
};

export default CountdownTimer;
