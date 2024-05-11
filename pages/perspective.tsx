import { useState, useEffect } from 'react'

import MenuItem from '@/components/menuItem'
import { Tabs, Tab } from "@nextui-org/react";
import { apiVisualAngle, apiPerspectiveType } from '@/config/api/api'
import { Image } from "@nextui-org/react";

export async function getStaticProps() {
    // 在这里获取数据
    try {
        // 在这里获取数据
        const { data } = await apiVisualAngle();
        const res = await apiPerspectiveType()
        let data1 = res.data.map(item => {
            return {
                name: item.categoryName,
                type: item.id,
                categoryType: item.categoryType
            }
        })
        data1.unshift({ name: '全部', type: 1, categoryType: 0 })
        // 返回数据作为 props
        return {
            props: {
                data,
                data1
            },
        };
    } catch (error) {
        // 处理数据获取失败的情况
        console.error('Error fetching data:', error);
        return {
            props: {
                data: null, // 返回空数据或者错误信息
                data1: null,
                error: 'Failed to fetch data',
            },
        };
    }
}

export default function Service({ data, data1 }) {

    const [current, setcurrent] = useState(0);
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(1);
    const [typeList, setTypeList] = useState([]);
    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
        changeType(index + 1)
    };
    const infoList = [{
        label: '美景图库',
    }, {
        label: '美景视频'
    }]
    const changeType = (value) => {
        let arr1 = data1.filter(item => {
            return item.categoryType == value || item.categoryType == 0
        })
        setTypeList(arr1)
        setList(data[value])
    }

    const handleTabChange = (key) => {
        // 在标签切换时打印当前选中的选项卡的键值
        console.log('选中的选项卡键值为：', key);
        setSelected(key)
        if (key == 1) {
            setList(data[current + 1])
        } else {
            let arr = data[current + 1].filter(item => {
                return item.categoryId == key
            })
            setList(arr)
        }
    };

    useEffect(() => {
        if (data1) {
            changeType(1)
        }
        if (data) {
            setList(data[1])
        }
    }, []);

    return (
        <div>
            <section>
                <img className="w-full mt-[-68px]" src="https://img.zcool.cn/community/01f8f95c1c48c0a8012029ac57a301.jpg@1280w_1l_2o_100sh.jpg" />

            </section>
            <section className="bg-[#692A1B]">
                <div className="max-w-7xl mx-auto ">
                    <MenuItem infoList={infoList} current={current} onChildEvent={handleClick} />
                </div>
            </section>

            <section className="bg-[#FFFBEB]">
                <div className="max-w-7xl mx-auto p-4 py-[50px]">
                    <div className='flex justify-between items-center'>
                        <div className='w-2/5 pl-14'>
                            <h1 className='text-[#482522] font-semibold text-lg tracking-[5px]'>Scenic spot publicity</h1>
                            <h1 className='text-[#80352F] font-semibold text-4xl tracking-[5px]'>美景图库</h1>
                        </div>
                        <div className='w-full'>
                            <Tabs onSelectionChange={handleTabChange} selectedKey={selected} fullWidth variant="underlined" color="primary" aria-label="Options" classNames={{
                                tabList: "justify-around  relative rounded-none p-0 border-b border-divider",
                                cursor: "w-full bg-[#D44926]",
                                tab: "px-0 h-12 ",
                                tabContent: "group-data-[selected=true]:text-[#D44926] text-[#692A1B] text-2xl",
                            }}>
                                {typeList.map(item => (
                                    <Tab key={item.type} title={item.name} />
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    <div className="grid grid-cols-3  gap-4 mt-[50px]">
                        {list.map((item, index) => (
                            <img src={item.fileUrl} className="w-[400px] h-[400px]" key={index} />
                        ))}
                    </div>
                </div>



            </section>
        </div >
    );
}
