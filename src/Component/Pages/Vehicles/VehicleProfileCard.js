import React from "react";
import FactBox from "../../Common/FactBox";

function VehicleProfileCard(props)
{

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.vehicle.img}/>
                <span className="card-title">{props.vehicle.name}</span>
            </div>
            <div className="card-content">
                <FactBox headline={"Model:"} value={props.vehicle.model}/>
                <FactBox headline={"Manufacturer:"} value={props.vehicle.manufacturer}/>
                <FactBox headline={"Cost In Credits:"} value={props.vehicle.cost_in_credits}/>
                <FactBox headline={"Length:"} value={props.vehicle.length}/>
                <FactBox headline={"Max Atmosphering Speed:"} value={props.vehicle.max_atmosphering_speed}/>
                <FactBox headline={"Crew:"} value={props.vehicle.crew}/>
                <FactBox headline={"Passengers:"} value={props.vehicle.passengers}/>
                <FactBox headline={"Cargo Capacity:"} value={props.vehicle.cargo_capacity}/>
                <FactBox headline={"Consumables:"} value={props.vehicle.consumables}/>
                <FactBox headline={"Vehicle Class:"} value={props.vehicle.vehicle_class}/>
            </div>
        </div>

    )

}

export default VehicleProfileCard