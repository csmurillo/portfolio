import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Footer = ()=>{

    return(
        <FooterContainer className='section-container'>
            <CopyRight>&copy; 2022</CopyRight>
        </FooterContainer>
    );
};

const FooterContainer=styled.footer`
padding-top:10px;
padding-bottom:10px;
background-color:black;
color:white;
display:flex;
justify-content:flex-end;`;
const TermCondition=styled.a`
font-size:1em;
padding:0;
margin:0;`;
const CopyRight=styled.p`
font-size:1em;
padding:0;
margin:0;`;

export default Footer;