import { useState, useEffect } from 'react'

import MenuItem from '@/components/menuItem'
import { Divider } from "@nextui-org/react";

import { apiIntroduction } from '@/config/api/api'

export async function getStaticProps() {
    // 在这里获取数据
    try {
        // 在这里获取数据
        const { data } = await apiIntroduction();

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

export default function Consult({ data }) {
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

    useEffect(() => {
        setList(prevArray => [...prevArray, data.basic[0].infoContent, data.president[0].infoContent, data.organizational[0].infoContent]);
        setCmsHtml(data.basic[0].infoContent)
    }, []);
    return (
        <div>
            <section>
                <img className="w-full mt-[-68px]" src="https://img.zcool.cn/community/01f8f95c1c48c0a8012029ac57a301.jpg@1280w_1l_2o_100sh.jpg" />
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
