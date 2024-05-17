import { useState, useEffect, useMemo } from 'react'
import Swiper from "@/components/swiper";
import styles from '../styles/Home.module.css';
import { Image } from "@nextui-org/react";
import MenuItem from '@/components/menuItem'
import { useRouter } from 'next/router';
import { apiIndex } from '@/config/api/api'
import axios from 'axios';
export async function getStaticProps() {
    // 在这里获取数据
    try {
        // 在这里获取数据
        const { data } = await apiIndex();
        const res = await axios('https://restapi.amap.com/v3/weather/weatherInfo?key=7dc8e5ded616012955e72c79bc23d984&city=520111');
        const data1 = await res.data.lives;

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



const CultureItem = ({ name, cover, introduce, current, onChildEvent }) => {
    const numList = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']
    const handleClick = () => {
        // Call the callback function passed from the parent component
        onChildEvent(current);
    };
    return (
        <div className="flex w-full md:w-1/2 p-6">
            <div className="mr-8 w-40 flex flex-col justify-between items-center relative w-[80px] cursor-pointer" onClick={handleClick}>
                <div className={styles.cultureText}>
                    {numList[current]}
                </div>
                <div className={`${styles.verticalText} text-4xl text-[#90604D] font-semibold`}>
                    {name}
                </div>
                <div className="#D44926 text-[18px]tracking-[5px] font-semibold">查看更多</div>
                <img className={styles.cultureBg} src="/images/title-bg.png" />
            </div>
            <div className="flex-1">
                <div className="h-[100px] text-[18px] tracking-[5px] leading-8   line-clamp-3 text-[#692A1B] font-semibold mb-8">{introduce}</div>
                <img className="w-[408px] h-[320px]" src={cover} />
            </div>
        </div>
    )
}


const HeadTitle = ({ title1, title2, title3, address = "中国 贵阳青岩古镇" }) => {
    return (
        <div className="flex p-5  justify-between pb-14 flex-wrap">
            <div className="flex items-end font-semibold" >
                <div className="border-l-2 border-[#C7573B] h-44 mr-4"></div>
                <div className={`${styles.verticalText} text-2xl text-[#482522] font-semibold`}>
                    {title1}
                </div>
                <div className="ml-8 ">
                    <div className="text-[#482522] text-lg tracking-[5px]">{title2}</div>
                    <div className="text-[#80352F] text-4xl  tracking-[5px]">{title3}</div>
                </div>
            </div>
            <div className="flex flex-col justify-end items-end font-semibold">
                <div className="flex items-center">
                    <div className={`${styles.lineB} bg-foreground`} />
                    <div className={styles.sanjiaoB} />
                </div>
                <div className="text-[#000000] text-xl">{address}</div>
            </div>
        </div>

    )
}

const InfoCard = ({ index, title, subTitle, onChildEvent }) => {
    const handleClick = () => {
        // Call the callback function passed from the parent component
        onChildEvent();
    };
    return (
        <div className="flex items-baseline mb-3 cursor-pointer" onClick={handleClick}>
            <div className="text-3xl font-bold">
                <span className={index < 3 ? 'text-[#F49F0A]' : 'text-[#1A1818]'}>
                    {index + 1}
                </span>
            </div>
            <div className="flex flex-col ml-5" >
                <span className="text-[#80352F] font-semibold text-lg">
                    {title}
                </span>
                <span className="text-[#80352F] text-sm mt-3 line-clamp-1">
                    <div dangerouslySetInnerHTML={{ __html: subTitle }} />
                </span>
            </div>
        </div>
    )
}


const CardT = ({ current, list, info, onChildEvent }) => {
    const handleClick = (index) => {
        // Call the callback function passed from the parent component
        onChildEvent(index);
    };

    if (current === 1) {
        return (
            <div className=" px-5">
                <HeadTitle title1={info.scenicSpotName} title2="Scenic spot publicity" title3="景区宣传" />

                <div className="flex">
                    <img className='rounded-[20px] w-[594px] h-[430px]' src={info.coverPicture} />
                    <div className="px-5 flex-1 flex flex-col">
                        <div className="flex items-center">
                            <div className={styles.sanjiaoB} />
                            <div className="text-[#D44926] mx-3 text-[24px] tracking-[5px]">-  {info.scenicSpotName}  -</div>
                            <div className={styles.sanjiaoB} />
                        </div>
                        <div className="text-[#692A1B] text-[18px] tracking-[5px] mt-[20px] leading-8 font-semibold h-[190px] line-clamp-6 overflow-hidden">

                            <div dangerouslySetInnerHTML={{ __html: info.scenicSpotIntroduce }} />
                        </div>
                        <div className="text-[#D44926] mt-auto text-[24px] tracking-[5px] flex justify-between font-semibold">

                            {list.map((item, index) => (
                                <div key={index} onClick={() => handleClick(index)} className={`flex justify-center items-center w-[53px] cursor-pointer text-center h-[165px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] ${info.id === item.id ? " bg-[url('/images/good-bg-l-active.png')] text-[#fff]" : " bg-[url('/images/good-bg-l.png')] "}`}>
                                    <span className="w-[20px]">{item.scenicSpotName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.indexBg}>
                <div className={styles.introduceText}>
                    <h1 className={styles.introduceTitle}>
                        景区介绍
                    </h1>
                    <div className={styles.introduceContent}>
                        青岩古镇是贵州省著名的历史文化名镇，形成于明洪武年间，历明清两代，迄今6百余年。历史悠久，人文荟萃，文化氛围极为浓郁。因附近多青色岩峰而得名，古为屯田驻兵之地。位于贵阳市南郊,距市区约29公里，距花溪南12公里处。它是贵州四大古镇(青岩,镇远,丙安,隆里)之一，始建于明洪武十年(1378年)，至今已有六百多年历史。古镇内设计精巧,工艺精湛的明清古建筑交错密布，寺庙,楼阁画栋雕梁,飞角重檐相间。 悠悠古韵，被誉为中国最具魅力小镇之一。古镇的建筑依山就势，布局合理，石雕,木雕工艺精湛，蕴含着许多神话传说和浓郁的地方特色，令人叹为观止。
                    </div>
                </div>
            </div>
        )
    }

}

export default function IndexPage({ data, data1 }) {
    const router = useRouter();
    const [current, setcurrent] = useState(0);
    const [scenicInfo, setScenicInfo] = useState({});

    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
    };



    const tabList = [{
        label: '景区介绍',
    }, {
        label: '景区宣传'
    }]
    const jump = (index) => {

        router.push(`/culture?pageType=${index}`);
    }
    const jumpDetail = (item, type) => {
        console.log(item)
        router.push(`/consult/${item.id}?type=${type}`);
    }

    const handleChange = (index) => {
        console.log(index)
        setScenicInfo(data.scenicSpotList[index])
    }
    useEffect(() => {
        data && setScenicInfo(data.scenicSpotList[0])

    }, []);
    return (
        <div>
            <section>
                <Swiper bannerList={(data && data.carouselList) || []}></Swiper>
            </section>
            <section className="bg-[#692A1B]">
                <div className="flex px-10 items-center justify-between h-40 max-w-7xl  mx-auto p-4">
                    <div className="flex items-center" >

                        <MenuItem infoList={tabList} current={current} source="home" onChildEvent={handleClick} />
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <h1 className={styles.title}>入园人数</h1>
                        <div className="flex items-center">
                            <div className={styles.lineH} />
                            <div className={styles.sanjiao} />
                        </div>
                        <div className={styles.count}>590239</div>
                    </div>
                </div>
            </section>


            <section className="bg-[#FFFBEB] ">
                <div className="max-w-7xl mx-auto py-10">


                    <CardT onChildEvent={handleChange} current={current} info={scenicInfo} list={data.scenicSpotList} />
                </div>
            </section>


            <section className="bg-[#F5EDD0] ">
                <div className="max-w-7xl mx-auto ">
                    <HeadTitle title1="了解青岩" title2="Scenic spot publicity" title3="青岩文化" />

                    <div className="flex  flex-wrap  text-[#692A1B]">
                        {data && data.cultureList.map((item, index) => (
                            <CultureItem onChildEvent={() => jump(index)} key={index} current={index} cover={item.culturePicture} name={item.cultureName} introduce={item.scenicSpotIntroduce} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#FFFBEB] ">
                <div className="max-w-7xl mx-auto">
                    <HeadTitle title1="参与活动" title2="Scenic spot publicity" title3="景区宣传" />

                    <div className="px-4 mb-4">
                        <div className='w-full h-[65px] bg-[#F5EDD0] rounded flex items-center p-7'>
                            <img src="/images/weather.png" className='w-[38px] h-[32px]' />
                            <span className="text-[#D44926] text-[20px] tracking-[10px] font-black ml-4">青岩古镇</span>
                            <span className="text-[#D44926] text-[20px] tracking-[10px] ml-8">
                                <span className="mr-4">当前温度:{data1[0].temperature}°</span>
                                <span>{data1[0].weather}</span>
                                <span>{data1[0].winddirection}{data1[0].windpower}</span>

                            </span>

                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="w-full md:w-3/5">
                            <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            />
                        </div>
                        <div className="w-full ml-3 md:w-2/5 flex flex-col p-6">
                            {data && data.announcementList.map((item, index) => (
                                <InfoCard key={index} onChildEvent={() => jumpDetail(item, 4)} index={index} title={item.infoTitle} subTitle={item.infoContent} />
                            ))}
                        </div>
                    </div>
                    <div className="flex  p-4">
                        <div className="w-full md:w-2/5">
                            <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            />
                        </div>
                        <div className="w-full ml-3 md:w-3/5 flex flex-col p-6">
                            {data && data.consultList.map((item, index) => (
                                <div key={index} className="mb-3 group cursor-pointer" onClick={() => jumpDetail(item, 1)}>
                                    <div className="flex items-center px-5 bg-[#fff] h-[70px]" >
                                        <span className={index < 3 ? 'text-[#D44926] text-3xl font-bold' : 'text-[#1A1818] text-3xl font-bold'}>
                                            {index + 1}
                                        </span>
                                        <span className="text-[#80352F] font-semibold text-lg  ml-5">
                                            {item.infoTitle}
                                        </span>
                                    </div>
                                    <img className="w-full h-[60px] hidden group-hover:block transition duration-700 ease-in-out" src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
