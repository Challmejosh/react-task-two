import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="w-full p-[16px] flex flex-col gap-8 bg-[#2C2C2C]">
        <div className="w-full p-[16px] flex flex-col sm:flex-row gap-8 ">
        {/* image */}
        <img src="/white-logo.png" alt="" className="w-[120px] h-[70px] md:w-[145px] md:h-[95px] mx-auto md:mx-0" />
        <div className="w-full flex gap-8 flex-col sm:flex-row items-start justify-between p-4 ">
            {/* information */}
            <div className="flex flex-col gap-5 items-start justify-center">
            <p className="text-[18px] font-semibold text-white capitalize ">
                informations
            </p>
            <div className="flex flex-col gap-2 ">
                <FooterLink text="main" link="/" />
                <FooterLink text="gallery" link="/gallery" />
                <FooterLink text="projects" link="/project" />
                <FooterLink text="certifictaions" link="/certification" />
                <FooterLink text="contacts" link="/contact" />
            </div>
            </div>
            {/* contacts */}
            <div className="flex flex-col gap-5 items-start justify-center">
            <p className="text-[16px] font-semibold text-white capitalize ">
                contacts
            </p>
            <div className="text-white flex items-start justify-between gap-3 flex-col font-semibold ">
                <div className="flex gap-2 items-start justify-start">
                <MapPin />
                <p className="">1234 Sample Street Austin Texas 78704</p>
                </div>
                <div className="flex gap-2 items-start justify-start">
                <Phone />
                <p className="">512.333.2222</p>
                </div>
                <div className="flex gap-2 items-start justify-start">
                <Mail />
                <p className="">sampleemail@gmail.com</p>
                </div>
            </div>
            </div>
            {/* socials */}
            <div className="text-white flex flex-col gap-5 items-start justify-center ">
            <p className="text-[18px] font-semibold text-white capitalize ">
                social media
            </p>
            <div className="flex items-center justify-center gap-3 ">
                <Link to={""}>
                <Facebook />
                </Link>
                <Link to={""}>
                <Twitter />
                </Link>
                <Link to={""}>
                <Linkedin />
                </Link>
                <Link to={""}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 4.99 3.657 9.128 8.438 10.163-.117-.864-.223-2.192.046-3.137.244-.84 1.57-5.352 1.57-5.352s-.4-.798-.4-1.976c0-1.85 1.073-3.233 2.406-3.233 1.133 0 1.678.85 1.678 1.867 0 1.138-.725 2.837-1.098 4.414-.312 1.32.663 2.396 1.964 2.396 2.357 0 4.166-2.487 4.166-6.075 0-3.177-2.286-5.403-5.553-5.403-3.784 0-6.003 2.84-6.003 5.773 0 1.138.438 2.36.987 3.027.109.134.125.25.093.385-.103.418-.338 1.32-.384 1.502-.06.238-.195.288-.45.173-1.668-.775-2.71-3.205-2.71-5.154 0-4.204 3.054-8.064 8.808-8.064 4.618 0 8.207 3.293 8.207 7.7 0 4.589-2.896 8.288-6.915 8.288-1.35 0-2.618-.702-3.05-1.53l-.83 3.166c-.3 1.143-1.116 2.575-1.663 3.45A12.002 12.002 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
                </Link>
            </div>
            </div>
        </div>
        </div>
        <div className="bg-[#C8C8C880] w-full h-[1px] "/>
        <div className="flex items-center justify-center text-[#C8C8C880] ">
            © {year} All Rights Reserved
        </div>
    </div>
  );
};

export default Footer;
