import React from "react";
import FetchApi from "../../Services/FetchApi";
import PageCard from "./PageCard";
import InfiniteScroll from "react-infinite-scroll-component";
import * as PropTypes from "prop-types";

class DefaultPage extends React.Component
{
    api = new FetchApi()

    constructor(props) {
        super(props);

        this.state = {
            objects: [],
            reachedEnd: false,
            page: 1
        }

        this.nextLoading = this.nextLoading.bind(this)

    }

    async componentDidMount()
    {
        const data = await this.api.fetchPageData(this.props.type, this.state.page)

        this.setState(
            {
                objects: data.results,
                reachedEnd: data.next === null
            }
        )
    }

    async nextLoading()
    {
        const data = await this.api.fetchPageData(this.props.type, this.state.page + 1)

        this.setState(prevState => {
            return (
                {
                    objects: prevState.objects.concat(data.results),
                    page: prevState.page + 1,
                    reachedEnd: data.next === null
                }
            )
        })
    }

    render() {

        const cards = this.state.objects.map(data => {

            const id = data.url.match(/\d+/)[0]

            return (
                <PageCard type={this.props.route} key={id} data={data}/>
            )

        })

        return(
            <div>
                <h1 className="text-primary">{this.props.header}</h1>

                <div className="row">
                    <InfiniteScroll
                        next={this.nextLoading}
                        hasMore={!this.state.reachedEnd}
                        loader={<h6>I guess loading?</h6>}
                        dataLength={this.state.objects.length}
                    >
                        {cards}

                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

DefaultPage.propTypes = {
    header: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};

export default DefaultPage