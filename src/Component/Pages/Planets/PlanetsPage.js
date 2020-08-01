import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import queryString from "query-string";
import img from "../../../images/sample-1.jpg";
import {Link} from "react-router-dom";

class PlanetsPage extends React.Component {
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
        const parsed = queryString.parse(this.props.location.search);
        const page = parsed.page ?? 1

        const response = await fetch("https://swapi.dev/api/planets/?page=" + page)
        const data = await response.json();

        const dataWithImg = data.results.map((character, index) => {

            if (index + 1 === 20 || index + 1 > 21) {
                character.img = process.env.PUBLIC_URL + "/images/not-found-image-15383864787lu.jpg"
            } else {
                character.img = process.env.PUBLIC_URL + "/images/planets/" + (index + 1) + ".jpg"
            }

            return character
        })

        this.setState({
            planets: dataWithImg,
            reachedEnd: data.next === null,
            page: parseFloat(page),
        })
    }

    async nextPage() {

        const response = await fetch("https://swapi.dev/api/planets/?page=" + (this.state.page + 1))
        const data = await response.json();

        if (data.detail === "Not found") return

        const dataWithImg = data.results.map((character, index) => {
            const totalIndex = index + (this.state.page * 10)
            if (totalIndex + 1 === 20 || totalIndex + 1 > 21) {
                character.img = process.env.PUBLIC_URL + "/images/not-found-image-15383864787lu.jpg"
            } else {
                character.img = process.env.PUBLIC_URL +"/images/planets/" + (totalIndex + 1) + ".jpg"
            }
            return character
        })

        this.setState(prevState => {
            return (
                {
                    planets: prevState.planets.concat(dataWithImg),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }

    render() {

        const cards = this.state.planets.map((data, index) => {
            return (
                <div className="col s4 m4 hoverable" key={data.name}>
                    <div className="card ">
                        <div className="card-image">
                            <img src={data.img}/>
                            <span className="card-title">{data.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{data.name} has been in {data.films.length} films</p>
                            <p>{data.name} has a population of {data.population}</p>
                        </div>
                        <div className="card-action">
                            <Link to={"/planets/" + (index + 1)}>
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
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