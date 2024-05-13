import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import Slider from "react-slick";

import { Image } from "@nextui-org/react";
export default function Swiper({ bannerList }) {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        arrows: true,

        prevArrow: <img src="/images/arrow-left.png" alt="Previous" />,
        nextArrow: <img src="/images/arrow-right.png" alt="Next" />,

    };
    //console.log('bannerList===', bannerList)
    return (
        <div className="slider-container" style={{ marginBottom: '-8px', marginTop: '-68px' }}>
            <Slider {...settings}>
                {bannerList.map((item, index) => (
                    <Image
                        key={index}
                        width="100%"
                        radius="none"
                        alt="Next Image"
                        src={item.picture}
                    />
                ))}

            </Slider>
        </div>
    );
}