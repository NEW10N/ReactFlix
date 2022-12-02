import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import HMenu from './hMenu/HMenu'
import Nav from './nav/Nav'

const HeaderStyled = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width:100vw;
    height: 10vh;
    color: white;
    font-size: 2rem;
    z-index: 2;
    /* background-color: transparent; */
    background-color: #212121;
    @media  (min-width:500px) {
        position: sticky;
        top: 0px;
        background-color    :#212121 ;
        /* position: relative; */
    }

`

const Header = () => {

    const [showNav, setshowNav] = useState(0);

    const clickNav = () => {
        setshowNav(!showNav);
    }

    return (
        <HeaderStyled>
            <Nav showNav={showNav} clickNav={clickNav} />
            <HMenu showNav={showNav} clickNav={clickNav} />
        </HeaderStyled>
    )
}

export default Header