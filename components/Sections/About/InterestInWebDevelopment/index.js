import React from 'react';
import styled from 'styled-components';

const InterestInWebDevelopment = ()=>{
    return (
        <InterestInWebDevelopmentContentContainer>
                <InterestInWebDevelopmentContent>
                    Hello I am a Software Developer that is interterested in web development. Ever since
                    I took my first web course at my university and saw that I could not only create websites
                    that served the purpose to establish an online presence, but could also develop games
                    , real time apps, and any app that you I could imagine in the browser. I took the time 
                    to become a frontend/backend developer.
                </InterestInWebDevelopmentContent>
        </InterestInWebDevelopmentContentContainer>
    );
};

const InterestInWebDevelopmentContentContainer = styled.div`
grid-area:InterestInWebDevelopment;
`;
const InterestInWebDevelopmentContent = styled.p`
font-family: 'Barlow', sans-serif;
font-weight:400;
font-size:1.5em;
line-height:1.4em;
// width:400px;
padding:20px 0px;
margin:0;
`;


export default InterestInWebDevelopment;



