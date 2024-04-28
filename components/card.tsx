import { Image } from "@nextui-org/react";

export default function Cards({ position = 'right' }) {
    if (position === 'left') {
        return (
            <div className="bg-F5EDD0 mb-10">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex  p-6">
                        <div className="w-full md:w-1/2">
                            <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="font-bold text-5xl text-2D3134">青岩古镇历史沿革</h1>
                            <p className="text-D44926 mt-5">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-F5EDD0 mb-10">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex  p-6">
                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="font-bold text-5xl text-2D3134">青岩古镇历史沿革</h1>
                            <p className="text-D44926 mt-5">青岩古镇在宗教学界久负盛名，是中国宗教多样性生态的一个标本，青岩“四教并存”，道教、佛以外，青岩少数民族信仰、汉族民俗信仰，以及本士宗教，一应俱全，和谐共存。青岩宗教建筑密度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大青岩古镇在宗教学界， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在度相当大， 仅青岩城中就有19处庙宇百阁，凡较大村就有庙宇存在村就有庙宇存在</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image
                                width="100%"
                                radius="none"
                                src="https://img.js.design/assets/img/660a1fca446df72277a2f258.jpg#85cf2774fbc5f97503d53b825629b3d5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
