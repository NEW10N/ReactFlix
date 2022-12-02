import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../../Context/UserContext'
import UseInput from '../../customHooks/UseInput'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import imageRegister from './../../images/claqueta.png'
import { Link } from 'react-router-dom'

const InputStyled = styled.input`
    /* background-color: #3664ba8e; */
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
    border: none;
    background-color: dodgerblue;
    text-align: center;
    height: 2.5rem;
    width: 80%;
    color: white;
    border-radius: .5rem;
    padding: .5rem;
    margin: 5px;

    @media (min-width: 500px) {
        width: 80%;
        max-width: 350px;
    }
`
const DivLinkStyled = styled(Link)`
margin: 5px;
font-size: 1.33rem;
font-family:Arial;
    background-color: dodgerblue;
    text-align: center;
    height: 2.5rem;
    width: 80%;
    color: white;
    border-radius: .5rem;
    padding: .5rem;
    text-decoration: none;

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
const Register = () => {
    document.title = "Reactflix - Register"
    const Navigate = useNavigate()

    const { user, modifyUser } = useContext(userContext)

    const name = UseInput("Name", "text", "C")
    const lastName = UseInput("Lastname", "text", "C")
    const password = UseInput("Password", "password", "1234")
    const valPassword = UseInput("Password", "password", "1234")

    const Register = (e) => {
        e.preventDefault()
        //Validacion de las contraseñas
        if (password.value === valPassword.value) {
            let validation = modifyUser({
                ...name.input,
                ...lastName.input,
                ...password.input,
                active: false,
                favoriteMovies: []
            })

            if (validation = 1) {
                console.log(user);
                name.value = ""
                lastName.value = ""
                password.value = ""
                valPassword.value = ""
                alert("The USERID has been created! Congratulations, enjoy it !!!")
                Navigate("/login")
            }
        } else {
            alert("Please check the passwords, there are not identical.")
        }
    }
    return (
        <>

            <h4>Register</h4>
            <hr />
            <DivCenterStyled>
                <img src={imageRegister} />
            </DivCenterStyled>
            <form onSubmit={Register}>
                <label name={name.name}>
                    {name.name}:
                    <br />
                    <InputStyled {...name} required autoComplete='off' />
                </label>
                <br />
                <label name={lastName.name}>
                    {lastName.name}:
                    <br />
                    <InputStyled {...lastName} required autoComplete='off' />
                </label>
                <br />
                <label name={password.name}>
                    {password.name}:
                    <br />
                    <InputStyled {...password} required autoComplete='off' />
                </label>
                <br />
                <label name={valPassword.name}>
                    {valPassword.name}:
                    <br />
                    <InputStyled {...valPassword} required autoComplete='off' />
                </label>
                <br />
                <DivCenterStyled>
                    <DivLinkStyled to="/login">
                        Login
                    </DivLinkStyled>
                    <InputButton>
                        Register
                    </InputButton>
                </DivCenterStyled>
            </form>
        </>
    )
}

export default Register