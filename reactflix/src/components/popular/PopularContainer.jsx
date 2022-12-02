import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import MovieList from '../movie/MovieList'
import styled from 'styled-components'
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

const PopularContainer = () => {
  document.title = "Reactflix - Popular"
  const {actualPage} = useContext(pageContext)
  const key_TMDB = process.env.REACT_APP_API_KEY_TMDB
  const [homeMovies, setHomeMovies] = useState([])
  // const random = parseInt((Math.random() * 20))
  useEffect(() => {
    actualPage("POPULAR")
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key_TMDB}&language=en-US&page=1`)
      .then((res) => setHomeMovies(res.data.results))

  }, [])
  // console.log(homeMovies)
  return (
    <HomeMovieContainerStyle>
      <MovieList movies={homeMovies} />
    </HomeMovieContainerStyle>
  )
}


export default PopularContainer
