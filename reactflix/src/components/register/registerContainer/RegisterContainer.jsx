import React,{useContext, useEffect} from 'react'
import styled from 'styled-components'
import Register from '../Register'
import { pageContext } from '../../../Context/PageContext'

const DivContainer = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,.7);
    color: white;
    /* border: 1px solid dodgerblue; */
    border-radius: .5rem;
    z-index: 2;
    padding: 2rem;
    margin: 0 auto;
    max-width: 600px;
    width: 50%;
    color:whitesmoke;
`

const RegisterContainer = () => {
  const {actualPage} = useContext(pageContext)
  useEffect(() => {
    actualPage("REGISTER")
  }, [])
  
  return (
    <DivContainer>
      <Register/>
    </DivContainer>
  )
}

export default RegisterContainer