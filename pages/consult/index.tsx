import { useState, useEffect } from 'react'

import Swiper from "@/components/swiper";
import MenuItem from '@/components/menuItem'
import { Divider } from "@nextui-org/react";
import { apiConsult } from '@/config/api/api'
import { format } from 'date-fns';
export default function Consult() {
    const [current, setcurrent] = useState(0);
    const [arrList, setArrList] = useState([]);
    const [list, setList] = useState([]);
    const handleClick = (index) => {

        setcurrent(index); // 切换 clicked 的值
        setList(arrList[index])
    };
    const infoList = [{
        label: '景区咨询',
    }, {
        label: '景区活动'
    }, {
        label: '游玩攻略'
    }, {
        label: '景区公告'
    }]

    const fetchData = async (params) => {
        try {
            const res = await apiConsult()
            const { consultList, activityList, strategyList, announcementList } = res.data

            setList(consultList)
            setArrList(prevArray => [])
            setArrList(prevArray => [...prevArray, consultList, activityList, strategyList, announcementList]);
            console.log('arrList===', arrList)
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
                <div className="max-w-7xl  mx-auto p-4">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>
            <section className="">
                <div className="max-w-7xl  mx-auto p-4 gap-8 grid grid-cols-2 flex flex-wrap">
                    {list.map((item, index) => (
                        <div className='flex  bg-[#F5EDD0] rounded-[10px]'>
                            <img className='w-1/2' src="https://img.js.design/assets/img/66134f9eb471baeb20c10e38.png" alt="" srcset="" />
                            <div className='w-1/2 p-[20px] flex flex-col'>
                                <h1 className='text-[#D44926] text-[36px] tracking-[2px]'>{item.infoTitle}</h1>

                                <div className='text-[#692A1B] text-[18px] font-semibold tracking-[5px] mt-4  line-clamp-3'>
                                    <div dangerouslySetInnerHTML={{ __html: item.infoContent }} />
                                </div>

                                <div className='flex mt-auto items-center text-[#692A1B] text-[18px] font-semibold tracking-[5px]'>
                                    <Divider className='flex-1 bg-[#692A1B]' />
                                    <span className='ml-8'>{format(item.createTime, "yyyy-MM-dd")}</span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>


            </section>

        </div >
    );
}
