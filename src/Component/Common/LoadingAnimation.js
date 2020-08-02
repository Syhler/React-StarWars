import Loader from "react-loader-spinner";
import React from "react";

function LoadingAnimation()
{
    return (
        <div className="center-loading">
            <Loader type="Audio" color="#ada525" height="100" width="100"/>
        </div>
    )
}

export default LoadingAnimation