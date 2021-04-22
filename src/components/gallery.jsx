import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const slideImages = [
    'IMG_2769.jpg', 'IMG_2795.jpg', 'IMG_2855.jpg', 'IMG_2852.jpg', 'IMG_2847.jpg', 'IMG_2841.jpg',
    'IMG_2830.jpg', 'IMG_2824.jpg', 'IMG_2818.jpg', 'IMG_2812.jpg', 'IMG_2806.jpg', 'IMG_2775.jpg',
    'IMG_2791.jpg', 'IMG_2789.jpg', 'IMG_2785.jpg', 'IMG_2782.jpg'];

class Gallery extends Component {
    render() {
        return (
            <div className="container-v1">
                <div className="background-div"></div>
                    <div className="title-container">
                        <h1 className="title-v1">Gallery</h1>
                    </div>
                        {/* CSS for this is located in 'menu.css' -- Swat */}
                        <div className="gallery-box">
                            <Carousel>
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