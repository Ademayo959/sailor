import Navbar from "@/components/Navbar"
export default function page() {
  return (
    <div className="bg-cream h-full">
      <Navbar />
      <div className="bg-[radial-gradient(#D8CFBB_1px,transparent_1px)] bg-[size:22px_22px] px-6 py-16 text-center max-sm:px-2">
        <div className="bg-card border border-muted/50 w-fit px-4 rounded-full py-1 justify-self-center mb-4 cursor-pointer">
          <p className="text-ink/80 text-[0.8rem] font-semibold font-sans">FAQS</p>
        </div>
        <div className="justify-self-center">
          <p className="font-display text-[6rem] w-[50rem] leading-25 max-lg:w-[98%] max-lg:mx-auto max-sm:text-[3.5rem] max-sm:leading-14"><span>Questions, </span><span className="text-orange italic">answered.</span></p>
        </div>
        <div className="mt-6">
          <p className="text-semibold font-sans text-muted text-[1.25rem] w-xl justify-self-center max-sm:text-[1.1rem] max-sm:w-full max-sm:px-2">The short version of how sailor works, what it reads, and how your score is handled.</p>
        </div>
        <div className="flex gap-3 items-center justify-self-center mt-8">
          <div className="bg-card border border-muted/20 px-4 py-2 w-fit rounded-full">
            <p>Getting started</p>
          </div>
          <div className="bg-card border border-muted/20 px-4 py-2 w-fit rounded-full">
            <p>Scoring</p>
          </div>
          <div className="bg-card border border-muted/20 px-4 py-2 w-fit rounded-full">
            <p>Ranks and privacy</p>
          </div>
        </div>
      </div>
    </div>
  )
};
