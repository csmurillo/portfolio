import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({children})=>{
    return(
        <LayoutContainer>
            <Header></Header>
            {children}
        </LayoutContainer>
    );
};
const LayoutContainer = styled.div`
    width:100%; height:100%;
    // border: 1px solid red;
    // background-image:url('/images/portfolio-background.jpg');
    background-image:url('/images/portfolio-background-2.jpg');
    background-size: cover;
    @media (max-width: 768px) {
        background-size: 100% 110%;
        background-repeat: no-repeat;
    }
`;

export default Layout;