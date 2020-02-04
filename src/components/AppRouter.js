import React from "react";
import {Route} from "react-router-dom";

import WelcomePage from "./WelcomePage";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";

const AppRouter = () => {
    return (
        <div>
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/search' component={SearchForm} />
            <Route exact path='/character' component={CharacterList} />
        </div>
    )
}

export default AppRouter;