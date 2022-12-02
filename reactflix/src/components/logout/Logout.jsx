import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import UseInput from '../../customHooks/UseInput';
import { userContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import Drama from './../../images/drama.png'
// const  = styled.div`
//     position: absolute;
//     background-color: #212121;
//     color: white;
//     border: 1px solid #740101;
//     border-radius: .5rem;
//     z-index: 2;
//     padding: 1rem;
//     margin: 0 auto;
//     min-width: 70%;
// `

const LogoutStyled = styled.div`
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

// const LogoutButtonStyled = styled.button`
//   background-color: red;
//   color: white;
//   font-size: 2rem;
// `

const LogoutButtonStyled = styled.button`
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

const Logout = () => {
  const { user, modifyUser, getActiveUser, desActivateUser } = useContext(userContext)
  // console.log(user)
  const name = UseInput("name", "text", "")
  const password = UseInput("password", "password", "")
  const activeUser = getActiveUser()
  const Navigate = useNavigate()

  useEffect(() => {
    if (activeUser == null) {
      Navigate("/login")
    }
  }, [user])

  const logout = () => {
    const activeUser = getActiveUser()
    desActivateUser(activeUser.Name)
    alert("See you next time !!!")
  }

  // const validateLogin = (e) =>{
  //     e.preventDefault()
  //     activateUser(name.value,password.value)
  // }


  return (
    <LogoutStyled>
        <h4>Logout</h4>
        <hr/>
        <DivCenterStyled>
          <img src={Drama}/>
        </DivCenterStyled>
      <DivCenterStyled>
        <LogoutButtonStyled onClick={logout}>
          LogOut
        </LogoutButtonStyled>
      </DivCenterStyled>
    </LogoutStyled>
  )
}

export default Logout;

