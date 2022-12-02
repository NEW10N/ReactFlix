import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FavoriteButton from '../favorite/FavoriteButton'
import { userContext } from '../../Context/UserContext'


const CardStyled = styled.div`
background-color: dodgerBlue;
/* background-color: white; */
width: 100%;
max-width: 350px;
/* height: 300px; */
border-radius: 5px;
padding: .1rem;
margin: .5rem;
text-align: center;
color: white;
/* color: black; */
font-weight: bold;

div{
  text-decoration:none;
font-family: sans-serif;
font-weight: 100;
}
img{
  margin-top:.3rem;
    width: 95%;
    object-fit: contain;
    border-radius: 5px;
}

@media (min-width:500px) {
  min-width: 200px;
  max-width: 250px;
  font-size: 2rem;
}

`
const RelativeDivStyled = styled.div`
  position: relative;
`
const Movie = ({ movie }) => {
  const {user, getActiveUser} = useContext(userContext)
  const activeUser = getActiveUser()
  // console.log(activeUser)

  return (  
    <RelativeDivStyled>
      {activeUser != null &&<FavoriteButton movieID={movie?.id} movie ={movie}/>}
      {/* <FavoriteButton movieID={movie?.id} movie ={movie}/> */}
      <Link to={activeUser != null? `/movie/${movie.id}`:``}>
        <CardStyled>
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </CardStyled>
      </Link>
    </RelativeDivStyled>
  )
}

export default Movie