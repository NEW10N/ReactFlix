import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react'
import { userContext } from '../../Context/UserContext'
import Movie from '../movie/Movie';
import MovieList from './../movie/MovieList'
import styled from 'styled-components';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import { pageContext } from '../../Context/PageContext';

const FavoriteContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`

const FavoriteList = () => {
    document.title = "Reactflix - Favorites"
    const { user, getFavoriteMovies } = useContext(userContext);
    const {actualPage} = useContext(pageContext)
    let favoriteMovies = getFavoriteMovies()

    useEffect(() => {
        actualPage("FAVORITES")
    }, [])
    
    // const [dataMovies, setDataMovies] = useState([])
    // let movies = MoviesById(favoriteMovies)

    // useEffect(() => {
    //     console.log(movies)
    //     setDataMovies(movies)
    // }, [user])
    // console.log(dataMovies);
    return(
        <FavoriteContainerStyled>
            <MovieList movies={favoriteMovies}/>
        </FavoriteContainerStyled>
    )
}

export default FavoriteList