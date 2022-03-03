import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiFillGithub, AiOutlineMenu } from "react-icons/ai";

const Menu = ()=>{
    const [activeMenu,setActiveMenu]=useState(false);

    const clickMenu = ()=>{
        setActiveMenu(!activeMenu);
    };
    return(
        <>
            <MenuContainer className='align-right'>
                <MenuButton className='center' onClick={clickMenu}>
                    <AiOutlineMenu></AiOutlineMenu>
                </MenuButton>
            </MenuContainer>
            <MobileNavContainer  active={activeMenu}>
                <MobileNav></MobileNav>
            </MobileNavContainer>
        </>
    );
};
const MenuContainer = styled.div`
z-index:1;
@media (min-width: 768px) {
    display:none!important;
}
`;
const MenuButton= styled.button`
    z-index:9;
    cursor:pointer;
    padding:10px;
    font-size:45px;
    background: none;
    color: inherit;
    border: none;
`;
const MobileNavContainer = styled.nav`
z-index:0;
width:100%; height:100%;
min-height:620px;
top:0;left:0;
position:absolute;
display:flex;
flex-direction:column;
display: ${props => props.active ? 'flex':'none'};
@media (min-width: 768px) {
    display:none!important;
}
`;
const MobileNav = styled.div`
position:relative;
margin-top:80px;
flex:1;
width:100%;
background-color: rgb(0, 0, 43);
`;
export default Menu;


