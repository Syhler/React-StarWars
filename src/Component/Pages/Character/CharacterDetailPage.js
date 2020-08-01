import React from "react";
import ImageCarouselComponent from "../../Common/ImageCarouselComponent";

class CharacterDetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            character: {},
            homeworld: {},
            films: [],
            species: [],
            vehicles: [],
            starships: []
        }
    }
    async componentDidMount() {

        const response = await fetch("https://swapi.dev/api/people/" + this.props.match.params.name)
        const data = await response.json()
        data.img = process.env.PUBLIC_URL + "/images/characters/" + this.props.match.params.name + ".jpg"

        const [homeworld, films, species, vehicles, starships] = await Promise.all(
            [
                await this.loadHomeWorld(data.homeworld),
                await this.loadFilms(data.films),
                await this.loadSpecies(data.species),
                await this.loadVehicles(data.vehicles),
                await this.loadStarships(data.starships)
            ]
        )

        console.log(species)

        this.setState(
            {
                character: data,
                homeworld: homeworld,
                films: films,
                species: species,
                vehicles: vehicles,
                starships: starships
            }
        )

    }

    async loadStarships(starships)
    {
        if (starships === undefined) return

        return Promise.all(await starships.map(async starship =>
        {

            const number = starship.match(/\d+/)[0]
            const response = await fetch("https://swapi.dev/api/starships/" + number)
            const data = await response.json()

            return {
                name: data.name,
                img: process.env.PUBLIC_URL + "/images/starships/" + number + ".jpg"
            }

        }))

    }

    async loadVehicles(vehicles)
    {
        if (vehicles === undefined) return

        return Promise.all(await vehicles.map(async vehicle =>{

            const number = vehicle.match(/\d+/)[0]
            const response = await fetch("https://swapi.dev/api/vehicles/" + number)
            const data = await response.json()

            return {
                name: data.name,
                img: process.env.PUBLIC_URL + "/images/vehicles/" + number + ".jpg"
            }

        }))

    }

    async loadSpecies(species) {
        if (species === undefined) return

        return Promise.all(await species.map(async specie => {
            const number = specie.match(/\d+/)[0]
            const response = await fetch("https://swapi.dev/api/species/" + number)
            const data = await response.json()

            return {
                name: data.name,
                img: process.env.PUBLIC_URL + "/images/species/" + number + ".jpg"

            }
        }))
    }

    async loadFilms(films) {
        if (films === undefined) return

        return Promise.all(await films.map(async film => {
            const number = film.match(/\d+/)[0]
            const response = await fetch("https://swapi.dev/api/films/" + number)
            const data = await response.json()

            return {
                name: data.title,
                img: process.env.PUBLIC_URL + "/images/films/" + number + ".jpg"
            }
        }))
    }

    async loadHomeWorld(url) {
        if (url === undefined) return

        const number = url.match(/\d+/)[0]

        const response = await fetch("https://swapi.dev/api/planets/" + number);
        const data = await response.json()


        return {
            name: data.name,
            img: process.env.PUBLIC_URL + "/images/planets/" + number + ".jpg"
        }
    }


    render() {
        console.log(this.state)

        return (
            <div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <ImageCarouselComponent
                                    title={"Home Planet"}
                                    desktopItems={1}
                                    items={[
                                        {
                                            name: this.state.homeworld.name,
                                            img: this.state.homeworld.img
                                        }
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 mb-4">
                                {this.state.species.length === 0 ? null
                                    :
                                    <ImageCarouselComponent
                                        title={"Species"}
                                        desktopItems={1}
                                        items={this.state.species}
                                    />
                                }

                            </div>
                            <div className="col-md-12 mb-4">
                                <ImageCarouselComponent
                                    title={"Films"}
                                    items={this.state.films}
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <ImageCarouselComponent
                                    title={"Vehicles"}
                                    items={this.state.vehicles}
                                />
                            </div>
                            <div className="col-md-12">
                                <ImageCarouselComponent
                                    title={"Starships"}
                                    items={this.state.starships}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="well">
                            <div className="row">
                                <div className="col s12 m7">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={this.state.character.img}/>
                                            <span className="card-title">{this.state.character.name}</span>
                                        </div>
                                        <div className="card-content">
                                            <div className="list-group">
                                                <div className="list-group-item">
                                                    <span className="left">Height:</span>
                                                    <span className="right">{this.state.character.height}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Weight (in kg):</span>
                                                    <span className="right">{this.state.character.mass}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Hair Color:</span>
                                                    <span className="right">{this.state.character.hair_color}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Skin Color:</span>
                                                    <span className="right">{this.state.character.skin_color}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Eye Color:</span>
                                                    <span className="right">{this.state.character.eye_color}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Birth Year:</span>
                                                    <span className="right">{this.state.character.birth_year}</span>
                                                </div>
                                            </div>
                                            <div className="list-group mt-1">
                                                <div className="list-group-item">
                                                    <span className="left">Gender:</span>
                                                    <span className="right">{this.state.character.gender}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default CharacterDetailPage