import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { userContext } from '../../Context/UserContext'
const MainStyled = styled.main`
    flex-grow: 1;
    background-color: #212121;
    width: 100vw;
    font-size: 3rem;
`

const Main = () => {
    
    const {user, toggleUser} = useContext(userContext);
    // console.log(user)
    // console.log(toggleUser);
    
    return (
        <MainStyled>
            <Outlet />
        </MainStyled>
    )
}

export default Main