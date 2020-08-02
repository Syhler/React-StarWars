import React from "react";
import FactBox from "../../Common/FactBox";

function SpeciesProfileCard(props)
{
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.specie.img}/>
                <span className="card-title">{props.specie.name}</span>
            </div>
            <div className="card-content">
                <FactBox headline={"Name:"} value={props.specie.name}/>
                <FactBox headline={"Classification:"} value={props.specie.classification}/>
                <FactBox headline={"Designation:"} value={props.specie.designation}/>
                <FactBox headline={"Average Height:"} value={props.specie.average_height}/>
                <FactBox headline={"Skin Colors:"} value={props.specie.skin_colors}/>
                <FactBox headline={"Hair Colors:"} value={props.specie.hair_colors}/>
                <FactBox headline={"Eye Colors:"} value={props.specie.eye_colors}/>
                <FactBox headline={"Average Lifespan:"} value={props.specie.average_lifespan}/>
                <FactBox headline={"Language:"} value={props.specie.language}/>
            </div>
        </div>
    )
}

export default SpeciesProfileCard