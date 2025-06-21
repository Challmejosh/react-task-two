const Pictures = () => {
    const pic:string[] = [
        "/first-pic.jpg","/sec-pic.jpg","/third-pic.jpg","/forth-pic.jpg",
        "/fifth-pic.jpg","/sixth-pic.jpg","/seventh-pic.jpg","/eighth-pic.jpg",
        "/ninth-pic.jpg"
    ]
    return ( 
        <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))] gap-3 ">
            <div className="h-[260px] bg-[#C4C4C4] " />
            {pic?.map((item,index:number)=>(
                <img key={index} src={item} alt="" className="h-[260px] object-cover w-full " />
            ))}
        </div>
     );
}
 
export default Pictures;