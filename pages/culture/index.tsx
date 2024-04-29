import { useState } from 'react'

import Swiper from "@/components/swiper";
import Cards from '@/components/card'
import MenuItem from '@/components/menuItem'




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
        <div>
            {/* <section>
                <Swiper></Swiper>
            </section> */}
            <section className="bg-[#692A1B]">
                <div className="max-w-[1560px]  mx-auto">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>

            {current === 0 && <Cards type={1} />}
            {current === 1 && <Cards type={2} />}
            {current === 2 && <Cards type={3} />}
            {current === 3 && <Cards type={4} />}
        </div >
    );
}
