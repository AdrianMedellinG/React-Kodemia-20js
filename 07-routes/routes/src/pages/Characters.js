import React from 'react'
import PageTitle from "../components/PageTitle/PageTitle";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { useParams } from 'react-router-dom'


const Characters = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <PageTitle />
      <CharacterCard characterId={id} />
        
    </div>
  )
}

export default Characters