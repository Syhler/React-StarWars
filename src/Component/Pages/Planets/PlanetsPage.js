import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import queryString from "query-string";
import img from "../../../images/sample-1.jpg";
import {Link} from "react-router-dom";
import FetchApi from "../../../Services/FetchApi";
import PageCard from "../../Common/PageCard";

class PlanetsPage extends React.Component {

    api = new FetchApi()

    constructor(props) {
        super(props);
        this.state =
            {
                planets: [],
                page: 1,
                reachedEnd: false
            }
        this.nextPage = this.nextPage.bind(this)
    }

    async componentDidMount() {

        const data = await this.api.fetchPageData(
            "planets",
            this.state.page,
            true,
            index => index + 1 === 20 || index + 1 > 21)

        if (data === null) return

        this.setState({
            planets: data.results,
            reachedEnd: data.next === null,
        })
    }

    async nextPage() {

        const data = await this.api.fetchPageData(
            "planets",
            this.state.page + 1,
            true,
            index => index + 1 === 20 || index + 1 > 21)

        if (data === null) return

        this.setState(prevState => {
            return (
                {
                    planets: prevState.planets.concat(data.results),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }

    render() {

        const cards = this.state.planets.map((data, index) => {
            const id = data.url.match(/\d+/)[0]


            return (
                <PageCard data={data} key={id} type="planets"/>
            )
        })


        return (
            <div>
                <h1 className="text-primary">Planets Page</h1>

                <div className="row">
                    <InfiniteScroll
                        next={this.nextPage}
                        hasMore={!this.state.reachedEnd}
                        loader={<h6>I guess loading?</h6>}
                        dataLength={this.state.planets.length}
                    >

                        {cards}

                    </InfiniteScroll>
                </div>
            </div>
        )
    }

}

export default PlanetsPage