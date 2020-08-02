import React from "react";
import FactBox from "../../Common/FactBox";

function FilmProfileCard(props)
{
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.film.img} alt={"HERE HALLO"}/>
                <span className="card-title">{props.film.title}</span>
            </div>
            <div className="card-content">
                <FactBox headline={"Title:"} value={props.film.title}/>
                <FactBox headline={"Epiosde:"} value={props.film.episode_id}/>
                <FactBox headline={"Opening Crawl:"} value={props.film.opening_crawl}/>
                <FactBox headline={"Director:"} value={props.film.director}/>
                <FactBox headline={"Producer:"} value={props.film.producer}/>
                <FactBox headline={"Release Date:"} value={props.film.release_date}/>
            </div>
        </div>
        
    )
}

export default FilmProfileCard