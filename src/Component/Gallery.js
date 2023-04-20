import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/gallery.css';

export const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 1800, // set autoplay speed to 3 seconds
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
        <div className='gallery-container'>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img9.JPG?updatedAt=1681952964991" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img8.jpg?updatedAt=1681952955339" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img1.jpeg?updatedAt=1681952900499" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img3.jpeg?updatedAt=1681952932445" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img4.jpeg?updatedAt=1681952932881" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img6.jpg?updatedAt=1681952954400" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/img7.JPG?updatedAt=1681952964592" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

