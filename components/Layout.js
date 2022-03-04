import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Home from './Sections/Home';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Resume from './Sections/Resume';
import Contact from './Sections/Contact';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <LayoutContainer>
            <Wrap>
                <Header></Header>
                <Home></Home>
            </Wrap>
            <About></About>
            <Projects></Projects>
            <Resume></Resume>
            <Contact></Contact>
            <Footer></Footer>
        </LayoutContainer>
    );
};
const Wrap = styled.div`
    width:100%; height:100%;
    min-height:650px;
    display:flex;
    flex-direction:column;
`;
const LayoutContainer = styled.div`
    width:100%; height:100%;
    min-height:650px;
    // border: 1px solid red;
    // background-image:url('/images/portfolio-background.jpg');
    background-image:url('/images/portfolio-background-2.jpg');
    background-size: cover;
    background-position:center;
    @media (max-width: 768px) {
        background-size: 100% 135%;
        background-repeat: no-repeat;
    }
`;

export default Layout;