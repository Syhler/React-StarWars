import React from "react";
import img from "../../../images/sample-1.jpg"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

class CharacterDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {}
        }
    }

    async componentDidMount() {
        const response = await fetch("https://swapi.dev/api/people/" + this.props.match.params.name)

        const data = await response.json()

        console.log(data)
    }


    render() {
        console.log(this.props.match)
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <div>
                <div className="row">

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="well blue">
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <h1 className="display-4">Fluid jumbotron</h1>
                                            <p className="lead">This is a modified jumbotron that occupies the entire
                                                horizontal space of its parent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="well blue">
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <h1 className="display-4">Fluid jumbotron</h1>
                                            <p className="lead">This is a modified jumbotron that occupies the entire
                                                horizontal space of its parent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="well grey">
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <h1 className="display-4">Fluid jumbotron</h1>
                                            <p className="lead">This is a modified jumbotron that occupies the entire
                                                horizontal space of its parent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="well grey">
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <h1 className="display-4">Fluid jumbotron</h1>
                                            <p className="lead">This is a modified jumbotron that occupies the entire
                                                horizontal space of its parent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="well  blue-grey darken-1">
                                        <div className="container">
                                            <h1>Starships</h1>
                                            <Carousel
                                                swipeable={false}
                                                draggable={false}
                                                showDots={true}
                                                responsive={responsive}
                                                ssr={true} // means to render carousel on server-side.
                                                infinite={false}
                                                keyBoardControl={true}
                                                customTransition="all .5"
                                                transitionDuration={500}
                                                containerClass="carousel-container"
                                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                                deviceType={this.props.deviceType}
                                                dotListClass="custom-dot-list-style"
                                                itemClass="pl-1"
                                            >

                                                <div className="card" >
                                                    <div className="card-image">
                                                        <img src={process.env.PUBLIC_URL + "/images/characters/4.jpg"}/>
                                                        <span className="card-title">Sand Crawler</span>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-image">
                                                        <img src={process.env.PUBLIC_URL + "/images/characters/3.jpg"}/>
                                                        <span className="card-title">Snowspeeder</span>
                                                    </div>
                                                </div>

                                                <div className="card" >
                                                    <div className="card-image">
                                                        <img src={process.env.PUBLIC_URL + "/images/characters/2.jpg"}/>
                                                        <span className="card-title">T-16 skyhopper</span>
                                                    </div>
                                                </div>

                                                <div className="card" >
                                                    <div className="card-image">
                                                        <img src={process.env.PUBLIC_URL + "/images/characters/1.jpg"}/>
                                                        <span className="card-title">X-34 landspeeder</span>
                                                    </div>
                                                </div>

                                            </Carousel>


















                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="well  blue-grey darken-3">
                            <div className="row">
                                <div className="col s12 m7">
                                    <div className="card" style={{height: 1100}}>
                                        <div className="card-image">
                                            <img src={img}/>
                                                <span className="card-title">Card Title</span>
                                        </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of
                                                information.
                                                I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">

                </div>
            </div>
        )
    }

}


export default CharacterDetailPage