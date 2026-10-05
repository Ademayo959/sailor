import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-cream h-screen">
      <Navbar />
      <div className="bg-[radial-gradient(#D8CFBB_1px,transparent_1px)] bg-[size:22px_22px] px-6 pt-16 h-[630px] text-center">
        <div className="bg-card border border-muted/50 w-fit px-4 rounded-full py-1 justify-self-center mb-4">
          <p className="text-ink/80 text-[0.8rem] font-semibold font-sans">Free for Student developers</p>
        </div>
        <div className="justify-self-center">
          <p className="font-display text-[6.5rem] w-4xl leading-25"><span>Your Github, turned into a </span><span className="text-orange italic">portfolio worth sharing.</span></p>
        </div>
        <div className="mt-4">
          <p className="text-semibold font-sans text-muted text-[1.25rem] w-xl justify-self-center">Type a username. Get a clean portfolio page and a Sailor Score that shows how you actually build.</p>
          <div className="bg-card max-w-2xl mt-6 pl-6 py-2 pr-2 h-14 shadow-md justify-between flex rounded-full mx-auto my-3">
            <input type="text" placeholder="github.com/ username" className="w-[70%] font-sans outline-0 placeholder:text-muted" />
            <div className="bg-olive w-fit px-3 py-2 text-white rounded-full">
              <p className="font-sans">See my Sailor profile</p>
            </div>
          </div>
        </div>
        <p className="text-[0.9rem] text-muted">[895] developers already charted</p>
      </div>
      
    </div>
  );
}
