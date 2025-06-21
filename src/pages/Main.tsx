import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProject from "../components/Featured-Project";
import Hero from "../components/Hero";
import Mission from "../components/Mission";

const Main = () => {
    return ( 
        <div className="w-full flex flex-col gap-14  ">
            <Hero />
            <About />
            <Mission />
            <FeaturedProject />
            <Contact />
        </div>
     );
}
 
export default Main;