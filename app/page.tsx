import Image from "next/image";
import Navbar from "@/components/Navbar";
import profile from "@/assets/profile.png"

export default function Home() {
  return (
    <div className="bg-cream h-full">
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
      <div className="bg-sky max-w-5xl py-15 px-32 mx-auto rounded-3xl">
        <div className="bg-card border border-muted/50 py-6 rounded-2xl px-6 flex justify-between items-center">
          <div className="flex gap-3">
            <div>
              <Image src={profile} alt="Profile picture" className="h-28 w-28" />
            </div>
            <div>
              <p className="font-display text-[2rem]">[Your Name]</p>
              <p className="text-[0.9rem] tracking-tighter font-mono">@[username] . [Your role]</p>
              <div className="flex gap-2 my-2">
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem]">[Language]</p>
                </div>
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem]">[Language]</p>
                </div>
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem]">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[140px] w-[140px]">
            <svg
              className="-rotate-90"
              width="140"
              height="140"
              viewBox="0 0 220 220"
            >
              <circle
                cx="110"
                cy="110"
                r="85"
                fill="none"
                stroke="#e8e2d3"
                strokeWidth="18"
              />
              <circle
                cx="110"
                cy="110"
                r="85"
                fill="none"
                stroke="#C2491D"
                strokeWidth="18"
                strokeLinecap="round"
                strokeDasharray="534"
                strokeDashoffset="130"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[28px] font-semibold text-ink font-mono">
                000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-6xl mx-auto my-20">
        <div>
          <p className="font-display text-[4rem] w-100 leading-16"><span>Hours of portfolio work,</span><span className="italic">done in seconds</span></p>
          <p className="font-sans text-[1.2rem] w-130 my-4">No templates to fill in. Sailor reads your public work and builds the page for you.</p>
        </div>
        <div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-mono text-muted/80 font-semibold mt-2">01</p>
            </div>
            <div>
              <p className="font-display text-[2rem]">Paste your username</p>
              <p className="font-sans">No signup needed to preview your page.</p>
            </div>
          </div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-mono text-muted/80 font-semibold mt-2">02</p>
            </div>
            <div>
              <p className="font-display text-[2rem]">We read your public repos</p>
              <p className="font-sans">Languages, Activity, collaboration and README quality.</p>
            </div>
          </div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-mono text-muted/80 font-semibold mt-2">03</p>
            </div>
            <div>
              <p className="font-display text-[2rem]">Your score and rank appear</p>
              <p className="font-sans">Four signals, explained line by line.</p>
            </div>
          </div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-mono text-muted/80 font-semibold mt-2">04</p>
            </div>
            <div>
              <p className="font-display text-[2rem]">Share one link</p>
              <p className="font-sans">For recruiters, internships and applications.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-[4rem] font-display justify-self-center">Everything a recruiter <span className="italic">looks for.</span></p>
        <div className="grid grid-cols-3">
          <div>
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
              <p className="text-[0.8rem]"></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
