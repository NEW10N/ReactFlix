import React, { useContext } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { userContext } from '../../../Context/UserContext';
import { pageContext } from '../../../Context/PageContext';

const NavStyled = styled.nav`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 70vw;
    height: 100vh;
    position: fixed;
    top: 0vh;
    right:${(props) => props.show ? "0vw" : "-70vw"};
    z-index: 1;
    transition: right 1s ease;
    color:white;
    background: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,.3));
    /* background-color: rgba(0,0,0,.6); */
    @media(min-width:500px){
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        flex-direction:row-reverse;

        position: static;
        width: 100%;
        height: 10vh;
        hr{
            display: none;
        }
        /* width: initial; */
    }
`
const Linkstyled = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
padding:1rem;
margin-top:1rem;
width:100%;
color: white;
text-decoration: none;
@media(min-width:500px){
    width: initial;
    display: inline-block;
    }
`

const LinksActualStyled = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
padding:1rem;
margin-top:1rem;
width:100%;
color: dodgerblue;
text-decoration: none;
@media(min-width:500px){
    width: initial;
    display: inline-block;
    }
`

const UserStyled = styled.div`
padding-top: 2.5rem;
margin-top: 1rem;
@media (min-width: 500px) {
padding-top: 1rem;
}
`

const Nav = ({ showNav, clickNav }) => {
    const { user, getActiveUser } = useContext(userContext);
    console.log(user);
    const { page } = useContext(pageContext);
    const activeUser = getActiveUser() //!= null ? true : false
    console.log(page);

    return (
        <NavStyled show={showNav} onClick={clickNav}>
            {/* {activeUser&&<Linkstyled to ="/profile">Profile</Linkstyled>} */}
            {activeUser != null?<UserStyled>{activeUser.Name}<hr/></UserStyled>:false}
            
            <div>
                {page == "HOME" ? <LinksActualStyled to="/" >Home</LinksActualStyled> : <Linkstyled to="/" >Home</Linkstyled>}
                {page == "POPULAR" ? activeUser && <LinksActualStyled to="/popular" >Popular</LinksActualStyled> : activeUser && <Linkstyled to="/popular" >Popular</Linkstyled>}
                {page == "FAVORITES" ? activeUser && <LinksActualStyled to="/favorites" >Favorites {activeUser.favoriteMovies.length > 0 ? activeUser.favoriteMovies.length:false} </LinksActualStyled> : activeUser && <Linkstyled to="/favorites" >Favorites {activeUser.favoriteMovies.length > 0 ? activeUser.favoriteMovies.length:false}</Linkstyled>}
                {page == "REGISTER" ? !activeUser && <LinksActualStyled to="/register" >Register</LinksActualStyled> : !activeUser && <Linkstyled to="/register" >Register</Linkstyled>}
                {page == "LOGIN" ? !activeUser && <LinksActualStyled to="/login" >Login</LinksActualStyled> : !activeUser && <Linkstyled to="/login" >Login</Linkstyled>}
                {page == "LOGOUT" ? activeUser && <LinksActualStyled to="/logout" >Logout</LinksActualStyled> : activeUser && <Linkstyled to="/logout" >Logout</Linkstyled>}
            </div>
        </NavStyled>
    )
}

export default Nav