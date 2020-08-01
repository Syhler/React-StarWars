import ImageCard from "./ImageCard";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import React from "react";


function ImageCarouselComponent(props) {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: props.desktopItems === undefined ? 3 : props.desktopItems,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: props.desktopItems === undefined ? 2 : props.desktopItems,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const mappedItem = props.items.map((data, index) => {

        return <ImageCard key={index}
                          img={data.img}
                          name={data.name}
                          type={data.type}
                          id={data.id}
        />

    })

    return (
        <div className="">
            <div className="container">
                <h1 className="white-text">{props.title}</h1>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="pl-1"
                >
                    {mappedItem}

                </Carousel>
            </div>
        </div>

    )
}

export default ImageCarouselComponent