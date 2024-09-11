import React from 'react';
import styled from 'styled-components';
import logo from './headerlogo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Nav>
            <NavLink to="/" ><Logo src={logo} alt="logo" /></NavLink>
                <NavLink to="/OurProgram" className="navLink">Programs</NavLink>
                <span className='divider'>|</span>
                <a href="tel:+16477609051" className="navLink">647-760-9051</a>
                <span className='divider'>|</span>
                <NavLink to="https://sport-manage-system.vercel.app/api/auth/signin?callbackUrl=/Dashboard" className="navLink">
                    <SignInButton>SIGN IN</SignInButton>
                </NavLink>
            </Nav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    font-family: 'League Spartan', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: #0C3469;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    z-index: 1000;
    @media (max-width: 640px) {
        height: 3.5rem;  // Reduce the height for smaller screens
    }
`;

const Logo = styled.img`
    height: 3rem;  // Default height
    cursor: pointer;
    margin-right: 0.5rem;  // Reduces spacing between the logo and the next nav item
    @media (max-width: 640px) {

    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    .navLink {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        @media (max-width: 640px) {
            font-size: 1rem;  // Smaller font size for readability on small devices
            font-weight: bold;
            margin: 5px;
        }
    }
    .divider {
        color: white;
        padding: 0 5px;  // Reduced padding for dividers
        @media (max-width: 640px) {
            font-size: 0.7rem;  // Smaller font size for dividers
            padding: 0 3px;  // Even less padding for dividers on smaller screens
        }
    }
`;

const SignInButton = styled.button`
    background-color: #95071A;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    @media (max-width: 640px) {
        padding: 0.2rem 0.5rem;  // Smaller padding for smaller screens
        font-size: 0.6rem;  // Smaller font size to fit compact spaces
    }
`;
