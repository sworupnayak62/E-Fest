import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/gallery.css';

export const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                <div>
                    <img src="https://via.placeholder.com/400x300/f06/fff/?text=1" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/f63/fff/?text=2" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/fc3/fff/?text=3" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/693/fff/?text=4" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/3cc/fff/?text=5" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/369/fff/?text=6" alt="" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300/936/fff/?text=7" alt="" />
                </div>
            </Slider>
        </div>
    );
};

