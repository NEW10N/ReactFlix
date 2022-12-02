import React from 'react'
import PeopleCard from './PeopleCard'

const PeopleList = ({people,type}) => {
  // console.log(people)
  return people?.map((person,key)=>{
    // console.log(person);
    return <PeopleCard person={person} key={key} type={type}/>
  })
}

export default PeopleList