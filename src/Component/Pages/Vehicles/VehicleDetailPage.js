import React from "react";
import FetchApi from "../../../Services/FetchApi";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";
import VehicleProfileCard from "./VehicleProfileCard";
import LoadingAnimation from "../../Common/LoadingAnimation";

class VehicleDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pilots: [],
            films: [],
            vehicle: {},
            isLoading: true
        }
    }


    async componentDidMount() {
        const api = new FetchApi()

        const id = this.props.match.params.id
        const vehicle = await api.fetchAllData(id, "vehicles", true)

        const [pilots, films] = await Promise.all([
            await api.fetchCommonData(vehicle.pilots, "people"),
            await api.fetchCommonData(vehicle.films, "films")
        ])

        this.setState(
            {
                pilots: pilots,
                films: films,
                vehicle: vehicle,
                isLoading: false
            }
        )
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
                                <div className="col-md-12 mb-4">
                                    {this.state.pilots.length === 0 ? null :
                                        <ImageCarouselComponent
                                            title={"Pilots"}
                                            items={this.state.pilots}
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
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well">
                                <div className="row">
                                    <div className="col s12 m7">
                                        <VehicleProfileCard vehicle={this.state.vehicle}/>
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

export default VehicleDetailPage