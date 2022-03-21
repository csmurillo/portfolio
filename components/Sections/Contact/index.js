import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


const Contact = ()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.SERVICEEMAILJS, process.env.TEMPLAYEEMAILJS, form.current, process.env.KEYEMAILJS)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return(
        <ContactContainer id="contact">
            <ContactTitleContainer className='center'>
                <ContactTitle>Contact</ContactTitle>
            </ContactTitleContainer>
            <ContactFormContainer className='center'>
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <ContactFormGroup>
                        <div>
                            <ContactLabelInput for="user_name">Name:</ContactLabelInput>
                        </div>
                        <ContactInput type="text" name="user_name"></ContactInput>
                    </ContactFormGroup>
                    <ContactFormGroup>
                        <div>
                            <ContactLabelInput for="user_email">Email:</ContactLabelInput>
                        </div>
                        <ContactInput type="email" name="user_email"></ContactInput>
                    </ContactFormGroup>
                    <ContactFormGroup>
                        <div>
                            <ContactLabelInput for="message">Message:</ContactLabelInput>
                        </div>
                        <ContactTextArea name="message" ></ContactTextArea>
                    </ContactFormGroup>

                    <ContactButtonContainer className='center'>
                        <ContactButton type="submit" value="Send">Send</ContactButton>
                    </ContactButtonContainer>
                </ContactForm>
            </ContactFormContainer>
        </ContactContainer>
    );
}

const ContactContainer = styled.section`
    max-height:800px;
    padding-bottom:10%;
    height:100%;
    background-image:url('./images/reverse-background.jpg');
    background-size: cover;
    background-position:center;
`;
const ContactTitleContainer = styled.div`
`;
const ContactTitle = styled.h1`
color:white;
font-size:2.5em;`;
const ContactFormContainer = styled.div`
padding-left:10%;
padding-right:10%;
@media (min-width: 768px){
    padding-left:32%;
    padding-right:32%;
}
`;

const ContactForm = styled.form`
color:white;
width:100%;
`;
const ContactFormGroup = styled.div`
padding-top:10px;
padding-bottom:10px;
width:100%;
display:inline-block;
`;
const ContactLabelInput = styled.label`
margin-bottom:10px;`;
const ContactInput = styled.input`
font-size:1em;
margin:0;
padding:5px 2% 5px 2%;
width:96%;
`;
const ContactTextArea = styled.textarea`
font-size:1.2em;
margin:0;
padding:0;
width:100%;
height:250px;
resize: none;
`;
const ContactButtonContainer =styled.div`
    width:100%;
`;
const ContactButton = styled.button`
    font-size: 1.2em;
    color: black;
    background-color: white;
    border-radius: 25%/60%;
    padding: 10px 30px 10px 30px;
`;
export default Contact;
