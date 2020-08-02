import React from "react";
import FactBox from "../../Common/FactBox";

function PlanetsProfileCard(props)
{

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.planet.img} alt={"should be here"}/>
                <span className="card-title">{props.planet.name}</span>
            </div>

            <div className="card-content">
                <FactBox headline={"Rotation Period:"} value={props.planet.rotation_period}/>
                <FactBox headline={"Orbital Period:"} value={props.planet.orbital_period}/>
                <FactBox headline={"Diameter"} value={props.planet.diameter}/>
                <FactBox headline={"Climate:"} value={props.planet.climate}/>
                <FactBox headline={"Gravity:"} value={props.planet.gravity}/>
                <FactBox headline={"Terrain"} value={props.planet.terrain}/>
                <FactBox headline={"Surface Water:"} value={props.planet.surface_water}/>
                <FactBox headline={"Population:"} value={props.planet.population}/>
            </div>

        </div>
    )
}

export default PlanetsProfileCard