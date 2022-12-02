import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import RandomBackground from '../randomBackground/RandomBackground'

const BackgroundStyled = styled.div`
flex-grow: 1;
background-color: #212121;
color: white;
font-size: 3rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const Background = () => {
  return (
    <BackgroundStyled>
      <RandomBackground/>
        <Outlet/>
    </BackgroundStyled>
  )
}

export default Background