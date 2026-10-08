import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="bg-cream h-full">
      <Navbar />
      <div className="bg-[radial-gradient(#D8CFBB_1px,transparent_1px)] bg-[size:22px_22px] px-6 py-16 text-center max-sm:px-2">
        <div className="bg-card border border-muted/50 w-fit px-4 rounded-full py-1 justify-self-center mb-4 cursor-pointer">
          <p className="text-ink/80 text-[0.8rem] font-semibold font-sans">How scoring works</p>
        </div>
        <div className="justify-self-center">
          <p className="font-display text-[6rem] w-[50rem] leading-25 max-lg:w-[98%] max-lg:mx-auto max-sm:text-[3.5rem] max-sm:leading-14"><span>One number, </span><span className="text-orange italic">fully explained.</span></p>
        </div>
        <div className="mt-6">
          <p className="text-semibold font-sans text-muted text-[1.25rem] w-xl justify-self-center max-sm:text-[1.1rem] max-sm:w-full max-sm:px-2">Your Sailor Score blends four signals. Each one is built so that real work counts and shortcuts don't.</p>
        </div>
        <div className="bg-card max-w-4xl mt-8 py-6 border mx-auto border-muted/20 rounded-2xl flex items-center gap-4 justify-center">
          <p className="text-[2.5rem] font-display">Score</p>
          <p className="text-muted">=</p>
          <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit">
            <p className="text-[0.8rem] max-sm:text-[0.7rem]">Consistency [00%]</p>
          </div>
          <p className="text-muted">+</p>
          <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit">
            <p className="text-[0.8rem] max-sm:text-[0.7rem]">Collaboration [00%]</p>
          </div>
          <p className="text-muted">+</p>
          <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit">
            <p className="text-[0.8rem] max-sm:text-[0.7rem]">Substance [00%]</p>
          </div>
          <p className="text-muted">+</p>
          <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit">
            <p className="text-[0.8rem] max-sm:text-[0.7rem]">Recency [00%]</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8 my-12">
        <div className="border border-muted/20 p-6 bg-card rounded-2xl">
          <p className="text-orange font-mono font-semibold">01</p>
          <p className="text-[2.5rem] font-display">Consistency</p>
          <p className="font-sans leading-5 text-muted">How many different weeks you were active over the last year. Spread-out effort score higher than one big spike.</p>
          <hr className="text-muted/20 w-full my-3" />
          <p className="text-muted text-[0.9rem]"><span className="font-semibold text-ink">Hard to fake: </span>a script can pad commits in a day, not across a year.</p>
        </div>
        <div className="border border-muted/20 p-6 bg-card rounded-2xl">
          <p className="text-orange font-mono font-semibold">02</p>
          <p className="text-[2.5rem] font-display">Collaboration</p>
          <p className="font-sans leading-5 text-muted">Merged pull request and reviews in repos you don't own. Working with other peopleshows more than working alone.</p>
          <hr className="text-muted/20 w-full my-3" />
          <p className="text-muted text-[0.9rem]"><span className="font-semibold text-ink">Hard to fake: </span>someone else has to accept your work.</p>
        </div>
        <div className="border border-muted/20 p-6 bg-card rounded-2xl">
          <p className="text-orange font-mono font-semibold">03</p>
          <p className="text-[2.5rem] font-display">Substance</p>
          <p className="font-sans leading-5 text-muted">README quality, real code size and stars. Stars are weighted on a log scale, so the 1,000th matters less than the 5th.</p>
          <hr className="text-muted/20 w-full my-3" />
          <p className="text-muted text-[0.9rem]"><span className="font-semibold text-ink">Hard to fake: </span>empty repos and forks add nothing.</p>
        </div>
        <div className="border border-muted/20 p-6 bg-card rounded-2xl">
          <p className="text-orange font-mono font-semibold">04</p>
          <p className="text-[2.5rem] font-display">Recency</p>
          <p className="font-sans leading-5 text-muted">Recent work counts more than work from years ago, so the score reflects who you are now </p>
          <hr className="text-muted/20 w-full my-3" />
          <p className="text-muted text-[0.9rem]"><span className="font-semibold text-ink">Fair to bursts: </span>a quiet exam month won't wipe out your record.</p>
        </div>
      </div>
      <div className="bg-sky my-12 max-w-7xl py-18 px-24 grid grid-cols-2 mx-auto rounded-4xl max-lg:mx-6 max-sm:mx-3 max-lg:px-12 max-lg:py-12 max-sm:px-4 max-sm:rounded-2xl">
          <div>
            <p className="font-display text-[3rem]">What <span className="italic">doesn't</span> count</p>
            <p className="w-[70%] text-muted font-sans">We discount anything that inflates numbers without adding value</p>
          </div>
          <div className="grid gap-4">
            <div className="border border-muted/20 bg-card px-4 py-3 w-full rounded-2xl">
              <p className="font-sans text-ink">Empty or auto-generated repositories</p>
            </div>
            <div className="border border-muted/20 bg-card px-4 py-3 w-full rounded-2xl">
              <p className="font-sans text-ink">Forks you never changed</p>
            </div>
            <div className="border border-muted/20 bg-card px-4 py-3 w-full rounded-2xl">
              <p className="font-sans text-ink">One-character commits and bot activity</p>
            </div>
            <div className="border border-muted/20 bg-card px-4 py-3 w-full rounded-2xl">
              <p className="font-sans text-ink">More than a capped amount in a single day</p>
            </div>
          </div>
      </div>
      <div className="max-w-6xl mx-auto pb-20 max-lg:px-3">
        <p className="text-[4rem] font-display justify-self-center">Your <span className="italic">ranks.</span></p>
        <p className="font-sans text-[1.2rem] justify-self-center w-200 text-center text-muted max-sm:text-[1rem] max-sm:text-center">Fixed thresholds at first, percentiles once enough people have joined, so "top 10%" actually means something.</p>
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
        <p className="font-sans text-[0.9rem] justify-self-center w-200 text-center text-muted max-sm:text-[1rem] max-sm:text-center">Private contributions only count if you opt in on Github ,so some scores may read lower than the real work</p>
      </div>
      <div className="bg-olive-deep max-w-7xl py-12 px-24 mx-auto rounded-4xl max-lg:mx-6 max-sm:px-4 max-sm:py-8 max-sm:mx-3">
        <p className="text-[4rem] font-display justify-self-center my-6 text-white max-sm:text-[3.5rem] max-sm:leading-15">Find your rank, <span className="italic">Share your page.</span></p>
        <div className="bg-card px-6 py-3 cursor-pointer text-olive-deep w-fit rounded-full justify-self-center">
          <p>See my sailor score</p>
        </div>
      </div>

      <Footer />
    </div>
  )
};
