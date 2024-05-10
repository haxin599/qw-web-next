export default function MenuItem({ current, infoList, onChildEvent, source }) {
    const handleClick = (index) => {
        // Call the callback function passed from the parent component
        onChildEvent(index);
    };
    return (
        <div className={`flex flex-wrap gap-4 p-4  xl:grid-cols-8 `}>
            {infoList.map((item, index) => (
                <div className="flex items-center col-span-1" key={index}>
                    <div onClick={() => handleClick(index)} className={`tab flex justify-center items-center text-2xl cursor-pointer font-medium ${index === current ? 'active' : ''}`}>
                        {item.label}
                    </div>

                    {index !== infoList.length - 1 && <div className={`line  ml-4`} />}
                </div>
            ))}
        </div>
    );
}