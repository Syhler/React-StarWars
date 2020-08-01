import React from "react";
import * as PropTypes from "prop-types";


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

FactBox.propTypes = {
    headline: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default FactBox