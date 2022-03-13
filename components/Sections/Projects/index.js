import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {ReactComponent as HtmlLogo} from '../../../public/images/programminglogos/html.svg';
import {ReactComponent as CssLogo} from '../../../public/images/programminglogos/css.svg';
import {ReactComponent as JsLogo} from '../../../public/images/programminglogos/javascript.svg';
import {ReactComponent as NodeLogo} from '../../../public/images/programminglogos/nodes.svg';
import {ReactComponent as ExpressLogo} from '../../../public/images/programminglogos/express.svg';

const Projects = ()=>{
    return(
        <ProjectsContainer id="projects" className='section-container'>
            <ProjectTitleContainer>
                <ProjectTitle>
                    Projects
                </ProjectTitle>
            </ProjectTitleContainer>
            <ProjectGroupContainer>
                <Project1Container className='center'>
                    <Project1Wrapper>
                        <Project1>
                            <Project1ImageContainer>
                                <Image src='/images/project1/pixelartz.png' width={350} height={250}/>
                            </Project1ImageContainer>
                            <Project1Info>
                                <div>
                                    <Project1ImageTitle>
                                        Pixel Art
                                    </Project1ImageTitle>
                                    <Project1Technologies>
                                        <TechnologyHtml></TechnologyHtml>
                                        <TechnologyCss></TechnologyCss>
                                        <TechnologyJS></TechnologyJS>
                                        <TechnologyNode></TechnologyNode>
                                        <TechnologyExpress></TechnologyExpress>
                                    </Project1Technologies>
                                </div>
                                <div>
                                    <div>Live Site</div>
                                    <div>Code</div>
                                </div>
                            </Project1Info>
                        </Project1>
                    </Project1Wrapper>
                </Project1Container>
                <Project2Container>
                    Project2
                </Project2Container>
                <Project3Container>
                    Project3
                </Project3Container>
            </ProjectGroupContainer>
        </ProjectsContainer>
    );
}
// projectwrapper
const Project1Wrapper = styled.div``;
const Project1 = styled.div`
    padding:20px;
    border:1px solid lightgray;
    border-radius:15px;
    background-color:white;
`;
const Project1ImageContainer = styled.div``;
const Project1ImageTitle =styled.h2`
padding:0;
margin:0;`;
const Project1Info = styled.div`
display:flex;
justify-content: space-between;
`;
const Project1Technologies = styled.div``;
const TechnologyHtml = styled(HtmlLogo).attrs(props=>({
    width:20,
    height:20
}))`
padding:5px;
border:1px solid lightgray;
border-radius:5px;
`;
const TechnologyCss = styled(CssLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
`;
const TechnologyJS = styled(JsLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
`;
const TechnologyNode = styled(NodeLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
`;
const TechnologyExpress = styled(ExpressLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
`;
// end project wrapper

const ProjectsContainer = styled.section`
    height:100%;
    background-color:rgb(250,250,250);
`;
const ProjectTitleContainer = styled.div`

`;
const ProjectTitle= styled.h1`
font-size:2em
`;
const ProjectGroupContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
    "Project1"
    "Project2"
    "Project3";
    @media (min-width: 768px){
        grid-template-columns: 50%;
        grid-template-areas:"Project1 Project2"
                            "Project3 .";
    }
`;

const Project1Container = styled.div`
    grid-area:Project1;
    border:5px solid blue;
`;
const Project2Container = styled.div`
    grid-area:Project2;
    border:5px solid blue;
`;
const Project3Container = styled.div`
    grid-area:Project3;
    border:5px solid blue;
`;


export default Projects;