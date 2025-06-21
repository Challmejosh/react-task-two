import { Link } from "react-router-dom";

const FooterLink = ({link,text}:{link:string;text:string}) => {
    return ( 
        <Link to={link} className=" font-semibold text-white capitalize " >{text}</Link>
     );
}
 
export default FooterLink;