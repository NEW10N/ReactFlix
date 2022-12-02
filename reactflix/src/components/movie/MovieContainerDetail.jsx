import axios from 'axios'
import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'
import { pageContext } from '../../Context/PageContext'

const MovieContainerDetail = ({}) => {
    const {actualPage} = useContext(pageContext)
    const {id} = useParams()
    const key_TMDB = process.env.REACT_APP_API_KEY_TMDB 
    const [movie, setMovie] = useState({})
    useEffect(() => {
      actualPage("DETAIL")
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key_TMDB}&language=en-US&page=1`)
      .then(res => setMovie(res.data))
    }, [])


  return (
    <MovieDetail movie = {movie}/>
  )
}

export default MovieContainerDetail