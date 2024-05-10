import { useState, useEffect } from 'react'

import Swiper from "@/components/swiper";
import Cards from '@/components/card'
import MenuItem from '@/components/menuItem'
import { apiCulture } from '@/config/api/api'

import { useRouter } from 'next/router';
export async function getStaticProps() {
    // 在这里获取数据
    try {
        // 在这里获取数据
        const { data } = await apiCulture();

        // 返回数据作为 props
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        // 处理数据获取失败的情况
        console.error('Error fetching data:', error);
        return {
            props: {
                data: null, // 返回空数据或者错误信息
                error: 'Failed to fetch data',
            },
        };
    }
}
export default function Home({ data }) {
    console.log(data)
    const router = useRouter();
    const [current, setcurrent] = useState(0);
    const [info, setInfo] = useState({});
    const { pageType } = router.query

    let labelList = data.map(item => {
        return {
            label: item.cultureName
        }
    })

    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
        setInfo(data[index])
    };

    useEffect(() => {
        if (pageType) {
            setcurrent(parseInt(pageType))
            setInfo(data[pageType])
        } else {
            setInfo(data[0])
        }

    }, []);

    return (
        <div>
            <section>
                <Swiper></Swiper>
            </section>
            <section className="bg-[#692A1B]">
                <div className="max-w-[1560px]  mx-auto">
                    <MenuItem infoList={labelList} current={current} onChildEvent={handleClick} />
                </div>
            </section>
            <div className="max-w-7xl mx-auto p-6">
                <div dangerouslySetInnerHTML={{ __html: info.scenicSpotContent }} />
            </div>
            {/* 
            {current === 0 && <Cards type={1} />}
            {current === 1 && <Cards type={2} />}
            {current === 2 && <Cards type={3} />}
            {current === 3 && <Cards type={4} />} */}
        </div >
    );
}
