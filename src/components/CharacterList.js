import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";



function CharacterList (props) {
  const welcomeButton = event => {
    event.preventDefault();
    props.history.push("/");
  };
  const [characterList, setCharacterList] = useState ([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const getCharacterList = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacterList(response.data.results);

        })
        .catch(error => {
          console.error(error);
        });
    }
  
    getCharacterList();
  }, []);

  useEffect(() => {
    if (search !== '') {
      let _searchResults = characterList.filter(char => (
        char.name.search(search) !== -1 ||
        char.gender.search(search) !== -1 ||
        char.species.search(search) !== -1 ||
        char.status.search(search) !== -1
      ));
      setSearchResults(_searchResults);
    } else {
      setSearch('');
      setSearchResults([]);
    }
    return () => {
    };
  }, [search])

  const charList = (searchResults.length > 0 ? searchResults : characterList);
  return (
    <>
        <h2>Character List</h2>

    <SearchForm
				search={search}
				setSearch={setSearch}
			/>
    <section className="character-list grid-view">
      {charList.map(character => (
        <CharacterCard key={character.name} character={character} />
      ))}
      
    </section>
    <button onClick={welcomeButton} className="md-button shop-button">
    Home
  </button>
  </>
  );
  }
  export default CharacterList;