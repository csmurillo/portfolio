import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
const About = ()=>{
    return(
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutTitleContainer>
                    <AboutTitle>
                        About
                    </AboutTitle>
                </AboutTitleContainer>
                <AboutContentContainer className='center'>
                    <AboutContent>
                        I am a developer that loves a challenge.
                    </AboutContent>
                </AboutContentContainer>
            </AboutWrapper>
            <Skills></Skills>
        </AboutContainer>
    );
}

const AboutContainer = styled.section`
    height:100%;
`;
const AboutWrapper = styled.div`
`;
const AboutTitleContainer =styled.div`
`;
const AboutTitle = styled.h1`
font-size:1.5em`;
const AboutContentContainer=styled.div`
`;
const AboutContent = styled.p`
`;


export default About;


