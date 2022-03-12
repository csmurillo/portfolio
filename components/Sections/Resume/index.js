import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';

const Resume = ()=>{
    return(
        <ResumeContainer id="resume">
            <h1>Resume</h1>
            <Skills></Skills>
        </ResumeContainer>
    );
}

const ResumeContainer = styled.div`
height:100%;
`;

export default Resume;