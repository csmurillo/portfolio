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
    // background-image:url();
`;

export default Layout;