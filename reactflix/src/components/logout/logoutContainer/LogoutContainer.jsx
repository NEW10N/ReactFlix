import React, {useContext, useEffect} from 'react'
import RandomBackground from '../../randomBackground/RandomBackground'
import Logout from '../Logout'
import styled from 'styled-components'
import { pageContext } from '../../../Context/PageContext'

const LogoutContainerStyled = styled.div`
/* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const LogoutContainer = () => {
  const {actualPage} = useContext(pageContext)

  useEffect(() => {
    actualPage("LOGOUT")
  }, [])
  
  return (
    <LogoutContainerStyled>
    <RandomBackground/>
    <Logout/>
    </LogoutContainerStyled>
    
  )
}

export default LogoutContainer