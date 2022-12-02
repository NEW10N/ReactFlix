import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import UseInput from '../../customHooks/UseInput';
import { userContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import ImageLogin from './../../images/stormtrooper.png'

const LoginStyled = styled.div`
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
const InputStyled = styled.input`
    /* background-color: #3664ba8d; */
    background-color: white;
    height: 2.5rem;
    width: 90%;
    color: black;
    margin-left: 5%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid dodgerblue;
    border-radius: .5rem;
    padding: .5rem;
`
const InputButton = styled.button`
    background-color: dodgerblue;
    text-align: center;
    height: 2.5rem;
    width: 80%;
    color: white;
    border-radius: .5rem;
    padding: .5rem;

    @media (min-width: 500px) {
        width: 80%;
        max-width: 350px;
    }
`

const DivCenterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;

    img{
        max-width: 10rem;
    }
`

const Login = () => {
  document.title = "Reacflix - Login"
  const { user, modifyUser, getActiveUser, activateUser } = useContext(userContext)
  // console.log(user)
  const name = UseInput("Name", "text", "")
  const password = UseInput("Password", "password", "")
  const activeUser = getActiveUser()
  const Navigate = useNavigate()

  useEffect(() => {
    console.log("activeUser", activeUser)
    if (activeUser != null) {
      Navigate("/")
    }
  }, [user])


  const validateLogin = (e) => {
    e.preventDefault()
    activateUser(name.value, password.value)
  }


  return (
    <LoginStyled>
      <h4>Login</h4>
      <hr />
      <DivCenterStyled>
        <img src={ImageLogin}/>
      </DivCenterStyled>
      <form onSubmit={validateLogin}>
        <label name={name.name}>
          {name.name}:
          <br />
          <InputStyled {...name} required autoComplete='off' />
        </label>
        <br />
        <label name={password.name}>
          {password.name}:
          <br />
          <InputStyled {...password} required autoComplete='off' />
        </label>
        <br />
        <DivCenterStyled>
          <InputButton>Login</InputButton>
        </DivCenterStyled>
      </form>
    </LoginStyled>
  )
}

export default Login;

