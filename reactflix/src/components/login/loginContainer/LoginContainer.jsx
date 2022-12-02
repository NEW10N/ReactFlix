import React,{useContext, useEffect} from 'react'
import RandomBackground from '../../randomBackground/RandomBackground'
import Login from '../Login'
import styled from 'styled-components'
import { pageContext } from '../../../Context/PageContext'

const LoginContainerStyled = styled.div`
/* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const LoginContainer = () => {
  const {actualPage} = useContext(pageContext)
  useEffect(() => {
    actualPage("LOGIN")
  }, [])
  
  return (
    <LoginContainerStyled>
    <RandomBackground/>
    <Login/>
    </LoginContainerStyled>
    
  )
}

export default LoginContainer