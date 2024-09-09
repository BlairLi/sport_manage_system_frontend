/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './headerlogo.png';
import letsconnect from './letsconnect.png';
import signin from './signin.png';
import { Link, NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CountdownTimer from './CountdownTimer'
const GlobalStyles = createGlobalStyle`
  .activeLink {
      color: #fff;
      text-decoration: none;
      position: relative;
      &:hover {
          opacity: 0.7;
          text-decoration: underline; // Applies underline only on hover
      }
  }
`;

const Header = () => {
    const [bar, setBar] = useState(false);
    const toggleBar = () => {
        setBar(!bar);
    };


    return (
        <Container>
            <GlobalStyles />
            <Bars onClick={toggleBar}>
                <div className="bar"></div>
            </Bars>

                <Nav bar={bar} onClick={() => bar && setBar(false)}> 
                <NavLink to="/OurProgram" className="activeLink activeTextLink">Programs</NavLink>
                <span className='disinHeader'> |</span>
                {/* <NavLink to="/FAQ" className="activeLink activeTextLink">FAQ</NavLink>
                <span className='disinHeader'> | </span>
                <NavLink to="/Contact" className="activeLink">
                    <SignInButton2>Let's Connect</SignInButton2>
                </NavLink> */}
                <span><a href="tel:+16477609051" className="activeLink">647-760-9051</a></span>

                <NavLink to="https://sport-manage-system.vercel.app/api/auth/signin?callbackUrl=/Dashboard" className="activeLink signInLink">
                    <SignInButton3>SIGN IN</SignInButton3>
                </NavLink>
            </Nav>

            {/* <CountdownTimer /> */}

            <NavLink to="/" ><Logo src={logo} alt="logo" /></NavLink>

            <ContactInfo>
                <span><a href="tel:+16477609051" className="activeLink">647-760-9051</a></span>
                <DisplayNone>
                <span> | </span>
                <NavLink to="https://sport-manage-system.vercel.app/api/auth/signin?callbackUrl=/Dashboard" className="activeLink">
                    <SignInButton>SIGN IN</SignInButton>
                </NavLink>
                </DisplayNone>
            </ContactInfo>
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
    z-index: 1000;
    background-color: #0C3469;
    padding: 0rem 10px;
    color: white;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    animation: header 500ms ease-in-out;
    border-bottom-style: solid;
    border-bottom-color: #000000;
    @media(max-width: 640px){
        height: 7vh;
        padding: 0 1vw;
    }
`;

const Logo = styled.img`
    height: 130px;
    width: 130px;
    order: 1; // Keeps logo in the center
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -8%);  

    @media(max-width: 640px){
        position:absolute;
        height: 6rem;
        width: 6rem;
        transform: translate(-50%, -8%); 
    }
`;


const ContactInfo = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    align-items: center;
    order: 2;

    a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            &:hover {
                opacity: 0.7;
            }

        }

    @media(max-width: 640px){
        font-size: 1.7vh;
    }

    .contact-number {
        @media(max-width: 640px){
            margin-left: 1vw;
        }
    }

    span{
        margin-Right:20px;
        display: none;

        @media(max-width: 640px){
            margin-Right:2vw;
    }
    
    @media(max-width: 640px){

                display: flex;
    }
    }
`;

const SignInButton = styled.button`
    padding: 0px 45px;
    background-color: #95071A;
    color: white; 
    border-radius: 20px;
    font-weight: 700;
    border: none;
    borderRadius: 5px;
    cursor: pointer;
    @media(max-width: 1024px){
       padding: 1vh 3vw;
       font-size: 1.3vh;
    }
    @media(max-width: 640px){
       padding: 0.2vh 1.5vw;
       font-size: 1.7vh;
    }
`;

const SignInButton2 = styled.button`
    padding: 0px 45px;
    background-color: #95071A;
    color: white;
    border-radius: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    @media(max-width: 1024px){
       padding: 1vh 3vw;
       font-size: 1.3vh;
    }
    @media(max-width: 640px){
       padding: 0.2vh 1.5vw;
       font-size: 3vh !important;  // Increased font size for mobile with !important to ensure application

    }
`;

const SignInButton3 = styled.button`
    padding: 0px 45px;
    background-color: #95071A;
    color: white;
    border-radius: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: none;
    @media(max-width: 1024px){
       padding: 1vh 3vw;
       font-size: 1.3vh;
    }
    @media(max-width: 640px){
       padding: 0.2vh 1.5vw;
       font-size: 3vh !important;  // Increased font size for mobile with !important
       display: flex;
    }
`;


const Bars = styled.div`
    display: none;
    @media(max-width: 640px){
            width: 35px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 10px;
            z-index: 100;
            order: 3; // Ensures it stays on the right
        .bar{
            width: 100%;
            height: 2px;
            background-color: ${props => props.bar ? "transparent" : "#95071A"};
            transition: all 400ms ease-in-out;
            &:before, &:after{
                content: "";
                width: 100%;
                height: 2px;
                background-color: #95071A;
                position: absolute;
            }
            &:before{
                transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                transition: all 400ms ease-in-out;
            }
            &:after{
                transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                transition: all 400ms ease-in-out;
            }
        }
    }
`;

const Nav = styled.div`
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    order: 0;
    display: flex;
    align-items: center;

    @media(max-width: 640px){
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${props => props.bar ? "100vh" : "0"};
        display: flex;
        flex-direction: column;
        background-color: #0C3469E6;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        overflow: hidden;
        transition: height 400ms ease-in-out;
        .disinHeader { display: none; }


        .signInLink {
            text-decoration: none !important; 
        }


        button {
            padding: 10px 20px;
            background-color: #95071A;
            color: white;
            border: none;
            font-weight: 700;
            cursor: pointer;
            margin: 0 auto;
            text-align: center;
            font-size: 1rem; 
        }
            font-size: 5vh;
    }

    span {
        margin-left: 1rem;
        @media(max-width: 1024px){
            margin-left: 0;
            font-size: 3vw;
        }
        @media(max-width: 640px){
            margin-left: 0;
            font-size: 3.5vw;
        }
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
             &:before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            &:hover:before {
                /* transform: scale(1);
                transform-origin: left; */
            } 
            &:hover {
                opacity: 0.7;
            }
        }
    }
    a {
        text-decoration: none;
        color: #fff;

        &.activeLink {
           /* text-decoration: underline;  // Underline for active link */
        }
    }
`;

// const SignInImage = styled.img`
//     cursor: pointer;
//     width: 11rem;  
//     height: 2.3rem;  
//     &:hover {
//         opacity: 0.8;  
//     }
//     @media(max-width: 1024px){
//         height: 3vh;
//         width  : auto ;
//     }
//     @media(max-width: 640px){
//        height: 1.8vh;
//        width  : 95% ;
//     }

// `;

const LetsConnectImage = styled.img`
  cursor: pointer;
    width: 11rem;  
    height: 2.3rem;  
    
    &:hover {
        opacity: 0.8;  
    }
    @media(max-width: 1024px){
        height: 3vh;
        width  : auto ;
    }
    @media(max-width: 640px){
       height: 2vh;
       width  : 95% ;
    }

`;


const DisplayNone = styled.div`
    @media(max-width: 640px){
    display: none;
    }

`;
