import React, {useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import RegisterContainer from '../register/registerContainer/RegisterContainer'

const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`
const ImgStyled = styled.img`
position: absolute;
  max-width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`

const CoverImageStyle = styled.div`
    background-color: rgba(0,0,0,.3);
    height: 100%;
    width: 100vw;
    position: absolute;
    z-index: 1;
`

const RandomBackground = () => {

    const key_TMDB = process.env.REACT_APP_API_KEY_TMDB 
    const [homeMovies, setHomeMovies] = useState({})
    const random = parseInt((Math.random() * 20))

    useEffect(() => {      
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key_TMDB}&language=en-US&page=1`)
      .then((res) => setHomeMovies(res.data.results[random]))
      
    }, [])
    // console.log(homeMovies)

  return (
    <ContainerStyled>
    <ImgStyled src={`https://image.tmdb.org/t/p/original/${homeMovies?.backdrop_path}`} alt={homeMovies.title} />
    <CoverImageStyle></CoverImageStyle>
    </ContainerStyled>
  )
}

export default RandomBackground


