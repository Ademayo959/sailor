import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import profile from "@/assets/profile.png"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-cream h-full">
      <Navbar />
      <div className="bg-[radial-gradient(#D8CFBB_1px,transparent_1px)] bg-[size:22px_22px] px-6 py-16 text-center max-sm:px-2">
        <div className="bg-card border border-muted/50 w-fit px-4 rounded-full py-1 justify-self-center mb-4 cursor-pointer">
          <p className="text-ink/80 text-[0.8rem] font-semibold font-sans">Free for Student developers</p>
        </div>
        <div className="justify-self-center">
          <p className="font-display text-[6rem] w-[50rem] leading-25 max-lg:w-[98%] max-lg:mx-auto max-sm:text-[3.5rem] max-sm:leading-14"><span>Your Github, turned into a </span><span className="text-orange italic">portfolio worth sharing.</span></p>
        </div>
        <div className="mt-4">
          <p className="text-semibold font-sans text-muted text-[1.25rem] w-xl justify-self-center max-sm:text-[1.1rem] max-sm:w-full max-sm:px-2">Type a username. Get a clean portfolio page and a Sailor Score that shows how you actually build.</p>
          <div className="bg-card max-w-2xl mt-6 pl-6 py-2 pr-2 h-14 shadow-md justify-between flex rounded-full mx-auto my-3 max-sm:pl-4 max-sm:h-12">
            <input type="text" placeholder="github.com/ username" className="w-[70%] font-sans outline-0 placeholder:text-muted max-sm:w-full" />
            <div className="bg-olive w-fit px-5 py-2 text-white rounded-full cursor-pointer max-sm:px-3 max-sm:py-1 flex items-center">
              <p className="font-sans max-sm:text-[0.8rem] whitespace-nowrap">See my Sailor profile</p>
            </div>
          </div>
        </div>
        <p className="text-[0.9rem] text-muted">[895] developers already charted</p>
      </div>
      <div className="bg-sky max-w-5xl py-15 px-32 mx-auto rounded-3xl max-lg:mx-6 max-lg:px-12 max-lg:py-10 max-sm:px-2 max-sm:py-4 max-sm:mx-2">
        <div className="bg-card border border-muted/50 py-6 rounded-2xl px-6 flex justify-between items-center max-sm:grid max-sm:p-4">
          <div className="flex gap-3 max-sm:grid">
            <div>
              <Image src={profile} alt="Profile picture" className="h-28 w-28" />
            </div>
            <div>
              <p className="font-display text-[2rem]">[Your Name]</p>
              <p className="text-[0.9rem] tracking-tighter font-mono">@[username] . [Your role]</p>
              <div className="flex gap-2 my-2">
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem] max-sm:text-[0.7rem]">[Language]</p>
                </div>
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem] max-sm:text-[0.7rem]">[Language]</p>
                </div>
                <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit">
                  <p className="text-[0.8rem] whitespace-nowrap max-sm:text-[0.7rem]">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[140px] w-[140px] max-sm:hidden">
            <svg className="-rotate-90" width="140" height="140" viewBox="0 0 220 220">
              <circle cx="110" cy="110" r="85" fill="none" stroke="#e8e2d3" strokeWidth="18" />
              <circle cx="110" cy="110" r="85" fill="none" stroke="#C2491D" strokeWidth="18" strokeLinecap="round" strokeDasharray="534" strokeDashoffset="130" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[28px] font-semibold text-ink font-mono">
                000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-6xl mx-auto my-20 max-sm:grid-cols-1 max-lg:px-3">
        <div>
          <p className="font-display text-[4rem] w-100 leading-16 max-lg:text-[3.5rem] max-sm:text-[2.5rem] max-sm:w-full max-sm:leading-11"><span>Hours of portfolio work,</span><span className="italic">done in seconds</span></p>
          <p className="font-sans text-[1.2rem] w-130 my-4 max-lg:w-full max-sm:text-[0.95rem]">No templates to fill in. Sailor reads your public work and builds the page for you.</p>
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
      <div className="max-w-6xl mx-auto pb-20 max-lg:px-3">
        <p className="text-[4rem] font-display justify-self-center mb-10 max-lg:text-[3.5rem] max-sm:text-[2.5rem] max-sm:w-full max-sm:leading-11">Everything a recruiter <span className="italic">looks for.</span></p>
        {/**Grid starts here */}
        <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-4">
          <div className="bg-card p-6 border border-muted/20 rounded-2xl">
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit mb-3 cursor-pointer">
              <p className="text-[1rem]">Experience</p>
            </div>
            <div className="font-sans">
              <p className="text-[1.1rem] mb-1">[Role] . [Year]</p>
              <p className="text-[1.1rem] mb-1">[Role] . [Year]</p>
              <p className="text-[1.1rem] mb-1 text-muted">[Role] . [Year]</p>
            </div>
          </div>
          <div className="bg-card p-6 border border-muted/20 rounded-2xl">
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit mb-3 cursor-pointer">
              <p className="text-[1rem]">Currently Building</p>
            </div>
            <div className="flex-col">
              <p className="text-[2.6rem] font-display my-2">[Project] Name</p>
              <div className="bg-muted/20 w-full rounded-full h-2">
                <div className="bg-olive w-[60%] rounded-full h-2"></div>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 border border-muted/20 rounded-2xl">
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit mb-3 cursor-pointer">
              <p className="text-[1rem]">Top Repository</p>
            </div>
            <div className="flex-col">
              <p className="text-[2.6rem] font-display my-2">[Repo name]</p>
              <div className="flex">
                <p className="font-mono text-muted">[Language] . ★ 0</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 border border-muted/20 rounded-2xl col-span-2 max-sm:col-span-1">
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit mb-3 cursor-pointer">
              <p className="text-[1rem]">Top Repository</p>
            </div>
            <div className="grid grid-cols-10 gap-3 items-end">
              <div className="h-10 bg-muted/20 rounded-md"></div>
              <div className="h-15 bg-muted/20 rounded-md"></div>
              <div className="h-7 bg-muted/20 rounded-md"></div>
              <div className="h-19 bg-olive rounded-md"></div>
              <div className="h-22 bg-olive rounded-md"></div>
              <div className="h-11 bg-olive rounded-md"></div>
              <div className="h-14 bg-olive rounded-md"></div>
              <div className="h-8 bg-muted/20 rounded-md"></div>
              <div className="h-14 bg-olive rounded-md"></div>
              <div className="h-28 bg-orange rounded-md"></div>
            </div>
          </div>
          <div className="bg-card p-6 border border-muted/20 rounded-2xl justify-items-center text-center flex-col">
            <div className="border border-muted/50 py-1 px-3 rounded-2xl w-fit mb-3 flex items-center gap-2 cursor-pointer">
              <div className="h-2 w-2 bg-black rounded-full"></div>
              <p className="text-[1rem]">Open to work</p>
            </div>
            <div className="flex-col">
              <p className="text-[2.6rem] font-display my-2 justify-self-center">Book a Call</p>
              <div className="bg-ink justify-self-center flex px-6 text-white h-12 w-fit rounded-full items-center cursor-pointer transition-all duration-500 hover:bg-card hover:border hover:border-ink hover:text-ink">
                <p>Get in Touch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pb-20 max-lg:px-3">
        <p className="text-[4rem] font-display justify-self-center">Climb the <span className="italic">ranks.</span></p>
        <p className="font-sans text-[1.2rem] justify-self-center text-muted max-sm:text-[1rem] max-sm:text-center">Fixed thresholds at first, percentiles once enough people have joined.</p>
        <div className="grid grid-cols-4 gap-8 my-12 max-sm:grid-cols-1 max-sm:gap-4">
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-mono text-muted">[100-299]</p>
            <p className="font-display text-[2.5rem]">Deckhand</p>
          </div>
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-mono text-muted">[300-499]</p>
            <p className="font-display text-[2.5rem]">Mariner</p>
          </div>
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-mono text-muted">[500-749]</p>
            <p className="font-display text-[2.5rem]">Navigator</p>
          </div>
          <div className="bg-ink text-white border border-muted/20 p-5 rounded-2xl">
            <p className="font-mono text-white/70">[750 and above]</p>
            <p className="font-display text-[2.5rem]">Voyager</p>
          </div>
        </div>
      </div>
      <div className="bg-sky max-w-7xl grid py-32 px-24 mx-auto rounded-4xl max-lg:mx-6 max-sm:mx-3 max-lg:px-12 max-lg:py-12 max-sm:px-4 max-sm:rounded-2xl">
        <p className="text-[4rem] font-display justify-self-center max-sm:leading-15">Hard to game, <span className="italic">easy to trust.</span></p>
        <div className="grid grid-cols-3 gap-8 my-8 max-sm:grid-cols-1 max-sm:gap-4">
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-display text-[2.1rem]">Consistency over volume</p>
            <p className="font-sans text-muted leading-6">Active weeks across the year beat a burst of commits in one night.</p>
          </div>
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-display text-[2.1rem]">Collaboration counts</p>
            <p className="font-sans text-muted leading-6">Merged pull requests and reviews in other people's repos carry weight.</p>
          </div>
          <div className="bg-card border border-muted/20 p-5 rounded-2xl">
            <p className="font-display text-[2.1rem]">You see why</p>
            <p className="font-sans text-muted leading-6">Every point is explainedon your page, so the score can be trusted.</p>
          </div>
        </div>
        <Link href="/scoring" className="bg-olive inline-block px-6 py-3 cursor-pointer text-white w-fit rounded-full justify-self-center">
          <p>Read how scoring works</p>
        </Link>
      </div>
      <div className="max-w-3xl mx-auto py-12 max-lg:px-3">
        <p className="text-[4rem] font-display justify-self-center my-6 max-sm:leading-15">Questions, <span className="italic">answered.</span></p>
        <div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-display text-[2rem]">Do I need to sign up?</p>
              <p className="font-sans text-muted">No. Enter a username to preview. Sign up with Github to publish and edit.</p>
            </div>
          </div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-display text-[2rem]">What about private repos?</p>
              <p className="font-sans text-muted">Private work only counts if you opt to share it with Github.</p>
            </div>
          </div>
          <div className="border-t border-muted/20 py-5 flex gap-2">
            <div>
              <p className="font-display text-[2rem]">Can I cheat my score?</p>
              <p className="font-sans text-muted">Empty repos, forks and tiny commits are discounted, and caps to stop them.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-olive-deep max-w-7xl py-12 px-24 mx-auto rounded-4xl max-lg:mx-6 max-sm:px-4 max-sm:py-8 max-sm:mx-3">
        <p className="text-[4rem] font-display justify-self-center my-6 text-white max-sm:text-[3.5rem] max-sm:leading-15">Find your rank, <span className="italic">Share your page.</span></p>
        <div className="bg-card max-w-2xl mt-6 pl-6 py-2 pr-2 h-14 shadow-md justify-between flex rounded-full mx-auto my-3 max-sm:pl-4 max-sm:h-12">
          <input type="text" placeholder="github.com/ username" className="w-[70%] font-sans outline-0 placeholder:text-muted max-sm:w-full" />
          <div className="bg-olive w-fit px-5 py-2 text-white rounded-full cursor-pointer max-sm:px-3 max-sm:py-1 flex items-center">
            <p className="font-sans max-sm:text-[0.8rem] whitespace-nowrap">See my Sailor profile</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
