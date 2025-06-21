import Btn from "./Btn";

const About = () => {
  return (
    <div className="h-full flex gap-7 flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between p-6 bg-[#FBFBFB] rounded-sm lg:h-[435px] w-full ">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center lg:justify-start">
        <div className="w-full flex flex-col gap-6 items-center lg:items-start justify-center ">
          <img
            src="/first-about.jpg"
            alt=""
            className="w-full xl:w-[270px] self-start h-[265px] object-fill "
          />
          <img
            src="/second-about.jpg"
            alt=""
            className="w-full xl:w-[270px] self-start h-[140px] object-fill "
          />
        </div>
        <div className="w-full flex">
          <img
            src="/third-about.jpg"
            alt=""
            className="w-full xl:w-[270px] self-start h-[345px] object-fill "
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between h-full ">
        <div className="flex flex-col items-start gap-y-4 ">
            <h2 className="capitalize text-[#BDBDBD] text-[54px] font-[roboto] ">
            about
            </h2>
            <p className="text-[14px] break-words ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </p>
        </div>
          <Btn to="/about" text="read More" color="white" />
      </div>
    </div>
  );
};

export default About;
