import React from "react";


function FactBox(props) {
    return (
        <div className="list-group mt-1">
            <div className="list-group-item">
                <span className="left">{props.headline}</span>
                <span className="right">{props.value}</span>
            </div>
        </div>
    )
}


export default FactBox