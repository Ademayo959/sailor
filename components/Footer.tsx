import Link from 'next/link';
import Image from 'next/image';
import sunset from "@/assets/footer.png";
import logo1 from "@/assets/logo-without-bg.png"

export default function Footer() {
  return (
    <footer className="relative w-full bg-cream text-ink pt-20 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col items-start pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image src={logo1} alt="Sailor logo" className="h-10 w-9 -mt-1.5" />
              <span className="font-display text-2xl font-normal tracking-tight">Sailor</span>
            </Link>
            <p className="text-[15px] font-sans leading-relaxed text-muted mb-6">
              A clear portfolio from the GitHub work you have already shipped—built for student developers ready to stand out.
            </p>
            <a href="mailto:ademayo234@gmail.com" className="text-orange font-sans font-medium text-[15px] inline-flex items-center gap-1 hover:underline underline-offset-4">
              hello@sailor.dev
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
          <div>
            <h4 className="font-display text-xl mb-6">Product</h4>
            <ul className="space-y-3 text-[15px] font-sans text-muted">
              <li><Link href="/scoring" className="hover:text-ink transition-colors">How scoring works</Link></li>
              <li><Link href="/ranks" className="hover:text-ink transition-colors">Ranks</Link></li>
              <li><Link href="/preview" className="hover:text-ink transition-colors">Portfolio preview</Link></li>
              <li><Link href="/faq" className="hover:text-ink transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-6">For builders</h4>
            <ul className="space-y-3 text-[15px] font-sans text-muted">
              <li><Link href="/guides" className="hover:text-ink transition-colors">Profile guides</Link></li>
              <li><Link href="/privacy" className="hover:text-ink transition-colors">GitHub privacy</Link></li>
              <li><Link href="/students" className="hover:text-ink transition-colors">Student developers</Link></li>
              <li><Link href="/feedback" className="hover:text-ink transition-colors">Share feedback</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-6">Stay in the loop</h4>
            <p className="text-[15px] font-sans leading-relaxed text-muted mb-4">
              Small notes on shipping better work and showing it clearly.
            </p>
            <form className="flex w-full max-w-[280px]">
              <input type="email" placeholder="Email address" className="w-full px-4 py-2.5 rounded-l-full border border-r-0 border-ink/10 bg-card text-[15px] font-sans text-ink placeholder:text-muted/70 focus:outline-none focus:border-orange transition-colors" />
              <button type="submit" className="bg-orange text-cream px-5 py-2.5 rounded-r-full hover:bg-orange/90 transition-colors flex items-center justify-center" aria-label="Subscribe">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-px bg-ink/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] font-sans text-muted pb-8">
          <p>© 2026 Sailor. Built from public work, with consent.</p>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-ink transition-colors">Terms</Link>
              <Link href="/status" className="hover:text-ink transition-colors">Status</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-ink/10 pl-6 ml-2">
              <Link href="https://github.com/Ademayo959/sailor" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  fill={"currentColor"} viewBox={"0 0 24 24"}>
                  <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                  fill={"currentColor"} viewBox={"0 0 24 24"}>
                  <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 md:h-80 lg:h-[400px] mt-4">
        <Image src={sunset} alt="Sailor ships at sunset" fill className="object-cover object-middle" priority={false}/>
        <div className="absolute inset-x-0 top-0 h-32 md:h-48 lg:h-56 bg-gradient-to-b from-cream via-cream/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-6 flex justify-between px-6 text-[14px] font-sans text-ink/70 z-20 pointer-events-none">
          <span>Keep sailing.</span>
          <span>Your commits tell a story. Now make it easy to share.</span>
        </div>
      </div>
    </footer>
  );
}