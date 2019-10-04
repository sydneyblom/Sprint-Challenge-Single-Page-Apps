import React from "react";
import styled from "styled-components";
const Div = styled.div`
width: 100%;
max-width: 350px;
padding: 4% 2%
margin: 0 auto;
margin-top: 5%
border-radius: 2%
box-shadow: 0 2px 7px; 
text-align: center;
`

const H2 = styled.h2`
`
const Img = styled.img`
box-shadow: 0 2px 7px; 
`

const Body = styled.p`
background-color: #E5E5E5;
box-shadow: 0 2px 7px; 
`

function CharacterCard({ character }) {
  return (
<Div>
      <H2>{character.name}</H2>
      <Img src={character.image} alt={character.name} />
        <p>  {character.species} </p>
        <p>  {character.status} </p>
        <p>  {character.gender} </p>


        </Div>

  )
}

export default CharacterCard;