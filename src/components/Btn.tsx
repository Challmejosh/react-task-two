import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface Prop{
    to: string | "/"
    text: string
    color?: "black"|"white"
}
const Btn = ({to,text,color}:Prop) => {
    return ( 
        <Link to={to} className={`${color==="white"&&"bg-white text-[#333] "} ${color==="black"&&"bg-[#333] text-white "} w-[221px] h-[71px] uppercase flex gap-1 items-center justify-center rounded-[1px]`}>
            <p className="">
                {text}
            </p> 
            <ArrowRight />
        </Link>
     );
}
 
export default Btn;