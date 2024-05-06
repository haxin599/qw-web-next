// /pages/products/[tab].js
import { useRouter } from 'next/router';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
const CultureDetailPage = () => {
    const router = useRouter();
    const { detail } = router.query;
    const obj = {
        title: '青岩古镇|小长假第三天，为您奉上西门精彩'
    }
    return (
        <div className='bg-[#F5EDD0]'>
            <div className="max-w-7xl mx-auto p-7 min-h-dvh ">
                <Breadcrumbs color="primary" itemClasses={{
                    item: "text-2xl",
                }}>
                    <BreadcrumbItem href="/" className="text-2xl"> 首页</BreadcrumbItem >
                    <BreadcrumbItem href="/culture" >青岩文化</BreadcrumbItem>
                    <BreadcrumbItem>文字详情</BreadcrumbItem>
                </Breadcrumbs >

                <div className='flex flex-col items-center'>
                    <h1 className='text-[#D44926] text-[36px] tracking-widest font-medium mt-10'> {obj.title}{detail}</h1>
                    <h2 className='text-2xl text-[#692A1B] mt-7 mb-12'>发布时间：<span className='text-[#D44926] mr-8'>2024-1-13 23:47:39</span>    浏览次数:<span className='text-[#D44926]'>222</span>  </h2>
                    <p className='text-[#692A1B] text-2xl'>

                        在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                        教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                        的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                        教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                        的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                        教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                        的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                        教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                        的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存


                    </p>
                </div>
            </div >
        </div>

    );
};


export default CultureDetailPage;
