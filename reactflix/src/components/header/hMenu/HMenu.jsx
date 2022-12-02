import React from 'react'
import styled from 'styled-components'

const HMenuStyled = styled.div`
    border: 2px solid gray;
    border-radius:15px;
    height: 28px;
    width: 28px;
    text-align: center;
    z-index: 3;

    @media (min-width: 500px) {
        display: none;
    }
`
const HMenu = ({showNav,clickNav}) => {

const clickBtnH = ()=>{
    clickNav()
}
  return (
    <HMenuStyled onClick={clickBtnH}>{!showNav?"H":"X"}</HMenuStyled>
  )
}

export default HMenu