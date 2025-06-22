import Btn from "../components/Btn";
import { BtnNav, Title } from "./Gallery";

const Project = () => {
    const arr:{image:string,text: string,title:string}[] = [
        {image:"/first-project.png",title: "sample project",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {image:"/second-project.png",title: "sample project 2",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {image:"/third-project.png",title: "sample project 3",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ]
    return ( 
        <div className="flex flex-col gap-5 items-start justify-center ">
            <Title first="our" second="projects" />
            <div className="bg-[#F2F2F2] w-full h-[1px] "/>
            <div className="flex flex-col gap-4 items-start justify-center ">
                {arr?.map((item,index: number)=>(
                    <div className="grid bg-[#FBFBFB] rounded-sm h-full sm:[grid-template-columns:repeat(auto-fit,minmax(50%,50%))] " key={index}>
                        <div className="w-full">
                            <img src={item.image} alt="" className={`w-full h-[135px] md:h-[235px] xl:h-[300px] object-cover object-center `} />
                        </div>
                        <div className=" p-5 flex flex-col h-full w-full items-start justify-between ">
                            <h2 className="capitalize text-[#BDBDBD] text-[32px] lg:text-[38px] ">{item.title}</h2>
                            <p className="text-[#000000] text-[14px] ">{item.text}</p>
                            <Btn
                            text="view more"
                            to={`/project/${index}`}
                            color="white"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 flex items-center justify-start ">
                <BtnNav />
            </div>
        </div>
     );
}
 
export default Project;