import React from "react";
import ImageCarouselComponent from "./ImageCarouselComponent";


class PlanetsCarouselContainer extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }



    async componentDidMount()
    {

        /*
        const number = this.props.urls.map(url => {
            const numbers = url.match(/\d+/)

            let tempNumber = 0

            for (let i = 0; i < numbers.length; i++) {
                tempNumber += numbers[i]
            }
            return tempNumber
        })

         */
    }


    render() {


        return(
            <ImageCarouselComponent
                title={"Planets"}
                desktopItems={1}
                items={[
                    {
                        name: "Sand Crawler",
                        img: process.env.PUBLIC_URL + "/images/characters/4.jpg"
                    },
                    {
                        name: "Sand Crawler",
                        img: process.env.PUBLIC_URL + "/images/characters/3.jpg"
                    }
                ]}
            />
        )

    }
}

export default PlanetsCarouselContainer