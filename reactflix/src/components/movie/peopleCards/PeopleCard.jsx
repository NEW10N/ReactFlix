import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
  background-color: white;
    font-size: 1.5rem;
    border-radius: 3px;
    /* display: inline-block; */
    color: black;
    font-weight: bold;
    padding-top: 5px;
    min-width: 200px;
    width: 200px;
    height: 300px;
    margin: 5px;
    text-align: center;
    display: inline-block;
    img{
      object-fit: contain;
      /* width: 100%; */
      /* height: 86%; */
      height: ${(props) => props?.type == 'cast' ? "80%" : "90%"};
      border-radius: 50%;
      /* margin: 0px 5px 5px 5px; */
    }
`

const CharacterNameStyled = styled.div`
display: ${(props) => props.type == 'cast' ? "block" : "none"};
    color: ${(props) => props.type == 'cast' ? "dodgerblue" : "none"};
`

const PeopleCard = ({ person, type }) => {

    return (
        <Card type={type}>
            <div>Name: {person?.name}</div>
            <img src={`https://image.tmdb.org/t/p/w1280/${person?.profile_path}`} alt={person?.name} />
            <CharacterNameStyled type={type}>
                {type == 'cast' ? person?.character : ""}
            </CharacterNameStyled>
        </Card>
    )
}

export default PeopleCard