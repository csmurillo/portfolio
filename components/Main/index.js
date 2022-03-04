import React from 'react';
import styled from 'styled-components';

const Main = ()=>{
    return (
        <MainContainer className='container'>
            <EntryMsgContainer>
                <EntryMsg>
                    Welcome I am Angel Murillo,<br/> a Web Developer
                </EntryMsg>
                <EntryMsgSubscript>FrontEnd / BackEnd</EntryMsgSubscript>
            </EntryMsgContainer>
        </MainContainer>
    );
};

const MainContainer = styled.main`
background-color:pink;
height:100%;
`;
const EntryMsgContainer = styled.div`
    padding-top:50px;
    padding-left:10%;
`;
const EntryMsg = styled.h1`
    font-size:3.5em;
    // margin-left:10%;
    background-color:none;
    color:white;
    margin:0px;
    @media (max-width: 768px) {
        font-size:2.9em;
    }
`;
const EntryMsgSubscript = styled.h2`
    font-size:.8em;
    padding-left:2px;
    color: rgb(180,180,180);
`;

export default Main;

