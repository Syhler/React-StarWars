import React from 'react';
import './App.css';
import CustomHeader from "./Component/CustomHeader";
import mainContent from "./Component/MainContent";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "materialize-css/dist/css/materialize.min.css"
import CharacterDetailPage from "./Component/Pages/Character/CharacterDetailPage";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PlanetDetailPage from "./Component/Pages/Planets/PlanetDetailPage";
import StarshipDetailPage from "./Component/Pages/Spaceships/StarshipDetailPage";
import DefaultPage from "./Component/Common/DefaultPage";
import VehicleDetailPage from "./Component/Pages/Vehicles/VehicleDetailPage";
import FilmDetailPage from "./Component/Pages/Films/FilmDetailPage";
import SpeciesDetailPage from "./Component/Pages/Species/SpeciesDetailPage";


class App extends React.Component {

    render() {

        return (
            <Router>
                <div className="app bg-picture">
                    <CustomHeader data={this.state} onTabChangeHandler={this.onTabChangeHandler}/>
                    <div className="container">
                        <Switch>
                            {/*MAIN PAGE*/}
                            <Route path="/" exact component={() => {
                                return <DefaultPage header={"Characters"} type={"people"} route={"character"}/>
                            }}/>

                            {/*CHARACTER*/}
                            <Route path="/character" exact component={() => {
                                return <DefaultPage header={"Characters"} type={"people"} route={"character"}/>
                            }}/>
                            <Route path="/character/:id" component={CharacterDetailPage}/>

                            {/*PLANETS*/}
                            <Route path="/planets"  exact component={() =>
                            {
                                return <DefaultPage header={"Planets"} type={"planets"} route={"planets"}/>
                            }}/>
                            <Route path="/planets/:id" component={PlanetDetailPage}/>

                            {/*STARSHIPS*/}
                            <Route path="/starships"  exact component={() =>
                            {
                                return <DefaultPage header={"Starships"} type={"starships"} route={"starships"}/>
                            }}/>
                            <Route path="/starships/:id" component={StarshipDetailPage}/>

                            {/*VEHICLES*/}
                            <Route path="/vehicles" exact component={() => {
                                return <DefaultPage header={"Vehicles"} type={"vehicles"} route={"vehicles"}/>
                            }}/>
                            <Route path="/vehicles/:id" component={VehicleDetailPage}/>


                            {/*FILMS*/}
                            <Route path="/films" exact component={() =>{
                                return <DefaultPage header={"Films"} type={"films"} route={"films"}/>
                            }}/>
                            <Route path="/films/:id" component={FilmDetailPage}/>


                            {/*SPECIES*/}
                            <Route path="/species" exact component={() =>{
                                return <DefaultPage header={"Species"} type={"species"} route={"species"}/>
                            }}/>
                            <Route path="/species/:id" component={SpeciesDetailPage}/>


                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }

}

export default App;
