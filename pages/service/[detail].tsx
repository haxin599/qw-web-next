// /pages/products/[tab].js
import { useRouter } from 'next/router';


import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ServiceDetailPage = () => {
    const router = useRouter();
    const { detail } = router.query;
    const obj = {
        title: '青岩古镇|小长假第三天，为您奉上西门精彩'
    }
    return (
        <>
            <section className='bg-[#FCF6E2]'>
                <div className="max-w-7xl mx-auto p-7">
                    <div className="flex  p-4">
                        <div className="w-full md:w-1/2">

                            <img width="100%" className='rounded-[10px]' src="https://img.js.design/assets/img/66175927a8868f610a339dc6.png#d8dd2f962444bc6f3b9fa3c7e202a067" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col pt-[20px] pl-[30px]  pr-[20px] text-[24px] ">
                            <h1 className='text-[#D44926] text-[36px] font-medium tracking-[2px]'>青岩主教</h1>
                            <div className='text-[#692A1B] tracking-[5px] mt-[20px]'>类型：<span className='text-[#D44926]'>土特产</span></div>
                            <div className='text-[#692A1B] tracking-[5px] mt-[20px]'>地址：<span className='text-[#D44926]'>贵阳四</span></div>
                            <div className='text-[#692A1B] tracking-[5px] mt-[20px]'>
                                <span>商品简介：</span>
                                <span className='text-[18px] leading-[35px]'> 在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                                    教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                                    的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存
                                </span>
                            </div>
                            <div className="flex flex-wrap mt-[20px]">
                                <div className="flex justify-center items-center w-[130px] h-[46px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] bg-[url('/images/good-bg.png')]">规格-壹</div>
                                <div className="flex justify-center items-center w-[130px] h-[46px] text-[#692A1B] text-[18px] bg-auto tracking-[5px] bg-[url('/images/good-bg.png')]">规格-壹</div>
                            </div>
                            <Divider className="bg-[#692A1B] mt-[50px]" />
                            <div className="flex justify-between mt-[60px]">
                                <div className="text-[#D44926] text-[60px] tracking-[2px] font-medium">￥699</div>
                                <div>
                                    <Button radius="none" className="w-[218px] h-[74px] rounded-[5px] bg-[#692A1B] text-[36px] text-[#fff] text-[36px] tracking-[2px] font-medium">
                                        立即购买
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F5EDD0]">
                <div className="max-w-7xl mx-auto p-7 text-[24px]">
                    在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                    教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                    的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                    教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特
                    的多元宗教文化景观天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛
                    教、天主教与基智教和睦共处，信众互相曹重，寺庙楼独有特色，相互造，和谐共存，成为特


                </div>
            </section>
        </>

    );
};


export default ServiceDetailPage;
