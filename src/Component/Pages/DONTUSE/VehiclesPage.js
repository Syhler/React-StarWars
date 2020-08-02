import React from "react";
import FetchApi from "../../../Services/FetchApi";
import PageCard from "../../Common/PageCard";
import InfiniteScroll from "react-infinite-scroll-component";

/*
vehicle: {},
            pilots: [],
            films: []
 */

class VehiclesPage extends React.Component
{
    api = new FetchApi()

    constructor(props) {
        super(props);

        this.state = {
            vehicles: [],
            reachedEnd: false,
            page: 1
        }
        this.nextLoading = this.nextLoading.bind(this)
    }

    async componentDidMount()
    {
        const data = await this.api.fetchPageDataVehicleFix("vehicles", this.state.page)

        this.setState( {
            vehicles: data.results,
            reachedEnd: data.next === null
        })
    }

    async nextLoading()
    {
        const data = await this.api.fetchPageDataVehicleFix("vehicles", this.state.page + 1)

        this.setState(prevState => {

            return(
                {
                    vehicles: prevState.vehicles.concat(data.results),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }

    render() {
        const cards = this.state.vehicles.map((data, index) => {

            const id = data.url.match(/\d+/)[0]

            return (
                <PageCard type="vehicles" key={id} data={data}/>
            )
        })

        return (
            <div>
                <h1 className="text-primary">Vehicles</h1>

                <div className="row">
                    <InfiniteScroll
                        next={this.nextLoading}
                        hasMore={!this.state.reachedEnd}
                        loader={<h6>I guess loading?</h6>}
                        dataLength={this.state.vehicles.length}
                    >
                        {cards}

                    </InfiniteScroll>
                </div>
            </div>
        )
    }

}

export default VehiclesPage