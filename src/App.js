import React from "react";
import Header from "./components/Header.js";


import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/search" component={SearchForm} />
        </div>
    )
}


