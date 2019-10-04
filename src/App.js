import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";



import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
    <Header />
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/search" component={SearchForm} />
        </div>
        </main>
    )
}


