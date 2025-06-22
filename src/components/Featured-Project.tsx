import Btn from "./Btn";

const FeaturedProject = ()=>{
    return (
        <div className="w-full flex flex-col gap-8 items-start justify-center ">
            <div className="w-full flex flex-col gap-5 items-start justify-center ">
                <h1 className="text-[62px] text-[#BDBDBD] capitalize " >our projects</h1>
                <div className="w-full flex flex-col gap-4 items-center justify-center ">
                    <div className="w-full p-2 grid md:grid-cols-2 gap-3 items-center justify-center ">
                        <div className="w-full h-full relative bg-[#333] ">
                            <img src="first-featured.png" alt="" className="object-fill w-full h-[255px] " />
                            <div className="absolute w-full h-full p-[20px] flex flex-col items-start justify-center  bg-[#333] top-0 opacity-65 " />
                            <div className="absolute z-10 w-full h-full p-[20px] flex flex-col items-start justify-start text-left top-0 ">
                                <p className=" w-[233px] opacity-100 text-white capitalize text-[62px] ">sample project</p>
                                <Btn
                                text="view more"
                                to="/"
                                />
                            </div>
                        </div>
                        <div className="w-full h-full ">
                            <img src="second-featured.png" alt="" className="object-fill w-full h-[255px] " />
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center ">
                        <div className="w-full md:w-[270px] h-full">
                            <img src="/third-featured.png" alt="" className="object-cover w-full md:w-[270px] h-[255px] " />
                        </div>
                        <div className="w-full md:w-[470px] h-full">
                            <img src="/forth-featured.png" alt="" className="object-cover w-full md:w-[470px] h-[255px] " />
                        </div>
                        <div className="w-full md:w-[370px] h-full">
                            <img src="/fifth-featured.png" alt="" className="object-cover w-full md:w-[370px] h-[255px] " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end items-center ">
                <Btn 
                text="all projects"
                to="/project"
                color="black"
                />
            </div>
        </div>
    )
}
export default FeaturedProject;