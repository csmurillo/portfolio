import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const Home = ()=>{
    return (
        <HomeContainer id="home" className='container'>
            <EntryMsgContainer>
                <EntryMsg>
                    Welcome I am Angel Murillo,<br/> a Web Developer
                </EntryMsg>
                <EntryMsgSubscript>FrontEnd / BackEnd</EntryMsgSubscript>
            </EntryMsgContainer>
            <ArrowContainer>
                <Link href="#about">
                    <Arrow>
                        <IoIosArrowDown></IoIosArrowDown>
                    </Arrow>
                </Link>
            </ArrowContainer>
        </HomeContainer>
    );
};

const HomeContainer = styled.main`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
const EntryMsgContainer = styled.div`
    padding-top:50px;
    padding-left:5%;
    @media (min-width: 768px){
        padding-left:10%;
    }
`;
const EntryMsg = styled.h1`
    font-size:2.5em;
    background-color:none;
    color:white;
    margin:0px;
    @media (min-width: 768px) {
        font-size:3.5em;
    }
`;
const EntryMsgSubscript = styled.h2`
    font-size:1.05em;
    padding-left:2px;
    color: rgb(180,180,180);
`;
const ArrowContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding-bottom:20px;
`;
const Arrow = styled.a`
    text-decoration:none;
    color:white;
    font-size: 2.5em;
    animation: animateUpDown infinite 2s;
    &:hover{
        cursor:pointer;
    }
`;
export default Home;



