import React from "react";
import img from "../../../images/sample-1.jpg";
import {Link} from "react-router-dom";

class StarshipCard extends React.Component {


    render() {

        const id = this.props.data.url.match(/\d+/)[0]

        return (
            <div className="col s4 m4 hoverable" key={this.props.data.name}>
                <div className="card ">
                    <div className="card-image">

                        <img src={this.props.data.img} style={{height: 237}}/>
                        <span className="card-title">{this.props.data.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.data.name} </p>
                        <p>has been in {this.props.data.films.length} films</p>
                    </div>
                    <div className="card-action">
                        <Link to={"/starships/" + id}>
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default StarshipCard