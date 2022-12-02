import axios from 'axios'
import React, {useEffect,useState} from 'react'
import PeopleList from '../peopleCards/PeopleList'

const CastContainer = ({movieID}) => {
    // console.log(movieID)
    const key_TMDB = process.env.REACT_APP_API_KEY_TMDB
    const [cast, setCast] = useState([])
    useEffect(() => {
      // if (movieID != undefined ){
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${key_TMDB}&language=en-US&page=1`)
      .then(res=> setCast(res.data))
    // }
    }, [movieID])

  return (
    <PeopleList people={cast.cast} type={"cast"}/>
    // <></>
  )
}

export default CastContainer