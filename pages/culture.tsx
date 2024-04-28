import { useState } from 'react'

import DefaultLayout from "@/layouts/default";
import Swiper from "@/components/swiper";
import Cards from '@/components/card'

import styles from '../styles/Culture.module.css';

import { Link } from "@nextui-org/react";


export default function Home() {
    const [current, setcurrent] = useState(0);
    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
    };
    const infoList = [{
        label: '历史文化',
    }, {
        label: '民俗文化'
    }, {
        label: '状元文化'
    }, {
        label: '名人文化'
    }, {
        label: '饮食文化'
    }, {
        label: '宗教文化'
    }, {
        label: '军事文化'
    }, {
        label: '建筑文化'
    }]

    return (
        <DefaultLayout>
            <section>
                <Swiper></Swiper>
            </section>
            <section className="bg-692A1B">
                <div className="container mx-auto">
                    <div class="grid grid-cols-4 xl:grid-cols-8 gap-4 p-4">
                        {infoList.map((item, index) => (
                            <div className="flex items-center col-span-1" >
                                <div onClick={() => handleClick(index)} className={`${styles.tab} flex justify-center items-center text-2xl cursor-pointer font-medium ${index === current ? '' : styles.active}`}>
                                    {item.label}
                                </div>

                                {index !== infoList.length - 1 && <div className={`${styles.line} ml-8`} />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Cards position="left" />
            <Cards position="right" />
        </DefaultLayout >
    );
}
