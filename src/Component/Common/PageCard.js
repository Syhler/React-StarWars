import React from "react";
import img from "../../images/sample-1.jpg";
import {Link} from "react-router-dom";

function PageCard(props) {
    const id = props.data.url.match(/\d+/)[0]

    return (
        <div className="col s4 m4 hoverable" key={props.data.name}>
            <div className="card ">
                <div className="card-image">

                    <img src={props.data.img} style={props.style}/>
                    {props.type === "films" ?
                        <span className="card-title">{props.data.title}</span>
                        :
                        <span className="card-title">{props.data.name}</span>
                    }
                </div>
                <div className="card-content">

                    {props.type === "films" ?
                        <p>{props.data.title} ({id})</p>
                        :
                        <p>{props.data.name} ({id})</p>

                    }

                    {props.type !== "films" ?
                        <p>has been in {props.data.films.length} films</p>
                        :
                        null
                    }
                </div>
                <div className="card-action">
                    <Link to={"/" + props.type + "/" + id}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default PageCard