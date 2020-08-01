import React from 'react';
import './App.css';
import CustomHeader from "./Component/CustomHeader";
import mainContent from "./Component/MainContent";
import characterPage from "./Component/Pages/Character/CharacterPage"
import planetsPage from "./Component/Pages/Planets/PlanetsPage"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "materialize-css/dist/css/materialize.min.css"
import CharacterDetailPage from "./Component/Pages/Character/CharacterDetailPage";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlanetDetailPage from "./Component/Pages/Planets/PlanetDetailPage";
import StarshipsPage from "./Component/Pages/Spaceships/StarshipsPage";
import StarshipDetailPage from "./Component/Pages/Spaceships/StarshipDetailPage";


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
                            <Route path="/character/:id" component={CharacterDetailPage}/>

                            <Route path="/planets"  exact component={planetsPage}/>
                            <Route path="/planets/:id" component={PlanetDetailPage}/>

                            <Route path="/starships"  exact component={StarshipsPage}/>
                            <Route path="/starships/:id" component={StarshipDetailPage}/>

                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }

}

export default App;
