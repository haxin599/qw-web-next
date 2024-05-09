import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import Slider from "react-slick";

import { Image } from "@nextui-org/react";
export default function Swiper({ bannerList = [1, 2, 3] }) {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <img src="/images/arrow-left.png" alt="Previous" />,
        nextArrow: <img src="/images/arrow-right.png" alt="Next" />,

    };
    return (
        <div className="slider-container" style={{ marginBottom: '-8px', marginTop: '-68px' }}>
            <Slider {...settings}>
                {bannerList.map((item, index) => (
                    <Image
                        width="100%"
                        radius="none"
                        alt="NextUI hero Image"
                        src="https://img.zcool.cn/community/01f8f95c1c48c0a8012029ac57a301.jpg@1280w_1l_2o_100sh.jpg"
                    />
                ))}
            </Slider>
        </div>
    );
}