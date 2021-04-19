/* import React from 'react';
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image'; */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const slideImages = [
    'IMG_2769.jpg', 'IMG_2795.jpg', 'IMG_2855.jpg', 'IMG_2852.jpg', 'IMG_2847.jpg', 'IMG_2841.jpg',
    'IMG_2830.jpg', 'IMG_2824.jpg', 'IMG_2818.jpg', 'IMG_2812.jpg', 'IMG_2806.jpg', 'IMG_2775.jpg',
    'IMG_2791.jpg', 'IMG_2789.jpg', 'IMG_2785.jpg', 'IMG_2782.jpg'];

/* function Gallery() {
    return (
        <div className="container-v1">
            <div className="background-div"></div>
            <div className="title-container">
                <h1 className="title-v1">Gallery</h1>
            </div>
            <div className="info-box">
            <div>
                <Slide>
                    <div>
                        <img className = "gal" src={process.env.PUBLIC_URL + slideImages[0]} alt="" />
                    </div>
                    <div>
                        <img className = "gal" src={process.env.PUBLIC_URL + slideImages[1]} alt="" />
                    </div>
                </Slide> 

            </div>

            </div>
        </div>
        );
    };
export default Gallery; */

class Gallery extends Component {
    render() {
        return (
            <div className="container-v1">
                <div className="background-div"></div>
                    <div className="title-container">
                        <h1 className="title-v1">Gallery</h1>
                    </div>
                        <div className="gallery-box">
                            <Carousel>
                                {/* <div>
                                    <img className = "gal" src={process.env.PUBLIC_URL + slideImages[0]} />
                                </div>

                                <div>
                                    <img className = "gal" src={process.env.PUBLIC_URL + slideImages[1]} />
                                </div>

                                <div>
                                    <img className = "gal" src={process.env.PUBLIC_URL + slideImages[2]} />
                                </div> */}

                                {slideImages.map((img, i) => 
                                    <div key={`slide ${i}`}>
                                        <img src={process.env.PUBLIC_URL + `/assets/images/Gallery/${img}`} alt="" />
                                    </div>
                                )}

                            </Carousel>
                        </div>
                    </div>
        );
    }
};

//ReactDOM.render(<Gallery />, document.querySelector('.demo-carousel'));
export default Gallery;