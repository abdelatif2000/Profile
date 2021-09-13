import React from 'react';
import '../../index.css';
import {HomeStyle,HomeInformation,HomeTitle,HomeInfo,HomeDescription,HomeBtn,Span,Container} from './style'
import './style.js';
 const Home = () => {
    return (
        <HomeStyle >
        <Container>
            <HomeInformation >
                <HomeTitle >Abdelatif Benichou</HomeTitle>
                <HomeInfo >Creative Director</HomeInfo>
                <HomeDescription>
                    I am a professional <Span>Front-End Developer</Span> creating modern and resposive designs to Web . Let us work together. Thank you. 
                </HomeDescription>
                <HomeBtn >Let's Begin</HomeBtn>
            </HomeInformation>
        </Container>
    </HomeStyle>
    )
}
export default Home