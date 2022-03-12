import react, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as HtmlLogo} from '../../../../public/images/programminglogos/html.svg';
import {ReactComponent as CssLogo} from '../../../../public/images/programminglogos/css.svg';
import {ReactComponent as JsLogo} from '../../../../public/images/programminglogos/javascript.svg';
import {ReactComponent as NextLogo} from '../../../../public/images/programminglogos/next.svg';
import {ReactComponent as ReactLogo} from '../../../../public/images/programminglogos/react.svg';
import {ReactComponent as NodeLogo} from '../../../../public/images/programminglogos/nodes.svg';
import {ReactComponent as ExpressLogo} from '../../../../public/images/programminglogos/express.svg';
import {ReactComponent as SocketLogo} from '../../../../public/images/programminglogos/socket.svg';
import {ReactComponent as HerokuLogo} from '../../../../public/images/programminglogos/heroku.svg';
import {ReactComponent as BootstrapLogo} from '../../../../public/images/programminglogos/bootstrap.svg';

const Skills = ()=>{
    const [iconHeight,setIconHeight]=useState(50);
    const [iconWidth,setIconWidth]=useState(50);

    return (
        <SkillsContainer className='section-container'>
            <SkillsTitleContainer>
                <SkillsTitle>Technogies</SkillsTitle>
            </SkillsTitleContainer>
            <SkillsIconsContainer className='center'>
                <SkillMessage></SkillMessage>
                <SkillContainer>
                    <SkillHtmlSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillHtmlSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillCssSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillCssSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillJsSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillJsSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillNextSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillNextSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillReactSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillReactSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillNodeSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillNodeSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillExpressSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillExpressSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillSocketSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillSocketSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillHerokuSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillHerokuSvg>
                </SkillContainer>
                <SkillContainer>
                    <SkillBootstrapSvg iconWidth={iconWidth} iconHeight={iconHeight}></SkillBootstrapSvg>
                </SkillContainer>
            </SkillsIconsContainer>
        </SkillsContainer>
    );
};


const SkillsContainer = styled.section`
`;
const SkillsTitleContainer=styled.div``;
const SkillsTitle=styled.h2`
    font-size:1.5em;
    text-decoration:underline;
`;
const SkillsIconsContainer = styled.div`
position:relative;
display:flex;
flex-wrap: wrap;
width:400px;
// @media 
`;
// skills
const SkillContainer =styled.div`
background-color:white;
padding:15px;
margin-right:10px;
margin-bottom:10px;
border:1px solid lightgray;
border-radius:15px;
display:flex;
justify-content:center;
`;
const SkillMessage =styled.div``;
const SkillHtmlSvg = styled(HtmlLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillCssSvg = styled(CssLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillJsSvg = styled(JsLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillNextSvg = styled(NextLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillReactSvg = styled(ReactLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillNodeSvg = styled(NodeLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillExpressSvg = styled(ExpressLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillSocketSvg = styled(SocketLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillHerokuSvg = styled(HerokuLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
const SkillBootstrapSvg = styled(BootstrapLogo).attrs(props=>({
    width:props.iconWidth,
    height:props.iconHeight
}))`
`;
export default Skills;