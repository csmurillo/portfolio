import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import Menu from './Menu';
import Link from 'next/link';

const Header = ()=>{
    return(
        <HeaderContainer className='container'>
            <Menu></Menu>
            <NavContainer className='align-right'>
                <List>
                    {/* <ListItem>
                        <SearchIconContainer>
                            <p><AiOutlineSearch></AiOutlineSearch></p>
                        </SearchIconContainer>
                    </ListItem> */}
                    <ListItem>
                        <Link href="#home"><AnchorTag><p>Home</p></AnchorTag></Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#about"><AnchorTag><p>About</p></AnchorTag></Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#projects"><AnchorTag><p>Projects</p></AnchorTag></Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#resume"><AnchorTag><p>Resume</p></AnchorTag></Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#contact"><AnchorTag><p>Contact</p></AnchorTag></Link>
                    </ListItem>
                    <SeparatorContainer className="center">
                        <Separator></Separator>
                    </SeparatorContainer>
                    <ListItem>
                        <AnchorTag href="https://github.com/csmurillo"><p>Github <AiFillGithub></AiFillGithub></p></AnchorTag>
                    </ListItem>
                </List>
            </NavContainer>
        </HeaderContainer>
    );
};
const SeparatorContainer=styled.div``;
const Separator = styled.div`
border: 1px solid white;
height:65%;
`;

const HeaderContainer = styled.div`
    color:white;
    padding:10px 20px 10px 20px;
    @media (min-width: 768px) {
        padding:10px 50px 10px 50px;
    }
`;
///////////////////////////////////
const NavContainer =styled.nav`
    display:none !important;
    @media (min-width: 768px) {
        display:flex!important;
    }
`;

const List = styled.ul`
    list-style-type: none;
    display:flex;
    color:white;
`;
const ListItem = styled.li`
    padding:10px;
    font-size:20px;
`;
const AnchorTag = styled.a`
    text-decoration: none!important;
    color:white;
    &:hover{
        cursor:pointer;
        text-decoration: underline !important;
    }
`;
const SearchIconContainer = styled.div`
    cursor:pointer;
`;

export default Header;