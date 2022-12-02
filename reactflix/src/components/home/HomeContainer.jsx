import axios from 'axios'
import React, {useEffect,useState, useContext} from 'react'
import MovieList from '../movie/MovieList'
import styled from 'styled-components'
import {userContext} from '../../Context/UserContext'
import { pageContext } from '../../Context/PageContext'

const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
@media (min-width:500px) {
  width: 100%;
  height: 600px;
  object-fit: scale-down;
}
`
const HomeMovieContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`

const HomeContainer = () => {
    document.title = "Reactflix - Home"
    const {page, actualPage} = useContext(pageContext);
    const key_TMDB = process.env.REACT_APP_API_KEY_TMDB 
    const [homeMovies, setHomeMovies] = useState([])
    // const {user, getFavoriteMovies} = useContext(userContext)
    // let favoriteMovies
    // const random = parseInt((Math.random() * 20))
    useEffect(() => {
      actualPage("HOME")
      // favoriteMovies= getFavoriteMovies()
      // console.log(favoriteMovies);
      // axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key_TMDB}&language=en-US&page=1`)
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key_TMDB}&language=en-US&page=1`)
      .then((res) => setHomeMovies(res.data.results))
      
    }, [])
    // console.log(homeMovies)
  return (
    <HomeMovieContainerStyle>
      
    {/* <div>HomeContainer</div> */}
    {/* <ImgStyled src={`https://image.tmdb.org/t/p/w500/${homeMovies?.poster_path}`} alt="" /> */}
    <MovieList movies={homeMovies}/>
    </HomeMovieContainerStyle>
  )
}

export default HomeContainer