import React from "react";
import Header from "./components/Header.js";

import { Route } from 'react-router-dom';

// import CharacterList from './CharacterList';
// import LocationsList from './LocationsList';
// import WelcomePage from './WelcomePage';
// import SearchForm from './SearchForm';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
            <Route path="/locations" component={LocationsList} />
            <Route path="/search" component={SearchForm} />
        </div>
    )
}

export default App;
