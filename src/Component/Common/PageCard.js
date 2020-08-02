import React from "react";
import img from "../../images/sample-1.jpg";
import {Link} from "react-router-dom";
import useMediaQuery from "react-responsive";

function PageCard(props) {
    const id = props.data.url.match(/\d+/)[0]

    let columnWidth = ""

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    const isMobile = useMediaQuery({
        query: '(max-width: 760px)'
    })

    if (isMobile === undefined) columnWidth = "s6 m6"
    else if (isTabletOrMobile === undefined) columnWidth = "s4 m4"
    else if (isDesktopOrLaptop === undefined) columnWidth = "s3 m3"


    return (
        //s4 m4

        <div className={"col " + columnWidth} key={props.data.name}>
            <Link to={"/" + props.type + "/" + id} style={{textDecoration: "none"}}>
                <div className="card hoverable">

                    <div className="card-image">

                        <img src={props.data.img} style={props.style} alt={"HERE HALLO"}/>
                        {props.type === "films" ?
                            <span className="card-title">{props.data.title}</span>
                            :
                            <span className="card-title">{props.data.name}</span>
                        }
                    </div>
                    <div className="card-content" style={{color: "black"}}>

                        {props.type === "films" ?
                            <p>{props.data.title}</p>
                            :
                            <p>{props.data.name}</p>

                        }

                        {props.type !== "films" ?
                            <p>has been in {props.data.films.length} films</p>
                            :
                            null
                        }
                    </div>
                    <div className="card-action">
                        <span style={{color: "#ffab40", textTransform: "uppercase"}}>Click to read more</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PageCard