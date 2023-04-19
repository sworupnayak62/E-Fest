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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 3000, // set autoplay speed to 3 seconds
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
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/nsrgvmehl/bizTank.png?updatedAt=1681888533626" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

