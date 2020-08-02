import React from "react";
import {Link} from "react-router-dom";


function ImageCard(props) {


    const type = props.type === "people" ? "character" : props.type

    const link = "/" + type + "/" + props.id

    return (
        <Link to={link}>
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.img} alt={"HERE HALLO"}/>
                </div>
                <div className="card-body blue-grey darken-3">
                    <h6 className="white-text">{props.name}</h6>
                </div>
            </div>
        </Link>

    )
}


export default ImageCard