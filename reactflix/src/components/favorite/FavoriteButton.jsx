import React, { useContext, useEffect, useState } from 'react'
import { userContext } from "../../Context/UserContext";
import styled from 'styled-components';
import Start from './../../images/start.png'
import Startoff from './../../images/startoff.png'

const FavoriteStyled = styled.div`
    position: absolute;
    padding-right: 0.8rem;
    padding-top: 0.4rem;
    right: 0;
    width: 3.5rem;
    height: 3rem;
  
  img{
    width: 100%;
    height: 100%;
  }
`

const FavoriteButton = ({movie }) => {
  const { user, getActiveUser, toggleFavoriteMovie, getFavoriteMovies } = useContext(userContext)
  const activeUser = getActiveUser()
  const toggleeMovie = () => toggleFavoriteMovie(movie)
  // let favoriteMovies = []

  const [favoriteMovies, setFavoriteMovies] = useState([])


  useEffect(() => {
    let tmpfavoriteMovies = getFavoriteMovies()
    setFavoriteMovies(tmpfavoriteMovies)
  }, [user])
  // console.log(user);
  // console.log(activeUser);
  return (
    <div onClick={toggleeMovie}>
      <FavoriteStyled>
        <img src ={favoriteMovies.findIndex(element => element.id == movie.id) > -1? Start:Startoff }/>
      </FavoriteStyled>
    </div>
  )
}

export default FavoriteButton
