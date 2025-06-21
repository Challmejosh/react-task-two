interface Sub{
    number: number
    text: string
}
const SubMission = ({number,text}:Sub)=>{
    return (
        <div className="flex items-center gap-3 justify-start ">
            <h2 className="text-[#F2F2F2] font-[700] text-[100px] sm:text-[180px] font-[roboto] ">{number}</h2>
            <p className="font-[400] leading-[36px] text-[14px] xl:text-[18px] text-[#333333] font-[roboto] " >{text}</p>
        </div>
    )
}

const Mission = () => {
    return ( 
        <div className="">
            <h2 className="text-[#BDBDBD] font-[roboto] text-[34px] md:text-[44px] lg:text-[54px] font-[300] ">Main Focus/Mission Statement</h2>
            <div className="w-full grid md:grid-cols-2 items-center justify-between ">
                <SubMission
                number={1}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat."}
                />
                <SubMission
                number={2}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl."}
                />
            </div>
        </div>
     );
}
 
export default Mission;