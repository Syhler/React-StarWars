import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import SpeciesProfileCard from "./SpeciesProfileCard";
import LoadingAnimation from "../../Common/LoadingAnimation";

class SpeciesDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                specie: {},
                homeworld: [],
                people: [],
                films: [],
                isLoading: true

            }

    }

    async componentDidMount() {
        const api = new FetchApi()

        const id = this.props.match.params.id
        const specie = await api.fetchAllData(id, "species", true)

        const [people, films, homeworld] = await Promise.all([
            await api.fetchCommonData(specie.people, "people"),
            await api.fetchCommonData(specie.films, "films"),
            await api.fetchCommonData([specie.homeworld], "planets")
        ])

        this.setState({
            specie: specie,
            people: people,
            films: films,
            homeworld: homeworld,
            isLoading: false
        })
    }

    render() {

        return (
            <div>
                {this.state.isLoading ?
                    <LoadingAnimation/>
                    :
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

                                <div className="col-md-12 mb-4">
                                    {this.state.films.length === 0 ? null :
                                        <ImageCarouselComponent
                                            title={"Films"}
                                            items={this.state.films}
                                        />
                                    }

                                </div>
                                <div className="col-md-12 mb-4">
                                    {this.state.people.length === 0 ? null :
                                        <ImageCarouselComponent
                                            title={"Characters"}
                                            items={this.state.people}
                                        />
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well">
                                <div className="row">
                                    <div className="col s12 m7">
                                        <SpeciesProfileCard specie={this.state.specie}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )

    }

}

export default SpeciesDetailPage