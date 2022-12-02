import React from 'react'
import styled from 'styled-components'

const GenreIcon = styled.div`
  background-color: dodgerblue;
    font-size: 1.5rem;
    border-radius: 11px;
    display: inline-block;
    padding: 3px 10px 3px 10px;
    color: white;
    font-weight: bold;
    margin-right: 10px;
    max-height: 25px;
    margin-top: 10px;
`

const MovieGenres = ({genres}) => {
  return genres?.map((genre,key) => {
    // console.log(genre)
    return(
      <GenreIcon key ={key}>
        {genre?.name}
      </GenreIcon>
    )
  })
}

export default MovieGenres