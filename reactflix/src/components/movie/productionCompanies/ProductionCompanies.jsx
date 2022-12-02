import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
    font-size: 1.5rem;
    border-radius: 3px;
    /* display: inline-block; */
    color: black;
    font-weight: bold;
    padding-bottom: 10px;
    max-width: 200px;
    height: 100px;
    margin: 5px;
    img{
      object-fit: contain;
      width: 100%;
      height: 90%;
      margin: 0px 5px 5px 5px;
    }
`

const ProductionCompanies = ({companies}) => {
  return companies?.map((company,key) => {
    // console.log(company)
    return(
      <Card key ={key}>
        {company?.name}
        <img src={`https://image.tmdb.org/t/p/w1280/${company?.logo_path}`} alt={company?.name} />
      </Card>
    )
  })
}

export default ProductionCompanies