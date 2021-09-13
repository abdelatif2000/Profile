import React from 'react'
import {Link} from 'react-router-dom';
import  {Container,NavbarSite,Logo,LogoText,ContaintLi,NvabarUlList,ListItem} from './style';
let Styled ={
    display: "block",
    color:" #222",
    textDecoration: "none",
    padding:" 10px 10px",
    fontWeight: "bold" 
}
// & :hover {
//     color: #eb5424
// }
 const Navbar = () => {
    return (
        <NavbarSite >
            <Container>
                    <Logo className="logo">
                        <LogoText className="logo-text">PROFILE ABDO</LogoText>
                    </Logo>
                    <label for="nav"></label>
                    <NvabarUlList class="ul-list">
                        <ListItem className="list-item"><Link style={Styled}  to="/">Home</Link></ListItem>
                        <ListItem className="list-item"><ContaintLi  >Work</ContaintLi></ListItem>
                        <ListItem className="list-item"><ContaintLi  >Portfolio</ContaintLi></ListItem>
                        <ListItem className="list-item"><ContaintLi  >Resume</ContaintLi></ListItem>
                        <ListItem className="list-item"><ContaintLi  >About</ContaintLi></ListItem>
                        <ListItem className="list-item"><Link style={Styled}  to="/contact">Contact</Link></ListItem>

                    </NvabarUlList>
            </Container>
    </NavbarSite>
    )
}
export default  Navbar
