import { Image } from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function Cards({ type = 1 }) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/culture/1');
    };
    const list = [1, 2, 3, 4, 5]
    if (type === 1) {
        return (
            <div className="bg-[#F5EDD0] mb-10" >
                <div className="max-w-7xl mx-auto ">
                    <div className="flex  p-6">
                        <div className="w-full md:w-1/2">
                            <img className="w-[646px] h-[456px] rounded-[10px]" src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5" />
                            {/* <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            /> */}
                        </div>
                        <div className="w-full md:w-1/2 p-6" onClick={handleClick}>
                            <h1 className="font-bold text-5xl text-[#2D3134]">青岩古镇历史沿革</h1>
                            <p className="text-[#D44926] mt-5 leading-[35px]">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else if (type === 2) {
        return (
            <div className="bg-[#F5EDD0] mb-10" onClick={handleClick}>
                <div className="max-w-7xl mx-auto ">
                    <div className="flex  p-6">
                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="font-bold text-5xl text-[#2D3134]">青岩古镇历史沿革</h1>
                            <p className="text-[#D44926] mt-5 leading-[35px]">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                        </div>
                        <div className="w-full md:w-1/2 ">
                            <img className="w-[646px] h-[456px] rounded-[10px]" src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5" />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (type === 3) {
        return (
            <div>
                <div className="bg-[#F5EDD0]" >
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex  p-6">
                            <div className="w-full md:w-1/2">
                                <img className="w-[646px] h-[456px] rounded-[10px]" src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5" />

                            </div>
                            <div className="w-full md:w-1/2   p-6" onClick={handleClick}>
                                <h1 className="font-bold text-5xl text-[#2D3134]">青岩古镇历史沿革</h1>
                                <p className="text-[#D44926] mt-5 leading-[35px]">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="grid grid-cols-3  gap-8  max-w-7xl mx-auto  p-6">
                    {list.map((item, index) => (
                        <div className='cursor-pointer'>
                            <img className='rounded-[10px] w-[396px] h-[308px]' src="https://img.js.design/assets/img/6628c4d76712d63aadab2af3.jpg#ba8134feaecbe3c458a289f90dbc52eb" alt="" />
                            <h1 className='text-[#692A1B] text-[18px]  tracking-[5px] font-semibold mt-6'>青岩城为满足军事需要而修建，古为屯田驻兵之地， 素有“茶马古道”“南部要塞"之称</h1>
                        </div>

                    ))}
                </div>
            </div >
        )
    } else {
        return (
            <div>
                <div className="bg-[#F5EDD0]" >
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex  p-6">
                            <div className="w-full md:w-1/2">
                                <img className='w-[628px] h-[591px]' src="/images/test.png" />

                            </div>
                            <div className="w-full md:w-1/2 p-6" onClick={handleClick}>
                                <h1 className="font-bold text-5xl text-[#2D3134]">青岩古镇历史沿革</h1>
                                <p className="text-[#D44926] mt-5 text-[20px] leading-[26px]">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                                <div className="flex items-center mt-2">
                                    <div className="bg-[#D44926] text-[#fff] rounded-[10px] flex justify-center items-center  text-[24px] tracking-[10px] w-[103px] h-[56px]">佛教</div>
                                    <div className="text-[#482522] leading-[26px] text-[16px] flex-1 leading-9 ml-3"> 传入青岩已有400多年历史，自阴万历年间，至清道光年间的200多年中，佛教在青岩曾盛想一时，青岩慎最早的寺庵，建于明万历初年，现今佛教信数人员有近2万人，宗救工人员15人。</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="bg-[#D44926] text-[#fff] rounded-[10px] flex justify-center items-center  text-[24px] tracking-[10px] w-[103px] h-[56px]">佛教</div>
                                    <div className="text-[#482522] leading-[26px] text-[16px] flex-1 leading-9 ml-3"> 传入青岩已有400多年历史，自阴万历年间，至清道光年间的200多年中，佛教在青岩曾盛想一时，青岩慎最早的寺庵，建于明万历初年，现今佛教信数人员有近2万人，宗救工人员15人。</div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="bg-[#D44926] text-[#fff] rounded-[10px] flex justify-center items-center  text-[24px] tracking-[10px] w-[103px] h-[56px]">佛教</div>
                                    <div className="text-[#482522] leading-[26px] text-[16px] flex-1 leading-9 ml-3"> 传入青岩已有400多年历史，自阴万历年间，至清道光年间的200多年中，佛教在青岩曾盛想一时，青岩慎最早的寺庵，建于明万历初年，现今佛教信数人员有近2万人，宗救工人员15人。</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
                <div className="grid grid-cols-2  gap-8  max-w-7xl mx-auto  p-6">
                    {list.map((item, index) => (
                        <div className='cursor-pointer'>
                            <img className='rounded-[10px] w-[590px] h-[455px]' src="https://img.js.design/assets/img/6628c4d76712d63aadab2af3.jpg#ba8134feaecbe3c458a289f90dbc52eb" alt="" />
                            <h1 className='text-[#692A1B] text-[18px]  tracking-[5px] font-semibold mt-6'>青岩城为满足军事需要而修建，古为屯田驻兵之地， 素有“茶马古道”“南部要塞"之称</h1>
                        </div>

                    ))}
                </div>
            </div >
        )
    }
}
