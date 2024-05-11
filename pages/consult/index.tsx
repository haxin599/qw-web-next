import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import MenuItem from '@/components/menuItem'
import { Divider } from "@nextui-org/react";
import { apiConsult } from '@/config/api/api'
import { format } from 'date-fns';

export async function getStaticProps() {
    // 在这里获取数据
    try {
        // 在这里获取数据
        const { data } = await apiConsult();

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

    const router = useRouter();

    const [current, setcurrent] = useState(0);
    const [arrList, setArrList] = useState([]);
    const [list, setList] = useState([]);
    const handleClick = (index) => {

        setcurrent(index); // 切换 clicked 的值
        setList(arrList[index])
    };
    const infoList = [{
        label: '景区资讯',
    }, {
        label: '景区活动'
    }, {
        label: '游玩攻略'
    }, {
        label: '景区公告'
    }]
    const { consultList, activityList, strategyList, announcementList } = data
    const jump = (id, type) => {
        router.push(`/consult/${id}?type=${type}`);
    }

    useEffect(() => {
        setList(consultList)
        setArrList(prevArray => [...prevArray, consultList, activityList, strategyList, announcementList]);
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
                    {list && list.map((item, index) => (
                        <div className='flex  bg-[#F5EDD0] rounded-[10px] cursor-pointer' key={index} onClick={() => jump(item.id, (index + 1))}>
                            <img className='w-1/2' src={item.picture} />
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
