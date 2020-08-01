import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchApi from "../../../Services/FetchApi";
import img from "../../../images/sample-1.jpg";
import {Link} from "react-router-dom";
import StarshipCard from "./StarshipCard";


class StarshipsPage extends React.Component
{
    api = new FetchApi()


    constructor(props) {
        super(props);

        this.state = {
            starships: [],
            reachedEnd: false,
            page: 1
        }
        this.nextPage = this.nextPage.bind(this)

    }

    async componentDidMount() {
        const data = await this.api.fetchPageDataStarshipFix("starships", this.state.page)

        this.setState(
            {
                starships: data.results,
                reachedEnd: data.next === null
            }
        )

    }

    async nextPage()
    {
        const data = await this.api.fetchPageDataStarshipFix("starships", this.state.page+1)

        this.setState( prevState =>
        {
            return(
                {
                    starships: prevState.starships.concat(data.results),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        }

        )
    }


    render()
    {
        const cards = this.state.starships.map((data, index) => {

            const id = data.url.match(/\d+/)[0]

            return (
               <StarshipCard key={id} data={data}/>
            )
        })


        return (
            <div>
                <h1 className="text-primary">Starships</h1>

                <div className="row">
                    <InfiniteScroll
                        next={this.nextPage}
                        hasMore={!this.state.reachedEnd}
                        loader={<h6>I guess loading?</h6>}
                        dataLength={this.state.starships.length}
                    >
                        {cards}

                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}


export default StarshipsPage