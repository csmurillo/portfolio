import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import Menu from './Menu';

const Header = ()=>{
    return(
        <HeaderContainer>
            <Menu></Menu>
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

const HeaderContainer = styled.div`
    color:white;
    padding:10px 20px 10px 20px;
`;
///////////////////////////////////
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