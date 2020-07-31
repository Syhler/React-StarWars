import React from 'react';
import './App.css';
import CustomHeader from "./Component/CustomHeader";
import mainContent from "./Component/MainContent";
import characterPage from "./Component/Pages/CharacterPage"
import planetsPage from "./Component/Pages/PlanetsPage"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "materialize-css/dist/css/materialize.min.css"
import CharacterDetailPage from "./Component/Pages/CharacterDetailPage";


class App extends React.Component {

    constructor() {
        super();

    }

    render() {

        return (
            <Router>
                <div className="app bg-picture">
                    <CustomHeader data={this.state} onTabChangeHandler={this.onTabChangeHandler}/>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={mainContent}/>
                            <Route path="/character" exact component={characterPage}/>
                            <Route path="/planets" component={planetsPage}/>
                            <Route path="/character?page=" exact component={characterPage}/>
                            <Route path="/character/:name" component={CharacterDetailPage}/>
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }

}

export default App;
