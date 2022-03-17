import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import InterestInWebDevelopment from './InterestInWebDevelopment';
import Skills from './Skills';
const About = ()=>{
    return(
        <AboutContainer id="about" className='section-container'>
            <AboutWrapper>
                <AboutTitleContainer>
                    <AboutTitle>
                        About
                    </AboutTitle>
                </AboutTitleContainer>
                <SubsectionGroup>
                    <InterestInWebDevelopment></InterestInWebDevelopment>
                    <Education></Education>
                    <Skills></Skills>
                </SubsectionGroup>
            </AboutWrapper>
        </AboutContainer>
    );
}

const AboutContainer = styled.section`
    display:inline-block;
    padding-top:10px;
    padding-bottom:90px;
`;
const AboutWrapper = styled.div`
`;
const AboutTitleContainer =styled.div`
`;
const AboutTitle = styled.h1`
    font-size:2em`;
const SubsectionGroup=styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 
    "InterestInWebDevelopment"
    "Education"
    "Skills";
    @media (min-width: 600px){
        grid-template-columns: 50% 50%;
        grid-template-areas:"InterestInWebDevelopment InterestInWebDevelopment"
                            "Education Skills";
    }
    @media (min-width: 1000px){
        grid-template-columns: 50% 50%;
        grid-template-areas:"InterestInWebDevelopment Education"
                            "InterestInWebDevelopment Skills";
    }
`;



export default About;


