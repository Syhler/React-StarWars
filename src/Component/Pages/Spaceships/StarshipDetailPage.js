import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import FactBox from "../../Common/FactBox";
import StarshipProfileCard from "./StarshipProfileCard";

class StarshipDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state =
            {
                starship: {},
                pilots: [],
                films: []
            }
    }


    async componentDidMount() {
        const api = new FetchApi()

        const id = this.props.match.params.id
        const starship = await api.fetchAllData(id, "starships", true)

        const [pilots, films] = await Promise.all([
            await api.fetchCommonData(starship.pilots, "people"),
            await api.fetchCommonData(starship.films, "films")
        ])

        this.setState(
            {
                starship: starship,
                pilots: pilots,
                films: films
            }
        )
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <ImageCarouselComponent
                                title={"Pilots"}
                                items={this.state.pilots}
                            />
                        </div>

                        <div className="col-md-12 mb-4">
                            <ImageCarouselComponent
                                title={"Films"}
                                items={this.state.films}
                            />
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="well">
                        <div className="row">
                            <div className="col s12 m7">
                                <StarshipProfileCard starship={this.state.starship}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StarshipDetailPage