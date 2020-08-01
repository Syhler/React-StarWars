import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";

class PlanetDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: {},
            residents: [],
            films: [],

        }
    }

    async componentDidMount() {
        const api = new FetchApi()

        const id = this.props.match.params.id
        const isWithImage = !(id === 20 || id > 21)
        const planet = await api.fetchAllData(id, "planets", isWithImage)

        console.log(planet)

        const [residents, films] = await Promise.all(
            [
                await api.fetchCommonData(planet.residents, "people"),
                await api.fetchCommonData(planet.films, "films")
            ]
        )

        this.setState(
            {
                planet: planet,
                residents: residents,
                films: films
            }
        )


    }


    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <ImageCarouselComponent
                                    title={"Films"}
                                    items={this.state.films}
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <ImageCarouselComponent
                                    title={"Residents"}
                                    items={this.state.residents}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="well">
                            <div className="row">
                                <div className="col s12 m7">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={this.state.planet.img}/>
                                            <span className="card-title">{this.state.planet.name}</span>
                                        </div>
                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Rotation Period:</span>
                                                <span className="right">{this.state.planet.rotation_period}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Orbital Period:</span>
                                                <span className="right">{this.state.planet.orbital_period}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Diameter:</span>
                                                <span className="right">{this.state.planet.diameter}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Climate:</span>
                                                <span className="right">{this.state.planet.climate}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Gravity</span>
                                                <span className="right">{this.state.planet.gravity}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Terrain:</span>
                                                <span className="right">{this.state.planet.terrain}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Surface Water:</span>
                                                <span className="right">{this.state.planet.surface_water}</span>
                                            </div>
                                        </div>

                                        <div className="list-group mt-1">
                                            <div className="list-group-item">
                                                <span className="left">Population:</span>
                                                <span className="right">{this.state.planet.population}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanetDetailPage