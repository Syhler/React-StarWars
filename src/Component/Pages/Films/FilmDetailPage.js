import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import StarshipProfileCard from "../Spaceships/StarshipProfileCard";
import FilmProfileCard from "./FilmProfileCard";

class FilmDetailPage extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                film: {},
                starships: [],
                characters: [],
                planets: [],
                vehicles: []
            }
    }

    async componentDidMount()
    {
        const api = new FetchApi()

        const id = this.props.match.params.id
        const film = await api.fetchAllData(id, "films", true)

        const [characters, starships, planets, vehicles] = await Promise.all([
            await api.fetchCommonData(film.characters, "people"),
            await api.fetchCommonData(film.starships, "starships"),
            await api.fetchCommonData(film.planets, "planets"),
            await api.fetchCommonData(film.vehicles, "vehicles"),
        ])

        this.setState({
            film: film,
            starships: starships,
            characters: characters,
            planets: planets,
            vehicles: vehicles
        })
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            {this.state.characters.length === 0 ? null :
                                <ImageCarouselComponent
                                    title={"Characters"}
                                    items={this.state.characters}
                                />
                            }
                        </div>

                        <div className="col-md-12 mb-4">
                            {this.state.planets.length === 0 ? null :
                                <ImageCarouselComponent
                                    title={"Planets"}
                                    items={this.state.planets}
                                />
                            }
                        </div>

                        <div className="col-md-12 mb-4">
                            {this.state.starships.length === 0 ? null :
                                <ImageCarouselComponent
                                    title={"Starships"}
                                    items={this.state.starships}
                                />
                            }
                        </div>

                        <div className="col-md-12 mb-4">
                            {this.state.vehicles.length === 0 ? null :
                                <ImageCarouselComponent
                                    title={"Vehicles"}
                                    items={this.state.vehicles}
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="well">
                        <div className="row">
                            <div className="col s12 m7">
                                <FilmProfileCard film={this.state.film}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilmDetailPage