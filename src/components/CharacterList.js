import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList () {
  const [characterList, setCharacterList] = useState ([])

  const getCharacterList = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacterList(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getCharacterList();
}, []);

return (
  <section className="character-list grid-view">
    {characterList.map(character => (
      <CharacterCard key={character.name} character={character} />
    ))}
  </section>
);
}
export default CharacterList;