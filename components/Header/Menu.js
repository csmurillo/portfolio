import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import styles from './menu.module.css'

import {MdOutlineContactMail} from "react-icons/md";
import {HiOutlineDocumentText} from "react-icons/hi";
import {IoHomeOutline,IoBriefcaseOutline} from "react-icons/io5";
import {SiAboutdotme} from "react-icons/si";


const Menu = ()=>{
    const [activeMenu,setActiveMenu]=useState(false);

    const clickMenu = ()=>{
        setActiveMenu(!activeMenu);
    };
    return(
        <>
            <MenuContainer className='align-right'>
                <MenuButton onClick={clickMenu}>
                    {!activeMenu&&<AiOutlineMenu></AiOutlineMenu>}
                    {activeMenu&&<IoClose className={styles.crossSize}></IoClose>}
                </MenuButton>
            </MenuContainer>
            <MobileNavContainer  active={activeMenu}>
                <MobileNav>
                    <MobileNavTitleContainer>
                        <MobileNavTitle className='center'>
                            Portfolio
                        </MobileNavTitle>
                    </MobileNavTitleContainer>
                    <NavContainer>
                        <List>
                            <ListItem className='center'>
                                <IoHomeOutline></IoHomeOutline>
                                <span>Home</span>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem className='center'>
                                <SiAboutdotme></SiAboutdotme>
                                <span>About</span>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem className='center'>
                                <IoBriefcaseOutline></IoBriefcaseOutline>
                                <span>Projects</span>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem className='center'>
                                <HiOutlineDocumentText></HiOutlineDocumentText>
                                <span>Resume</span>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem className='center'>
                                <MdOutlineContactMail></MdOutlineContactMail>
                                <span>Contact</span>
                            </ListItem>
                        </List>
                    </NavContainer>
                </MobileNav>
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
z-index:1;
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
const MobileNavTitleContainer=styled.div`
border-bottom:1px solid white;
`;
const MobileNavTitle=styled.h1`

`;
const NavContainer=styled.nav`
display:flex;
flex-direction:column;
`;
const List=styled.ul`
list-style-type: none;
padding:0px;
margin:0px;
`;
const ListItem=styled.li`
width:100%;
padding-top:20px;
padding-bottom:20px;
margin:0px;
    &:hover{
        cursor:pointer;
        text-decoration:underline;
        & span{
            
        }
    }
    & span{
        margin-left:10px;
    }
`;
export default Menu;


