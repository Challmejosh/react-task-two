import {ArrowRight,ArrowLeft} from "lucide-react"
import Btn from "./Btn";
const Hero = () => {
    return ( 
        <div className="w-full h-full grid md:grid-cols-5 items-center justify-center md:justify-between ">
            <div className="md:col-span-2 flex gap-14 flex-col items-start justify-center ">
                <div className=" flex flex-col items-start justify-center ">
                    <p className="uppercase text-[#BDBDBD] font-[500] xl:leading-[54px] text-[54px] text-left font-[roboto] ">project</p>
                    <p className="capitalize text-[#333333] font-[600] xl:leading-[54px] text-[54px] text-left font-[roboto] ">lorum</p>
                </div>
                <div className="w-full flex items-center justify-center ">
                    <div className="flex items-center justify-center ">
                        <div className="bg-white flex items-center justify-center text-left border border-[#ffffff] rounded-[1px] text-[#333] w-[53px] h-[53px] ">
                            <ArrowLeft />
                        </div>
                        <div className="bg-[#f9f9f9] flex items-center justify-center text-left border border-[#ffffff] rounded-[1px] text-[#333] w-[53px] h-[53px] ">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="bg-[#333333] w-full h-[1px] flex items-center justify-center "/>
                </div>
                <div className="flex items-center justify-start">
                    <img src="/slide-numbers.svg" alt="" className="" />
                </div>
            </div>




            <div className="md:col-span-3 relative w-full flex items-start justify-start  ">
                <img src="/hero-image.jpg" alt="" className="w-full h-[329px] sm:h-[429px] md:h-[529px] xl:h-[629px] object-fill " />
                <div className="absolute bottom-0 left-0 ">
                    <Btn 
                    text="view project"
                    to="/project"
                    color="white"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;