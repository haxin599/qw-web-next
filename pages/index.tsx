import { useState, useEffect } from 'react'
import Swiper from "@/components/swiper";
import styles from '../styles/Home.module.css';
import { Image } from "@nextui-org/react";
import MenuItem from '@/components/menuItem'

import { apiIndex } from '@/config/api/api'

const CultureItem = () => {
    return (
        <div className="flex w-full md:w-1/2 p-6">
            <div className="mr-8 w-40 flex flex-col justify-between items-center relative">
                <div className={styles.cultureText}>
                    壹
                </div>
                <div className={`${styles.verticalText} text-4xl text-[#90604D] font-semibold`}>
                    历史文化
                </div>
                <div className="#D44926 text-[18px]tracking-[5px] font-semibold">查看更多</div>
                <img className={styles.cultureBg} src="/images/title-bg.png" />
            </div>
            <div>
                <div className="text-[18px] tracking-[5px] leading-8 text-[#692A1B] font-semibold mb-8">青岩城为满足军事需要而修建，古为屯田驻兵之地， 素有“茶马古道”“南部要塞"之称</div>
                <img className="w-[408px] h-[320px]" src="https://img.js.design/assets/img/660a6a5ea2a64c35fa689563.jpg#c0ce5179e740668292255c70c1b51a95" />
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

const InfoCard = ({ index }) => {
    return (
        <div className="flex justify-end items-baseline mb-3">
            <div className="text-3xl font-bold">
                <span className={index < 3 ? 'text-[#F49F0A]' : 'text-[#1A1818]'}>
                    {index + 1}
                </span>
            </div>
            <div className="flex flex-col ml-5" >
                <span className="text-[#80352F] font-semibold text-lg">
                    线上入园须知与购票须知
                </span>
                <span className="text-[#80352F] text-sm mt-3">景区实行“实名制购票”景区门票及观光车车票实行网上实名预约购票。</span>
            </div>
        </div>
    )
}


const CardT = ({ current }) => {
    if (current === 1) {
        return (
            <div className=" px-5">
                <HeadTitle title1="万寿宫" title2="Scenic spot publicity" title3="景区宣传" />
                <div className="flex">
                    <img className='rounded-[20px] w-[594px] h-[430px]' src="https://img.js.design/assets/img/66175a8dfdbe3d13f2c230e1.jpg#87af34dc574282874b46f4eca7f35759" alt="" />
                    <div className="px-5">
                        <div className="flex items-center">
                            <div className={styles.sanjiaoB} />
                            <div className="text-[#D44926] mx-3 text-[24px] tracking-[5px]">-  万寿宫  -</div>
                            <div className={styles.sanjiaoB} />
                        </div>
                        <div className="text-[#692A1B] text-[18px] tracking-[5px] mt-[20px] leading-8 font-semibold">
                            位于西街3号，毗邻慈云寺。清康熙年间建，嘉庆三年(1798年)重修，最早才十A'2E片227，川U72西会馆，为南来北往的商贾之所，后来改造为道观。万寿宫系穿斗式硬山顶砖木结构建筑，整座宫院由正殿、配殿、西厢、戏楼和生活区构成一组建筑群，坐东向西，占地2000平方米，结构严谨规模较大...
                        </div>
                        <div className="text-[#D44926] text-[24px] tracking-[5px] flex justify-between font-semibold">
                            <div className="flex justify-center items-center w-[53px] text-center h-[165px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] bg-[url('/images/good-bg-l.png')]">
                                <span className="w-[20px]">文昌阁</span>
                            </div>
                            <div className="flex justify-center items-center w-[53px] text-center h-[165px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] bg-[url('/images/good-bg-l.png')]">
                                <span className="w-[20px]">文昌阁</span>
                            </div>  <div className="flex justify-center items-center w-[53px] text-center h-[165px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] bg-[url('/images/good-bg-l.png')]">
                                <span className="w-[20px]">文昌阁</span>
                            </div>
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
                        青岩古镇是贵州省著名的历史文化名镇，形成于明洪武年间，历明清两代，迄今6百余年。历史悠久，人文荟萃，文化氛围极为浓郁。因附近多青色岩峰而得名，古为屯田驻兵之地。位于贵阳市南郊、距市区约29公里，距花溪南12公里处。它是贵州四大古镇(青岩、镇远、丙安、隆里)之一，始建于明洪武十年(1378年)，至今已有六百多年历史。古镇内设计精巧、工艺精湛的明清古建筑交错密布，寺庙、楼阁画栋雕梁、飞角重檐相间。 悠悠古韵，被誉为中国最具魅力小镇之一。古镇的建筑依山就势，布局合理，石雕、木雕工艺精湛，蕴含着许多神话传说和浓郁的地方特色，令人叹为观止。
                    </div>
                </div>
            </div>
        )
    }

}

export default function IndexPage() {
    const [current, setcurrent] = useState(0);
    const [bannerList, setBannerList] = useState([1, 2]);
    const [cultureList, setCultureList] = useState([1, 2, 3]);

    const handleClick = (index) => {
        setcurrent(index); // 切换 clicked 的值
    };
    const tabList = [{
        label: '景区介绍',
    }, {
        label: '景区宣传'
    }]
    const infoList = [1, 2, 3, 4, 5]


    const fetchData = async () => {
        try {
            const res = await apiIndex()
            console.log(res)
            setBannerList(res.data.carouselList)
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
                <Swiper bannerList={bannerList}></Swiper>
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


                    <CardT current={current} />
                </div>
            </section>


            <section className="bg-[#F5EDD0] ">
                <div className="max-w-7xl mx-auto ">
                    <HeadTitle title1="了解青岩" title2="Scenic spot publicity" title3="青岩文化" />

                    <div className="flex  flex-wrap  text-[#692A1B]">
                        {cultureList.map((item, index) => (
                            <CultureItem key={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#FFFBEB] ">
                <div className="max-w-7xl mx-auto">
                    <HeadTitle title1="参与活动" title2="Scenic spot publicity" title3="景区宣传" />

                    <div className="flex  p-4">
                        <div className="w-full md:w-3/5">
                            <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            />
                        </div>
                        <div className="w-full ml-3 md:w-2/5 flex flex-col justify-around">
                            {infoList.map((item, index) => (
                                <InfoCard key={index} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
}
