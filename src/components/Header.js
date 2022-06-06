import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="" alt="">
                <img src=" ./images/logo.svg
                " alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href='#'> Shop </a>
                <a href='#'> Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>

            </RightMenu>
            <LeftNav show={burgerStatus}>
                <ul>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roaddaster</a></li>
                </ul>
            </LeftNav>
        </Container>
    )
}
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top:0;
    right:0;
    left:0;
    z-index:10;
`;
const Menu = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @media (max-width:700px){
        display:none
    }

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding:0 10px;

    }
`;
const RightMenu = styled.div`
display: flex;
align-items:center;
a{
        font-weight: 600;
        text-transform: uppercase;
        padding:0 10px;

    }
  
`;
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`;
const LeftNav = styled.div`
 position:fixed;
 right:0;
 top:0;
 bottom:0;
 background: white;
 width:300px;
 z-index: 100;
 padding: 20px;
 display: flex;
 transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
 transition: transform  0.2s ease-in-out;
 ul{
     list-style: none;
     width: 100%;
    text-align: start;
     li{
         padding:15px 0;
         border-bottom: 1px solid rgba(0,0,0,.2);
         a{
             font-weight:600
         }
     }
 }
`;

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`;
const CloseWrapper = styled.div`
   text-align: end;

`;

export default Header
