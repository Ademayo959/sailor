import Image from "next/image"
import logo1 from "@/assets/logo-without-bg.png"

export default function Navbar() {
    return (
        <div className="max-w-2xl pl-4 py-2 pr-2 h-14 shadow-md justify-between bg-card mx-auto mt-6 rounded-full flex items-center">
            <div className="flex gap-2 items-center cursor-pointer">
                <Image src={logo1} alt="Sailor logo" className="h-10 w-9 -mt-1.5"/>
                <p className="font-display text-[2rem]">Sailor</p>
            </div>
            <div className="flex font-sans text-ink/90 gap-4">
                <p className="cursor-pointer">How scoring works</p>
                <p className="cursor-pointer">Ranks</p>
                <p className="cursor-pointer">FAQ</p>
            </div>
            <div className="bg-ink flex px-4 text-white h-full rounded-full items-center cursor-pointer transition-all duration-500 hover:bg-card hover:border hover:border-ink hover:text-ink">
                <p>Sign in with Github</p>
            </div>
        </div>
    )
};
