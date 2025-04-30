import Navbar from "@/app/_components/navbar";
import Image from "next/image";

export default function HeroSection (){
    return <div className="min-w-full w-full h-72 relative">
        <Image
        alt="The gorilla"
        src='https://images.pexels.com/photos/1238277/pexels-photo-1238277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        // width={500}
        // height={500}
        fill
        className="object-cover"
        priority
        sizes="(min-width: 480px) 100vw, calc(16.88vw + 382px)"
        />

<Navbar />

    </div>
}