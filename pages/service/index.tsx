import { useState } from 'react'
import { Link } from "@nextui-org/react";
import Swiper from "@/components/swiper";
import MenuItem from '@/components/menuItem'
import { Input } from "@nextui-org/react";
import {
    SearchIcon,
} from "@/components/icons";

import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function Service() {

    const [current, setcurrent] = useState(0);
    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
    };
    const infoList = [{
        label: '门票预订',
    }, {
        label: '酒店名宿'
    }, {
        label: '古镇商城'
    }, {
        label: '景区导览'
    }, {
        label: '交通指南'
    }, {
        label: '景区停车场'
    }]
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div>
            <section>
                <Swiper></Swiper>
            </section>
            <section className="bg-[#692A1B]">
                <div className="max-w-7xl  mx-auto">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>

            <section className="bg-[#F5EDD0] ">
                <div className="max-w-7xl mx-auto p-4">
                    <div className='flex justify-between items-center mt-[60px] mb-[40px]'>
                        <div className='w-2/5 pl-14'>
                            <h1 className='text-[#482522] font-semibold text-lg tracking-[5px]'>Scenic spot publicity</h1>
                            <h1 className='text-[#80352F] font-semibold text-4xl tracking-[5px]'>古镇商城</h1>
                        </div>
                        <div className='w-full'>
                            <Input
                                aria-label="Search"
                                classNames={{
                                    inputWrapper: "bg-[#fff] p-5  h-[80px]",
                                    input: "ml-2 text-[24px]",
                                }}
                                endContent={
                                    <Button color="primary" className='bg-[#D44926] text-[22px] h-[64px] w-[188px]'>
                                        立即搜索
                                    </Button>
                                }
                                labelPlacement="outside"
                                placeholder="输入商品名称"
                                startContent={
                                    <SearchIcon className="text-base size-6  pointer-events-none flex-shrink-0" />
                                }
                                type="search"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3  gap-8 mt-[50px]">
                        {list.map((item, index) => (
                            <div className='cursor-pointer'>
                                <img className='rounded-[15px] w-[392px] h-[398px]' src="https://img.js.design/assets/img/6628c4d76712d63aadab2af3.jpg#ba8134feaecbe3c458a289f90dbc52eb" alt="" />
                                <div className='flex flex-col'>
                                    <h1 className='text-[#163235] text-[32px] font-bold mt-6'>青岩旅拍</h1>
                                    <h1 className='text-[#163235] text-[20px]  leading-[30px] mt-3'>青岩古镇旅拍no1，穿越千年的时空来到青岩，快来发现最美的自己！</h1>
                                    <div className='flex justify-between text-[#80352F] text-[20px]   mt-3'>
                                        <span>青岩杰出旅拍</span>
                                        <span className='ml-4 text-[#E6402E]  text-[32px] font-bold text-3xl'>￥ 38,800</span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
}
