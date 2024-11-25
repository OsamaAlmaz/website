import { useRef } from "react"
import Carousal from "../../component/Carousal/Carousal"
import Industries from "../../component/Industries/Industries"
import ServiceSectiion from "../../component/Services/Services"
import VisionSection from "../../component/Vision/Vision"


export default function Home(){
    const serviceRef = useRef(null);

    const scrollToServices = () =>{
        if (serviceRef.current){
            serviceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-[100%] m-auto">
            <Carousal scrollToServices={scrollToServices}/>
            < VisionSection />
            <div ref={serviceRef}>
                <ServiceSectiion />
            </div>
            < Industries />
        </div>
    )
}