import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from "@nextui-org/react";
export default function Swiper() {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image
                        width="100%"
                        radius="none"
                        alt="NextUI hero Image"
                        src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                    />
                </div>
                <div>
                    <Image
                        width="100%"
                        radius="none"
                        alt="NextUI hero Image"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    />
                </div>
            </Slider>
        </div>
    );
}