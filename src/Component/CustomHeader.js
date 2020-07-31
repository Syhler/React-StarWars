import React from "react";
import img from "../images/star-wars-seeklogo.com.svg"

import {Link} from "react-router-dom";

class CustomHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <nav className="nav-extended blue-grey darken-3">
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li>
                                <img src={img} className="logo"/>
                            </li>
                            <li className="tab">
                                <Link to="/character">
                                    Characters
                                </Link>
                            </li>
                            <li className="tab">
                                <Link to="/planets">
                                    Planets
                                </Link>
                            </li>
                            <li className="tab">
                                <a>SpaceShips</a>
                            </li>
                            <li className="tab">
                                <a>Vehicles</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default CustomHeader

