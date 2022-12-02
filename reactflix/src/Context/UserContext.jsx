import React, { useState, useEffect } from 'react'
import { createContext } from "react";

export const userContext = createContext()

const { Provider } = userContext;


const UserContext = ({ children }) => {

    const [user, setUser] = useState([
        // {
        //     Name: "Cesar",
        //     LastName: "Castro",
        //     Password: "1234",
        //     active: true,
        //     favoriteMovies: []
        // }
    ])

    // useEffect(() => {
    //   getActiveUser()
    // }, [user])



    const modifyUser = (newData) => {
        console.log(newData);
        let userExist = user.findIndex(element => {
            return element.Name = newData.Name
        })

        if (userExist >= 0) {
            console.log("Existe");
        } else {
            console.log("No existe")
            let copyUser = JSON.parse(JSON.stringify(user))
            copyUser.push(newData)
            // console.log(copyUser)
            setUser(copyUser)
            // setUserSession(newData)
            return 1
        }

    }

    const getActiveUser = () => {
        const activeUser = user.filter(element => {
            return element.active == true
        })

        if (activeUser.length) {
            // console.log(activeUser);
            return activeUser[0]
            
        } else {
            return null
        }
    }

    const activateUser = (username, password) => {
        let userFound = user.findIndex((element) => element.Name === username && element.Password === password)
        // console.log(userFound)
        if (userFound > -1) {
            let copyUser = JSON.parse(JSON.stringify(user))
            copyUser[userFound]["active"] = true
            setUser(copyUser)
        }
    }

    const desActivateUser = (username) => {
        let userFound = user.findIndex((element) => element.Name === username)
        // console.log(userFound)
        if (userFound > -1) {
            let copyUser = JSON.parse(JSON.stringify(user))
            copyUser[userFound]["active"] = false
            setUser(copyUser)
        }
    }

    // const toggleUserSession = () =>{
    //     sessionStorage.setItem("ID",newData.name)
    // }
    // const logOut = (newData) =>{
    //     sessionStorage.setItem("ID",newData.name)
    // }

    const toggleFavoriteMovie = (movieID) => {
        let copyUser = JSON.parse(JSON.stringify(user))

        //ID del usuario activo
        let indexActiveUser = copyUser.findIndex(element => element.active == true)
        // console.log(indexActiveUser)

        if (indexActiveUser > -1) {//User exist
            let existFavoriteMovie = copyUser[indexActiveUser].favoriteMovies.findIndex(element => {
                return element.id == movieID.id
            })
            if (existFavoriteMovie > -1) {
                copyUser[indexActiveUser].favoriteMovies.splice(existFavoriteMovie,1)
                // console.log(copyUser)
                setUser(copyUser)
            }else{
                copyUser[indexActiveUser].favoriteMovies.push(movieID);
                // console.log(copyUser)
                setUser(copyUser)
            }
        } 
        // console.log(copyUser.favoriteMovies);

        // console.log(existFavoriteMovie);
        // if (existFavoriteMovie.length > 0){
        //     console.log("Existe");
        // }else{
        //     console.log("No existe")
        //     copyUser.favoriteMovies.push(movieID)
        //     setUser(copyUser)
        // }
    }

    const getFavoriteMovies = () => {
        let existUser = user.filter(user => user.active == true)
        // console.log(user)
        // console.log(existUser);
        if (existUser.length > 0) {
            // console.log("existe")
            return existUser[0].favoriteMovies
        }else{
            return[]
        }
    }

    const userData = {
        user,
        modifyUser,
        getActiveUser,
        activateUser,
        desActivateUser,
        toggleFavoriteMovie,
        getFavoriteMovies
    }

    return (
        <Provider value={userData} >{children}</Provider>
    )
}

export default UserContext;


