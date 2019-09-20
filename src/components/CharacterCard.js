import React from "react";





function CharacterCard({ character }) {
  return (
<div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
        <p>  {character.species} </p>
        <p>  {character.status} </p>
        </div>

  )
}

export default CharacterCard;