import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title} </h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}

                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Buttons>
            </Fade>

        </Wrap>
    )
}
const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: orange;
 background-image:${props => `url(${props.bgImage})`};
 background-position: center;
 background-size:cover;
 background-repeat:none;
 display: flex;
 flex-direction: column;
 justify-content:space-between;
 align-items:center;
`;

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
   @media (max-width:768px){
       flex-direction: column;
   }

`;
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width:256px;
color:white;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
display: flex;
justify-content: center;
align-items:center;
cursor: pointer;
margin:8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color:black;
  opacity:0.65;
`;
const DownArrow = styled.img`
  margin-top:20px;
  height:40px;
  animation: animationDown infinite 1.5s;
`;
const Buttons = styled.div` 
`;

export default Section
