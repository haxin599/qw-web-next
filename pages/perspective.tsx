import { useState, useEffect } from 'react'

import Swiper from "@/components/swiper";
import Cards from '@/components/card'
import MenuItem from '@/components/menuItem'
import { Tabs, Tab } from "@nextui-org/react";
import { apiVisualAngle } from '@/config/api/api'

export default function Service() {
    const [current, setcurrent] = useState(0);
    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
    };
    const infoList = [{
        label: '美景图库',
    }, {
        label: '美景视频'
    }]
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    const fetchData = async (params) => {
        try {
            const res = await apiVisualAngle()

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <section>
                <Swiper></Swiper>
            </section>
            <section className="bg-[#692A1B]">
                <div className="max-w-7xl mx-auto">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>

            <section className="bg-[#FFFBEB]">
                <div className="max-w-7xl mx-auto p-4">
                    <div className='flex justify-between items-center'>
                        <div className='w-2/5 pl-14'>
                            <h1 className='text-[#482522] font-semibold text-lg tracking-[5px]'>Scenic spot publicity</h1>
                            <h1 className='text-[#80352F] font-semibold text-4xl tracking-[5px]'>美景图库</h1>
                        </div>
                        <div className='w-full'>
                            <Tabs key="underlined" fullWidth variant="underlined" color="primary" aria-label="Options" classNames={{
                                tabList: "justify-around  relative rounded-none p-0 border-b border-divider",
                                cursor: "w-full bg-[#D44926]",
                                tab: "px-0 h-12 ",
                                tabContent: "group-data-[selected=true]:text-[#D44926] text-[#692A1B] text-2xl",
                            }}>
                                <Tab key="photos" title="全部" />
                                <Tab key="music" title="文昌阁" />
                                <Tab key="videos" title="状元居" />
                                <Tab key="img" title="慈云寺" />
                            </Tabs>
                        </div>
                    </div>
                    <div className="grid grid-cols-3  gap-4 mt-[50px]">
                        {list.map((item, index) => (
                            <img src="https://img.js.design/assets/img/66134f9eb471baeb20c10e38.png" alt="" srcset="" />
                        ))}
                    </div>
                </div>



            </section>
        </div >
    );
}
