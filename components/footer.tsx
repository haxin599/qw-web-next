import { Image } from "@nextui-org/react";

const Contact = () => {
    return (
        <div className="flex flex-col  items-center justify-end" >
            <h1 className="text-xl font-medium mb-4">官方微信</h1>
            <Image
                width={115}
                height={115}
                alt="官方微信"
                radius="none"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </div>
    )
}

export const Footer = () => {

    const phoneList = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-black text-F49F0A  text-4xl tracking-10 mt-9">
                青岩古镇
            </div>
            <div className="w-full flex justify-around px-7 pb-7  max-w-screen-xl">
                <div>
                    <h1 className="text-base">投诉电话</h1>
                    <h1 className="text-sm mt-7">0851-9982761</h1>
                    <h1 className="text-base mt-9">联系我们</h1>
                    <div className="text-sm mt-7">0851-9982761</div>
                    <div className="text-sm mt-4">贵州省贵阳市贵州省贵阳市花溪区南部青岩古镇</div>
                </div>
                <div className="flex gap-28">
                    {phoneList.map((item, index) => (
                        <Contact key={index} />
                    ))}
                </div>
            </div>
            <div className="w-full size-px bg-B8DAF0" />
            <div className="text-sm py-7 ">
                @2024-2030 www.qingyanguzheng 贵州青岩古镇景区版权所有
            </div>
        </div>
    )
}