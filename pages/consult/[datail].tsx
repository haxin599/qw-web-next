// /pages/products/[tab].js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

import { apiConsultDetail } from '@/config/api/api'


const ConsultDetailPage = () => {
    const router = useRouter();
    const { datail, type } = router.query;
    const [info, setInfo] = useState({});

    const fetchData = async () => {
        try {
            const res = await apiConsultDetail({ id: datail, type: type })
            setInfo(res.data)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='bg-[#F5EDD0]'>
            <div className="max-w-7xl mx-auto p-7 min-h-dvh ">
                <Breadcrumbs color="primary" itemClasses={{
                    item: "text-2xl",
                }}>
                    <BreadcrumbItem href="/" className="text-2xl"> 首页</BreadcrumbItem >
                    <BreadcrumbItem href="/consult" >景区咨询</BreadcrumbItem>
                    <BreadcrumbItem>文字详情</BreadcrumbItem>
                </Breadcrumbs >

                <div className='flex flex-col items-center'>
                    <h1 className='text-[#D44926] text-[36px] tracking-widest font-medium mt-10'> {info.infoTitle} </h1>
                    <h2 className='text-2xl text-[#692A1B] mt-7 mb-12'>发布时间：<span className='text-[#D44926] mr-8'>{info.createTime}</span>    浏览次数:<span className='text-[#D44926]'>222</span>  </h2>
                    <div className='text-[#692A1B] text-2xl'>
                        <div dangerouslySetInnerHTML={{ __html: info.infoContent }} />
                    </div>
                </div>
            </div >
        </div>

    );
};


export default ConsultDetailPage;
