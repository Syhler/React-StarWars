import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string"
import img from "../../../images/sample-1.jpg"
import InfiniteScroll from "react-infinite-scroll-component";

class CharacterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                characters: [],
                page: 1,
                reachedEnd: false,
            }

        this.nextPage = this.nextPage.bind(this)
    }

    async componentDidMount() {

        const parsed = queryString.parse(this.props.location.search);

        const page = parsed.page ?? 1

        const response = await fetch("https://swapi.dev/api/people/?page=" + page)
        const data = await response.json();

        const dataWithImg = data.results.map((character, index) => {
            character.img = "/images/characters/" + (index + (index < 17 ? 1 : 2)) + ".jpg"
            return character
        })

        this.setState({
            characters: dataWithImg,
            reachedEnd: data.next === null,
            page: parseFloat(page),
        })

    }

    async nextPage() {

        const response = await fetch("https://swapi.dev/api/people/?page=" + (this.state.page + 1))
        const data = await response.json();

        if (data.detail === "Not found") return


        const dataWithImg = data.results.map((character, index) => {

            const totalIndex = index + (this.state.page * 10)

            character.img = "/images/characters/" + ((totalIndex + (totalIndex < 16 ? 1 : 2) )) + ".jpg"
            return character
        })

        this.setState(prevState => {
            return (
                {
                    characters: prevState.characters.concat(dataWithImg),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }
    render() {

        return (
            <div>
                <h1 className="text-primary">Character page</h1>
                <div className="row">

                    <InfiniteScroll
                        next={this.nextPage}
                        hasMore={!this.state.reachedEnd}
                        loader={<h6>I guess loading??...</h6>}
                        dataLength={this.state.characters.length}
                    >
                        {this.state.characters.map((data, index) => {
                            return (
                                <div className="col s4 m4 hoverable" key={data.name}>
                                    <div className="card ">
                                        <div className="card-image">
                                            <img src={process.env.PUBLIC_URL + data.img}/>
                                            <span className="card-title">{data.name}</span>
                                        </div>
                                        <div className="card-content">
                                            <p>{data.name}has been in {data.films.length} films</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to={"/character/" + (index + (index < 17 ? 1 : 2))}>
                                                Read more
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default CharacterPage


/*
 <Link to={"/character?page=" + (this.state.page + 1)}>
                    <button style={disabledReachedEnd} onClick={this.nextPage} >Next</button>
                </Link>

                <br/>
                <Link to={"/character?page=" + (this.state.page -1)}>
                    <button style={disabledReachedStart} onClick={this.backPage}>Back</button>
                </Link>
 */