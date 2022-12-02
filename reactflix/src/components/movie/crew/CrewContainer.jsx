import axios from 'axios'
import React, {useEffect,useState} from 'react'
import PeopleList from '../peopleCards/PeopleList'

const CrewContainer = ({movieID}) => {
    // console.log(movieID)
    const key_TMDB = process.env.REACT_APP_API_KEY_TMDB
    const [crew, setCrew] = useState([])
    useEffect(() => {
      
      axios.get(`https://api.themoviedb.org/3/movie/${movieID?.id}/credits?api_key=${key_TMDB}&language=en-US&page=1`)
      .then(res=> setCrew(res.data))
    }, [movieID])
    
  return (
    <PeopleList people={crew?.crew} type={"crew"}/>
    // <></>
  )
}

export default CrewContainer