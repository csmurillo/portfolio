import react, {useState} from 'react';
import styled from 'styled-components';

const Education = ()=>{

    return (
        <EducationContainer className='subsection-container'>
            <EducationWrapper>
                <EducationTitleContainer>
                    <EducationTitle>EDUCATION</EducationTitle>
                </EducationTitleContainer>
                <UniversityContainer>
                    <University>California State University, Northridge</University>
                    <UniversityCertificate>Bachelor of Computer Science</UniversityCertificate>
                </UniversityContainer>
            </EducationWrapper>
        </EducationContainer>
    );
};

const EducationContainer=styled.section`
grid-area:Education;
@media (min-width: 1000px){
    padding-left:10%;
    padding-right:10%;
}
`;
const EducationWrapper = styled.div``;
const EducationTitleContainer=styled.div`

`;
const EducationTitle=styled.h2`
    font-size:1.1em;
    text-decoration:underline;
`;
const UniversityContainer= styled.div``;
const University = styled.h3`
    margin:0;
`;
const UniversityCertificate = styled.p`
    margin:0;
`;

export default Education;



