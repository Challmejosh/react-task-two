import { ArrowLeft, ArrowRight } from "lucide-react";
import Pictures from "../components/Pictures";

export const BtnNav = ()=>{
    return  <div className="flex items-center gap-2 justify-center ">
                    <img src="/slide-numbers.svg" alt="" className="" />
                    <div className="bg-[#fcfcfc] cursor-pointer flex items-center justify-center text-left border border-[#ffffff] rounded-[1px] text-[#333] w-[53px] h-[53px] ">
                            <ArrowLeft />
                        </div>
                        <div className="bg-[#f9f9f9] cursor-pointer flex items-center justify-center text-left border border-[#ffffff] rounded-[1px] text-[#333] w-[53px] h-[53px] ">
                            <ArrowRight />
                        </div>
                </div>
}
export const Title = ({first,second}:{first:string,second:string})=>{
    return (
        <div className="">
                <p className="capitalize text-[#BDBDBD] text-[54px] ">
                    {first}
                </p>
                <p className="capitalize text-[#333333] font-bold text-[54px] ">
                    {second}
                </p>
        </div> 
    )
}
const Gallery = () => {
    return ( 
        <div className="w-full flex flex-col gap-5 items-start justify-center ">
            <Title first="photo" second="gallery" />
            <div className="bg-[#F2F2F2] w-full h-[1px] "/>
            <Pictures />
            <BtnNav />
        </div>
     );
}
 
export default Gallery;