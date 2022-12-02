import React from 'react'
import styled from 'styled-components'
import FavoriteButton from '../favorite/FavoriteButton'
import CastContainer from './cast/CastContainer'
import CrewContainer from './crew/CrewContainer'
import MovieGenres from './genres/MovieGenres'
import ProductionCompanies from './productionCompanies/ProductionCompanies'

const ImgStyled = styled.img`
    width:100%;
    height: 100%;    
    object-fit: cover;
    object-position: top;
`
const ImgContainerStyled = styled.div`
    /* width:100%; */
    height: 500px;
    position: relative;
`
const InfoContainer = styled.div`
    padding: 10px;
    width: 100%;
    background-image:linear-gradient(transparent,rgba(33,33,33,1));
    flex-grow: 1;
    position: absolute;
    bottom: 0px;
    /* height: 50px; */
    display: flex;
    justify-content: space-between;
`
const MovieTitle = styled.h1`
    color: white;
    font-size: 5rem;
    font-family: cursive;
    margin-top: -10px;
    margin-right:20px;
    font-weight: 100;
`
const TextStyled = styled.div`
color:white ;
margin-top: 10px;
padding: 10px;
font-size: 2rem;
text-align: justify;
font-family: fantasy;

@media (min-width: 500px) {
        padding: 2rem;
    }
`
const GrayIcon = styled.div`
  background-color: gray;
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
const RowDirection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const RowDirectionScroll = styled.div`
    height: 330px;
    overflow-y: scroll;
    display: inline-flex;
    width: 100%;
`
const TitleStyled = styled.h2`
    color: dodgerBlue;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`
const MovieDetail = ({ movie }) => {
    // console.log(movie)
    // console.log(movie?.genres);
    return (
        <>

            {/* Image container */}
            <ImgContainerStyled>
                <div>
                    <FavoriteButton movie={movie} />
                </div>
                <ImgStyled src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`} alt={movie?.title} />
                {/* Genres */}
                <InfoContainer>
                    <MovieTitle>{movie?.title}</MovieTitle>
                    <div>
                        <GrayIcon>
                            {movie?.runtime} min
                        </GrayIcon>
                        <MovieGenres genres={movie?.genres} />
                    </div>
                </InfoContainer>
            </ImgContainerStyled>

            <TextStyled>
                {movie?.overview}
            </TextStyled>
            {/* Cast */}
            <TextStyled>
                <TitleStyled>Cast</TitleStyled>
                <RowDirectionScroll>
                    <CastContainer movieID={movie?.id} />
                </RowDirectionScroll>
            </TextStyled>
            <br />
            {/* Crew */}
            <TextStyled>
                <TitleStyled>Crew</TitleStyled>
                <RowDirectionScroll>
                    <CrewContainer movieID={movie} />
                </RowDirectionScroll>
            </TextStyled>
            <br />

            {/* Producer Companies */}
            <TextStyled>
                <TitleStyled>Production Companies</TitleStyled>
                <RowDirection>
                    <ProductionCompanies companies={movie?.production_companies} />
                </RowDirection>
            </TextStyled>
        </>
    )
}

export default MovieDetail