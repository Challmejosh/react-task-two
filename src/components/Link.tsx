import { Link, useLocation } from "react-router-dom";
interface Prop{
    value: string;
    link: string 
}
const LinkBtn = ({value,link}:Prop) => {
    const router = useLocation()
    return ( 
        <Link to={link} className={`${router.pathname ===`${link}` && " border-y-[2px] "} p-1 uppercase text-[#333] hover:text-[#333] `}>{value}</Link>
     );
}
 
export default LinkBtn;