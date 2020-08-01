import React from "react";
import FactBox from "../../Common/FactBox";

function CharacterProfileCard(props)
{
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.character.img}/>
                <span className="card-title">{props.character.name}</span>
            </div>
            <div className="card-content">

                <FactBox headline={"Height:"} value={props.character.height}/>
                <FactBox headline={"Weight (in kg):"} value={props.character.mass}/>
                <FactBox headline={"Hair Color:"} value={props.character.hair_color}/>
                <FactBox headline={"Skin Color:"} value={props.character.skin_color}/>
                <FactBox headline={"Eye Color:"} value={props.character.eye_color}/>
                <FactBox headline={"Birth Year:"} value={props.character.birth_year}/>
                <FactBox headline={"Gender:"} value={props.character.gender}/>


            </div>
        </div>
    )
}

export default CharacterProfileCard