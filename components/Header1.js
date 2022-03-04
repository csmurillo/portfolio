import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Menu from './Header/Menu';

const Header = ()=>{
    const [activeMenu,setActiveMenu]=useState(false);

    const clickMenu = ()=>{
        setActiveMenu(!activeMenu);
    };

    return(
        <HeaderContainer>
            <MenuContainer className='align-right'>
                <MenuButton className='center' onClick={clickMenu}>
                    <AiOutlineMenu></AiOutlineMenu>
                </MenuButton>
            </MenuContainer>
            <MobileNavContainer  active={activeMenu}>
                <MobileNav></MobileNav>
            </MobileNavContainer>
            <NavContainer className='align-right'>
                <List>
                    <ListItem>
                        <SearchIconContainer>
                            <p><AiOutlineSearch></AiOutlineSearch></p>
                        </SearchIconContainer>
                    </ListItem>
                    <ListItem>
                        <p>Projects</p>
                    </ListItem>
                    <ListItem>
                        <p>Resume</p>
                    </ListItem>
                    <ListItem>
                        <p>
                        Github <AiFillGithub></AiFillGithub>
                        </p>
                    </ListItem>
                </List>
            </NavContainer>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.header`
    color:white;
    // background-color:rgb(51, 51, 51);
    // background-color:black;
    padding:10px 20px 10px 20px;
    // border: 1px solid red;
`;
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
background-color:blue;
`;
const NavContainer =styled.nav`
    display:none !important;
    @media (min-width: 768px) {
        display:flex!important;
    }
`;

const List = styled.ol`
    list-style-type: none;
    display:flex;
    color:white;
`;
const ListItem = styled.li`
    padding:10px;
    // border: 1px solid red;
    font-size:20px;
`;
const SearchIconContainer = styled.div`
    cursor:pointer;
`;

export default Header;

