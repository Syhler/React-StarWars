import React from "react";
import FactBox from "../../Common/FactBox";

function StarshipProfileCard(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.starship.img}/>
                <span className="card-title">{props.starship.name}</span>
            </div>
            <div className="card-content">
                <FactBox headline={"Model:"} value={props.starship.model}/>
                <FactBox headline={"Manufacturer:"} value={props.starship.manufacturer}/>
                <FactBox headline={"Cost in Credits:"} value={props.starship.cost_in_credits}/>
                <FactBox headline={"Length:"} value={props.starship.length}/>
                <FactBox headline={"Crew:"} value={props.starship.crew}/>
                <FactBox headline={"Passenger:"} value={props.starship.passengers}/>
                <FactBox headline={"Cargo Capacity:"} value={props.starship.cargo_capacity}/>
                <FactBox headline={"Consumables:"} value={props.starship.consumables}/>
                <FactBox headline={"Hyperdrive Rating:"} value={props.starship.hyperdrive_rating}/>
                <FactBox headline={"MGLT:"} value={props.starship.MGLT}/>
                <FactBox headline={"Starship Class:"} value={props.starship.starship_class}/>
            </div>
        </div>
    )
}

export default StarshipProfileCard