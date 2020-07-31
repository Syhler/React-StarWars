import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string"
import img from "../../images/sample-1.jpg"
import InfiniteScroll from "react-infinite-scroll-component";

class CharacterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                characters: [],
                page: 1,
                reachedEnd: false,
                length: 82
            }

        this.nextPage = this.nextPage.bind(this)
    }

    async componentDidMount() {

        const parsed = queryString.parse(this.props.location.search);

        const page = parsed.page ?? 1

        const response = await fetch("https://swapi.dev/api/people/?page=" + page)
        const data = await response.json();
        this.setState({
            characters: data.results,
            reachedEnd: data.next === null,
            page: parseFloat(page),
        })


        console.log(parsed)

    }

    async nextPage() {

        console.log(this.state.page + 1)

        const response = await fetch("https://swapi.dev/api/people/?page=" + (this.state.page + 1))
        const data = await response.json();



        if (data.detail === "Not found") return

        this.setState(prevState => {
            return (
                {
                    characters: prevState.characters.concat(data.results),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }
/*
    async backPage() {
        const response = await fetch("https://swapi.dev/api/people/?page=" + (this.state.page - 1))
        const data = await response.json();

        if (data.detail === "Not found") return

        this.setState(prevState => {
            return (
                {
                    characters: data.results,
                    page: prevState.page - 1,
                    reachedStart: data.previous === null,
                    reachedEnd: data.next === null
                }
            )
        })
    }
 */

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
                                <div className="col s4 m4" key={data.name}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={img}/>
                                            <span className="card-title">{data.name}</span>
                                        </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of
                                                information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to={"/character/" + (index + 1 + ((this.state.page - 1) * 10))}>
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