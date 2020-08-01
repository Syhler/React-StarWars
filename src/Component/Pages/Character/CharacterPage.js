import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string"
import img from "../../../images/sample-1.jpg"
import InfiniteScroll from "react-infinite-scroll-component";
import FetchApi from "../../../Services/FetchApi";
import PageCard from "../../Common/PageCard";

class CharacterPage extends React.Component {

    api = new FetchApi()

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

        const data = await this.api.fetchPageData(
            "people",
            this.state.page,
            false)

        const dataWithImg = data.results.map((character, index) => {
            character.img = process.env.PUBLIC_URL + "/images/people/" + (index + (index < 17 ? 1 : 2)) + ".jpg"
            return character
        })

        this.setState({
            characters: dataWithImg,
            reachedEnd: data.next === null,
        })

    }

    async nextPage() {


        const data = await this.api.fetchPageData(
            "people",
            this.state.page + 1,
            false)

        const dataWithImg = data.results.map((character, index) => {
            const totalIndex = index + (this.state.page * 10)
            character.img = "/images/people/" + ((totalIndex + (totalIndex < 16 ? 1 : 2))) + ".jpg"
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

        const cards = this.state.characters.map((data, index) => {

            const id = data.url.match(/\d+/)[0]

            return (
              <PageCard data={data} key={id} type={"people"}/>
            )
        })

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
                        {cards}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default CharacterPage
