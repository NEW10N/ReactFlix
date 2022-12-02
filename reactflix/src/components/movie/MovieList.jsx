import React, {useEffect} from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
    // console.log(movies);
    return movies.map((movie,key) =>{
       return (<Movie movie={movie} key = {key} />)
    })
    
}

export default MovieList