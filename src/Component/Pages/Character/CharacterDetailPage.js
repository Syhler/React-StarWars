import React from "react";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import FetchApi from "../../../Services/FetchApi";
import CharacterProfileCard from "./CharacterProfileCard";

class CharacterDetailPage extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            character: {},
            homeworld: [],
            films: [],
            species: [],
            vehicles: [],
            starships: []
        }
    }
    async componentDidMount() {

        const api = new FetchApi()

        const id = this.props.match.params.id
        const character = await api.fetchAllData(id,"people", true)


        //fetch data from all other types
        const [homeworld, films, species, vehicles, starships] = await Promise.all(
            [
                await api.fetchCommonData([character.homeworld], "planets"),
                await api.fetchCommonData(character.films, "films"),
                await api.fetchCommonData(character.species, "species"),
                await api.fetchCommonData(character.vehicles, "vehicles"),
                await api.fetchCommonData(character.starships, "starships")
            ]
        )

        this.setState(
            {
                character: character,
                homeworld: homeworld,
                films: films,
                species: species,
                vehicles: vehicles,
                starships: starships
            }
        )
    }

    render() {

        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <ImageCarouselComponent
                                    title={"Home Planet"}
                                    desktopItems={1}
                                    items={this.state.homeworld}
                                />
                            </div>
                            <div className="col-md-6 mb-4">
                                {this.state.species.length === 0 ? null
                                    :
                                    <ImageCarouselComponent
                                        title={"Species"}
                                        desktopItems={1}
                                        items={this.state.species}
                                    />
                                }

                            </div>
                            <div className="col-md-12 mb-4">
                                {this.state.films.length === 0 ? null :
                                    <ImageCarouselComponent
                                        title={"Films"}
                                        items={this.state.films}
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
                            <div className="col-md-12">
                                {this.state.starships === 0 ? null :
                                    <ImageCarouselComponent
                                        title={"Starships"}
                                        items={this.state.starships}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="well">
                            <div className="row">
                                <div className="col s12 m7">
                                    <CharacterProfileCard character={this.state.character}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default CharacterDetailPage