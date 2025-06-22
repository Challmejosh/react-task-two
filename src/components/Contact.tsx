import { ArrowRight } from "lucide-react";
import { useState } from "react";

type INPUT = {
  placeholder: string;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const Input = ({ placeholder, value, handleChange }: INPUT) => {
  return (
    <input
      required
      title={placeholder}
      className="bg-[#F3F3F3] focus:outline-none h-[46px] py-2 px-5  text-[12px] text-black placeholder:text-[#8D8D8D] w-full sm:w-[391px] flex items-center justify-center  "
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type="text"
    />
  );
};
export const TextArea = ({ placeholder, value, textAreaChange }: INPUT) => {
  return (
    <textarea
      required
      title={placeholder}
      className="bg-[#F3F3F3] focus:outline-none max-h-[160px] text-black min-h-[147px] py-2 px-5 text-[12px] placeholder:text-[#8D8D8D] w-full sm:w-[391px] flex items-center justify-center  "
      placeholder={placeholder}
      value={value}
      onChange={textAreaChange}
    />
  );
};

const Btn = ({text,color}:{color: "black"|"white";text:string})=>{
    return <button type="submit" className={`${color==="white"&&"bg-white text-[#333] "} ${color==="black"&&"bg-[#333] text-white "} w-[221px] h-[71px] cursor-pointer uppercase flex gap-1 items-center justify-center rounded-[1px]`}>
                <p className="">
                    {text}
                </p> 
                <ArrowRight />
          </button>
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("submited");
  setName("");
  setEmail("");
  setPhone("");
  setInterest("");
  setMessage("");
};
  return (
    <div className="w-full">
        <h2 className="capitalize text-[#BDBDBD] text-[54px] font-[300] ">
          contact us
        </h2>
      <div className="w-full flex flex-col gap-2 lg:flex-row items-center justify-start lg:items-start lg:justify-start ">
            <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            className="w-full lg:w-fit flex flex-col gap-4 items-center lg:items-start justify-center "
            >
            <Input
                value={name}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
                }
                placeholder="Name"
            />
            <Input
                value={phone}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
                }
                placeholder="Phone Number"
            />
            <Input
                value={email}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
                }
                placeholder="E-mail"
            />
            <Input
                value={interest}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInterest(e.target.value)
                }
                placeholder="Interest In"
            />
            <TextArea
                value={message}
                textAreaChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
                }
                placeholder="Message"
            />
            <Btn
            text="send email"
            color="black"
            />
            </form>
            <img src="/contact-img.jpg" alt="" className= "hidden lg:block w-full h-[395px]  " />
      </div>
      
    </div>
  );
};

export default Contact;
