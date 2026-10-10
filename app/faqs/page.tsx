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
      <div className="max-w-4xl mx-auto">
        <div>
          <p className="text-orange font-mono font-semibold my-2">GETTING STARTED</p>
          <div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Do I need to sign up?</p>
                <p className="font-sans text-muted">No. Enter a username to preview your page. Sign up with Github to publish and edit.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Is sailor free?</p>
                <p className="font-sans text-muted">Yes, it's free.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Who can see my page?</p>
                <p className="font-sans text-muted">Only people you share the link with. You can uppublish it whenever you like</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-orange font-mono font-semibold my-2">SCORING</p>
          <div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">How is my score worked out?</p>
                <p className="font-sans text-muted">No. Enter a username to preview. Sign up with Github to publish and edit.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Can I cheat my score?</p>
                <p className="font-sans text-muted">Private work only counts if you opt to share it with Github.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Why is my score lower than my real effort?</p>
                <p className="font-sans text-muted">Empty repos, forks and tiny commits are discounted, and caps to stop them.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">How often does it update?</p>
                <p className="font-sans text-muted">[Refresh frequency]</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-orange font-mono font-semibold my-2">RANKS AND PRIVACY</p>
          <div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">How do ranks work?</p>
                <p className="font-sans text-muted">No. Enter a username to preview. Sign up with Github to publish and edit.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">What data do you read?</p>
                <p className="font-sans text-muted">Private work only counts if you opt to share it with Github.</p>
              </div>
            </div>
            <div className="border-t border-muted/20 py-5 flex gap-2">
              <div>
                <p className="font-display text-[2rem]">Can I delete my page and data?</p>
                <p className="font-sans text-muted">Empty repos, forks and tiny commits are discounted, and caps to stop them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
