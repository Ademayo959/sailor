import Image from "next/image"
import Link from "next/link"
import logo1 from "@/assets/logo-without-bg.png"

export default function Navbar() {
    return (
        <div className="max-w-2xl pl-4 py-2 pr-2 h-14 shadow-md justify-between bg-card mx-auto mt-6 rounded-full flex items-center max-sm:mx-3 max-sm:h-12 max-sm:py-1 max-sm:pr-1">
            <Link href="/" className="flex gap-2 items-center cursor-pointer">
                <Image src={logo1} alt="Sailor logo" className="h-8 w-8 -mt-1.5 max-sm:h-8 max-sm:w-8"/>
                <p className="font-display text-[2rem] max-sm:text-[1.8rem]">Sailor</p>
            </Link>
            <div className="flex font-sans text-ink/90 gap-4 max-sm:hidden">
                <Link href="/scoring" className="cursor-pointer">How scoring works</Link>
                <p className="cursor-pointer">Ranks</p>
                <p className="cursor-pointer">FAQ</p>
            </div>
            <div className="bg-ink flex px-4 text-white h-full rounded-full items-center cursor-pointer transition-all duration-500 hover:bg-card hover:border hover:border-ink hover:text-ink">
                <p className="max-sm:text-[0.9rem]">Sign in with Github</p>
            </div>
        </div>
    )
};
