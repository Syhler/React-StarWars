import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import PlanetsProfileCard from "./PlanetsProfileCard";

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
                                    <PlanetsProfileCard planet={this.state.planet}/>
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