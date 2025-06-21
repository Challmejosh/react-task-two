import { Menu, X } from "lucide-react";
import LinkBtn from "./Link";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="relative grid lg:grid-cols-5 gap-8 items-center justify-between py-8 px-16 ">
      <div className=" lg:col-span-2 w-[50%] flex flex-col gap-1 items-center justify-center ">
        <img
          src="/logo.png"
          alt="logo"
          className=" object-cover w-[68px] mix-blend-multiply h-[41px] "
        />
        <p className="uppercase text-[10px] tracking-[3px] ">digital product</p>
      </div>
      <Menu
        onClick={() => setOpen(true)}
        className="text-[#333] flex lg:hidden cursor-pointer absolute top-8 right-8 "
      />
      <nav
     className={`
        fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg flex flex-col gap-8 p-8 text-[16px] font-medium z-30
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        lg:col-span-3 lg:static lg:translate-x-0 lg:bg-transparent lg:shadow-none lg:flex-row lg:items-center lg:justify-start lg:w-[50%] lg:p-0 lg:gap-4
        `}
      >
        <div className="relative p-2 lg:hidden flex ">
            <X onClick={()=>setOpen(false)} className="cursor-pointer text-[#33333] absolute top-0 left-0 " />
        </div>
        <LinkBtn value="main" link="/" />
        <LinkBtn value="gallery" link="/gallery" />
        <LinkBtn value="projects" link="/project" />
        <LinkBtn value="certificates" link="/certificate" />
        <LinkBtn value="contact" link="/contact" />
      </nav>
    </header>
  );
};

export default Navigation;
