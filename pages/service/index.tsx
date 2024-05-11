import { useState } from 'react'
import { Link } from "@nextui-org/react";
import MenuItem from '@/components/menuItem'
import { Input } from "@nextui-org/react";
import {
    SearchIcon,
} from "@/components/icons";

import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';


const Content = ({ current }) => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    if (current === 0) {
        return (
            <section className="bg-[#F5EDD0] ">
                <div className="max-w-7xl mx-auto p-4">
                    <div className='flex justify-between items-center mt-[60px] mb-[40px]'>
                        <div className='w-2/5 pl-14'>
                            <h1 className='text-[#482522] font-semibold text-lg tracking-[5px]'>Scenic spot publicity</h1>
                            <h1 className='text-[#80352F] font-semibold text-4xl tracking-[5px]'>古镇商城</h1>
                        </div>
                        <div className='w-full h-[65px] bg-[#fff] ml-8 rounded flex items-center p-7'>
                            <img src="/images/weather.png" className='w-[38px] h-[32px]' />
                            <span className="text-[#D44926] text-[20px] tracking-[10px] font-black ml-4">青岩古镇</span>
                            <span className="text-[#D44926] text-[20px] tracking-[10px] ml-8">多云 23°~30°</span>
                        </div>
                    </div>
                    <div className="flex  p-6">
                        <div className="w-full md:w-1/2">
                            <img className='w-[628px] h-[591px]' src="/images/test.png" />

                        </div>
                        <div className="w-full md:w-1/2 p-6" >
                            <h1 className="text-4xl text-[#D44926]">今日开放</h1>
                            <p className="text-[#D44926] mt-5 tracking-[5px] text-2xl">
                                <span className="text-[#692A1B]">开始时间：</span>
                                <span>21：00</span>
                            </p>
                            <p className="text-[#D44926] mt-5 tracking-[5px] text-2xl">
                                <span className="text-[#692A1B]">结束时间：</span>
                                <span>21：00</span>
                            </p>
                            <p className="text-[#692A1B] mt-5 text-[18px] leading-[35px] tracking-[5px]">
                                <span className="text-[#692A1B] text-2xl">景区简介：</span>
                                <span>               在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                                    教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                                    的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存
                                </span>
                            </p>

                        </div>
                    </div>

                    <div className="flex  p-6">
                        <div className="grid grid-cols-2  gap-[60px]">
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col  w-[570px] h-[368px]  p-[30px]  bg-[url('/images/code-bg-1.png')] bg-cover" >
                                    <div className="text-[32px] font-medium text-[#F66F4D] flex items-center">
                                        <img src="/images/code-title-1.png" className='w-[38px] h-[32px]' />
                                        <span className="ml-7">散票预定</span>
                                    </div>
                                    <div className="text-xl tracking-[5px] font-semibold mt-5 text-[#fff]">
                                        打开微信扫描下方二维码或微信搜索xxxxxxx进去票务预订
                                    </div>
                                    <div className="flex justify-between  w-[218px] h-[108px] p-[10px] bg-[#fff] rounded-[10px] mt-auto ml-auto">
                                        <div className="flex-1 mr-4 flex flex-col items-center justify-around">
                                            <h1 className="text-[#2D3134 text-[20px] font-medium">扫码购票</h1>
                                            <h1 className="text-[#5B5F62] text-xs text-center">打开微信扫描右方二维码</h1>
                                        </div>
                                        <img src="/images/title-code-2.png" className='w-[90px] h-[90px]' />
                                    </div>
                                </div>

                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col w-[570px]  h-[368px] p-[30px]  bg-[url('/images/code-bg-2.png')] bg-cover" >
                                    <div className="text-[32px] font-medium text-[#F66F4D] flex items-center">
                                        <img src="/images/code-title-2.png" className='w-[38px] h-[32px]' />
                                        <span className="ml-7">散票预定</span>
                                    </div>
                                    <div className="text-xl tracking-[5px] font-semibold mt-5 text-[#fff]">
                                        打开微信扫描下方二维码或微信搜索xxxxxxx进去票务预订
                                    </div>
                                    <div className="flex justify-between  w-[218px] h-[108px] p-[10px] bg-[#fff] rounded-[10px] mt-auto ml-auto">
                                        <div className="flex-1 mr-4 flex flex-col items-center justify-around">
                                            <h1 className="text-[#2D3134 text-[20px] font-medium">扫码购票</h1>
                                            <h1 className="text-[#5B5F62] text-xs text-center">打开微信扫描右方二维码</h1>
                                        </div>
                                        <img src="/images/title-code-2.png" className='w-[90px] h-[90px]' />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
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
        )
    }
}

export default function Service() {

    const [current, setcurrent] = useState(0);
    const router = useRouter();
    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
        router.push('/service?current=' + index);
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

    return (
        <div>
            <section>
                <img className="w-full mt-[-68px]" src="https://img.zcool.cn/community/01f8f95c1c48c0a8012029ac57a301.jpg@1280w_1l_2o_100sh.jpg" />
            </section>
            <section className="bg-[#692A1B]">
                <div className="max-w-7xl  mx-auto">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>
            <Content current={current} />
        </div >
    );
}
