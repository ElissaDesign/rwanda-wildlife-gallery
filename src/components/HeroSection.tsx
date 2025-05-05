import Navbar from "@/app/_components/navbar";
import Image from "next/image";
import { H2 } from "./ui/headings";

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

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
<H2>The best free stock photos, royalty free images & videos.</H2>
</div>


    </div>
}