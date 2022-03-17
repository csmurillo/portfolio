import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {ReactComponent as HtmlLogo} from '../../../public/images/programminglogos/html.svg';
import {ReactComponent as CssLogo} from '../../../public/images/programminglogos/css.svg';
import {ReactComponent as JsLogo} from '../../../public/images/programminglogos/javascript.svg';
import {ReactComponent as NodeLogo} from '../../../public/images/programminglogos/nodes.svg';
import {ReactComponent as ExpressLogo} from '../../../public/images/programminglogos/express.svg';
import {ReactComponent as SocketLogo} from '../../../public/images/programminglogos/socket.svg';
import {ReactComponent as ReactLogo} from '../../../public/images/programminglogos/react.svg';
import {ReactComponent as NextLogo} from '../../../public/images/programminglogos/next.svg';


import {RiExternalLinkLine,RiCodeSSlashFill} from "react-icons/ri";

const Projects = ()=>{
    return(
        <ProjectsContainer id="projects" className='section-container'>
            <ProjectWrapper>
                <ProjectTitleContainer>
                    <ProjectTitle>
                        Projects
                    </ProjectTitle>
                </ProjectTitleContainer>
                <ProjectGroupContainer>
                    <Project1Container className='center'>
                        <ProjectContainer>
                            <Project>
                                <ProjectImageContainer>
                                    <Image src='/images/project1/pixelArt.png' width={500} height={250}/>
                                </ProjectImageContainer>
                                <ProjectInfo>
                                    <LeftProjectInfo>
                                        <ProjectImageTitle>
                                            Pixel Art
                                        </ProjectImageTitle>
                                        <ProjectTechnologies>
                                            <TechnologyHtml></TechnologyHtml>
                                            <TechnologyCss></TechnologyCss>
                                            <TechnologyJS></TechnologyJS>
                                            <TechnologyNode></TechnologyNode>
                                            <TechnologyExpress></TechnologyExpress>
                                        </ProjectTechnologies>
                                    </LeftProjectInfo>
                                    <RightProjectInfo>
                                        <LinksGroup>
                                            <LiveSiteExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiExternalLinkLine></RiExternalLinkLine></ExternalLinkLogo>
                                                    <div className='center'><LiveSite>Live Site</LiveSite></div>
                                                </div>
                                            </LiveSiteExternalLink>
                                            <CodeExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiCodeSSlashFill></RiCodeSSlashFill></ExternalLinkLogo>
                                                    <div className='center'><Code>Code</Code></div>
                                                </div>
                                            </CodeExternalLink>
                                        </LinksGroup>
                                    </RightProjectInfo>
                                </ProjectInfo>
                            </Project>
                        </ProjectContainer>
                    </Project1Container>
                    <Project2Container className='center'>
                        <ProjectContainer>
                            <Project>
                                <ProjectImageContainer>
                                    <Image src='/images/project2/tictax.png' width={500} height={250}/>
                                </ProjectImageContainer>
                                <ProjectInfo>
                                    <LeftProjectInfo>
                                        <ProjectImageTitle>
                                            Tic Tac Toe Online
                                        </ProjectImageTitle>
                                        <ProjectTechnologies>
                                            <TechnologyHtml></TechnologyHtml>
                                            <TechnologyCss></TechnologyCss>
                                            <TechnologyJS></TechnologyJS>
                                            <TechnologySocket></TechnologySocket>
                                        </ProjectTechnologies>
                                    </LeftProjectInfo>
                                    <RightProjectInfo>
                                        <LinksGroup>
                                            <LiveSiteExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiExternalLinkLine></RiExternalLinkLine></ExternalLinkLogo>
                                                    <div className='center'><LiveSite>Live Site</LiveSite></div>
                                                </div>
                                            </LiveSiteExternalLink>
                                            <CodeExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiCodeSSlashFill></RiCodeSSlashFill></ExternalLinkLogo>
                                                    <div className='center'><Code>Code</Code></div>
                                                </div>
                                            </CodeExternalLink>
                                        </LinksGroup>
                                    </RightProjectInfo>
                                </ProjectInfo>
                            </Project>
                        </ProjectContainer>
                    </Project2Container>
                    <Project3Container className='center'>
                        <ProjectContainer>
                            <Project>
                                <ProjectImageContainer>
                                    <Image src='/images/project3/sunnyside.png' width={500} height={250}/>
                                </ProjectImageContainer>
                                <ProjectInfo>
                                    <LeftProjectInfo>
                                        <ProjectImageTitle>
                                        Sunnyside<br/>(Frontend)
                                        </ProjectImageTitle>
                                        <ProjectTechnologies>
                                            <TechnologyReact></TechnologyReact>
                                            <TechnologyNext></TechnologyNext>
                                            <TechnologyHtml></TechnologyHtml>
                                            <TechnologyCss></TechnologyCss>
                                            <TechnologyJS></TechnologyJS>
                                        </ProjectTechnologies>
                                    </LeftProjectInfo>
                                    <RightProjectInfo>
                                        <LinksGroup>
                                            <LiveSiteExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiExternalLinkLine></RiExternalLinkLine></ExternalLinkLogo>
                                                    <div className='center'><LiveSite>Live Site</LiveSite></div>
                                                </div>
                                            </LiveSiteExternalLink>
                                            <CodeExternalLink className='center'>
                                                <div>
                                                    <ExternalLinkLogo><RiCodeSSlashFill></RiCodeSSlashFill></ExternalLinkLogo>
                                                    <div className='center'><Code>Code</Code></div>
                                                </div>
                                            </CodeExternalLink>
                                        </LinksGroup>
                                    </RightProjectInfo>
                                </ProjectInfo>
                            </Project>
                        </ProjectContainer>
                    </Project3Container>
                </ProjectGroupContainer>
            </ProjectWrapper>
        </ProjectsContainer>
    );
}
const ProjectsContainer = styled.section`
    background-color:rgb(252,252,252);
    padding-top:10px;
    padding-bottom:40px;
`;
const ProjectWrapper = styled.div``;
const ProjectTitleContainer = styled.div`
`;
const ProjectTitle= styled.h1`
font-size:2em;
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
        column-gap: 4%;
        grid-template-columns: 48% 48%;
        grid-template-areas:"Project1 Project2"
                            "Project3 .";
    }
`;

const Project1Container = styled.div`
    grid-area:Project1;
    margin-bottom:25px;
`;
const Project2Container = styled.div`
    grid-area:Project2;
    margin-bottom:25px;
`;
const Project3Container = styled.div`
    grid-area:Project3;
    margin-bottom:45px;
`;
// projectcontainer
const ProjectContainer = styled.div``;
const Project = styled.div`
    width:90%;
    padding:20px;
    border:1px solid lightgray;
    border-radius:15px;
    background-color:white;
`;
const ProjectImageContainer = styled.div``;
const ProjectInfo = styled.div`
display:flex;
justify-content: space-between;
`;
const LeftProjectInfo= styled.div`
width:55%;`;
const RightProjectInfo=styled.div``;
const LinksGroup = styled.div`
display:flex;
align-items:flex-end;
// height:100%;
`;
const LiveSiteExternalLink=styled.a`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    &:hover{
        cursor:pointer;
        margin-bottom:-4px;
        border-bottom:5px solid blue;
        overflow: hidden; 
    }
`;
const ExternalLinkLogo=styled.div`
font-size:2em;`;
const LiveSite =styled.div`
font-size:.6em;`;
const CodeExternalLink=styled.a`
    box-sizing: border-box;
    position:relative;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    margin-left:10px;
    &:hover{
        cursor:pointer;
        margin-bottom:-4px;
        border-bottom:5px solid darkblue;
        overflow: hidden; 
    }
`;
const Code =styled.div`
font-size:.6em;`;
const ProjectImageTitle =styled.h2`
font-size:1.5em;
padding:0px 0px 10px 0px;
margin:0;
`;
const ProjectTechnologies = styled.div``;
const TechnologyHtml = styled(HtmlLogo).attrs(props=>({
    width:20,
    height:20
}))`
padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyCss = styled(CssLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyJS = styled(JsLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyNode = styled(NodeLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyExpress = styled(ExpressLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologySocket = styled(SocketLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyReact = styled(ReactLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
const TechnologyNext = styled(NextLogo).attrs(props=>({
    width:20,
    height:20
}))`padding:5px;
border:1px solid lightgray;
border-radius:5px;
margin-right:5px;
`;
// end project wrapper


export default Projects;