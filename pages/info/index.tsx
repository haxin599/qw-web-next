import { useState, useEffect } from 'react'

import Swiper from "@/components/swiper";
import MenuItem from '@/components/menuItem'
import { Divider } from "@nextui-org/react";

import { apiIntroduction } from '@/config/api/api'
export default function Consult() {
    const [current, setcurrent] = useState(0);
    const [cmsHtml, setCmsHtml] = useState("");

    const [list, setList] = useState([]);
    const handleClick = (index) => {
        setCmsHtml(list[index])
        setcurrent(index); // 切换 clicked 的值
    };
    const infoList = [{
        label: '企业概况',
    }, {
        label: '董事长致辞'
    }, {
        label: '企业简介'
    }]

    const fetchData = async (params) => {
        try {
            const res = await apiIntroduction()
            setList(prevArray => [])
            setList(prevArray => [...prevArray, res.data.basic[0].infoContent, res.data.president[0].infoContent, res.data.organizational[0].infoContent]);
            setCmsHtml(res.data.basic[0].infoContent)
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
                    <div dangerouslySetInnerHTML={{ __html: cmsHtml }} />
                </div>


            </section>

        </div >
    );
}
