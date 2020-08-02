import React from "react";
import img from "../images/star-wars-seeklogo.com.svg"

import {Link} from "react-router-dom";

class CustomHeader extends React.Component {

    render() {
        return (
            <div>
                <nav className="nav-extended blue-grey darken-3">
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li>
                                <img src={img} className="logo" alt={"some text here"}/>
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
                                <Link to="/starships">
                                    SpaceShips
                                </Link>
                            </li>
                            <li className="tab">
                                <Link to="/vehicles">
                                    Vehicles
                                </Link>
                            </li>
                            <li className="tab">
                                <Link to="/films">
                                    Films
                                </Link>
                            </li>
                            <li className="tab">
                                <Link to="/species">
                                    Species
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default CustomHeader

