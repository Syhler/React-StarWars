import React from "react";
import {Link} from "react-router-dom";


function ImageCard(props) {

    return (

        <Link to="meh">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.img}/>
                </div>
                <div className="card-body blue-grey darken-3">
                    <h6 className="white-text">{props.name}</h6>
                </div>
            </div>
        </Link>

    )
}


export default ImageCard