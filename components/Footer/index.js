import React from 'react';
import styled from 'styled-components';

const Footer = ()=>{
    return(
        <FooterContainer className='section-container'>
            <Porfolio>Personal Portfolio</Porfolio>
            <CopyRight>&copy; 2022</CopyRight>
        </FooterContainer>
    );
};

const FooterContainer=styled.div`
padding-top:10px;
padding-bottom:10px;
background-color:black;
color:white;
display:flex;
justify-content:space-between;`;
const Porfolio=styled.h1`
font-size:1em;
padding:0;
margin:0;`;
const CopyRight=styled.p`
font-size:1em;
padding:0;
margin:0;`;

export default Footer;