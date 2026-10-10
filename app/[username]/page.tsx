import Image from "next/image"
import Link from "next/link"
import logo1 from "@/assets/logo-without-bg.png"
import banner from "@/assets/profile-banner.png"

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  html_url: string;
  created_at: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string;
  forks: number;
  homepage: string | null;
  html_url: string;
  created_at: string;
}

async function getUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json"
    }
  });
  if (res.status === 404) {
    throw new Error("User not found")
  }
  if (res.status === 403 || res.status === 429) {
    throw new Error("Rate limit exceeded")
  }
  if (!res.ok) {
    throw new Error(`Github error: ${res.status}`)
  }
  return res.json();
}

async function getRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  const repos = await res.json()
  console.log(repos)
  return repos
}

export default async function page({ params, }: { params: Promise<{ username: string }>; }) {
  const { username } = await params;

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No username provided.</p>
      </div>
    );
  }

  const user = await getUser(username);
  console.log(user)

  const repos = await getRepos(username)
  console.log(repos)
  //Total number of stars logic
  let totalStars = 0
  for (let i = 0; i<repos.length; i++) {
    totalStars += repos[i].stargazers_count
  }
  //Getting the top 3 repos
  const topRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0,3)
  //Getting the first repo year
  const oldestRepo = [...repos].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

  
  return (
    <div className="bg-cream h-full ">
      <div className="flex justify-between max-w-7xl items-center py-4 mx-auto">
        <Link href="/" className="flex gap-2 items-center cursor-pointer">
          <Image src={logo1} alt="Sailor logo" className="h-8 w-8 -mt-1.5 max-sm:h-8 max-sm:w-8" />
          <p className="font-display text-[2rem] max-sm:text-[1.8rem]">Sailor</p>
        </Link>
        <div className="px-3 py-2 rounded-full border border-muted/90 w-fit cursor-pointer">
          <p className="text-[0.9rem]">Copy page link</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div>
          <Image src={banner} alt="banner image" />
          <div className="ml-6 -mt-12">
            <Image src={user.avatar_url} width={128} height={128} alt="The user's profile picture" className="h-32 w-32 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[2.5rem] font-display">{user.name}</p>
            <div className="flex items-center gap-2 font-mono">
              <p>{user.login}</p>
              <div className="h-1 w-1 bg-black rounded-full"></div>
              <p>Fullstack Developer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-2 rounded-full bg-olive text-cream w-fit cursor-pointer">
              <p className="text-[0.9rem]">Get in Touch</p>
            </div>
            <Link href={user.html_url} className="px-3 py-2 rounded-full border border-muted/90 w-fit cursor-pointer">
              <p className="text-[0.9rem]">View on Github</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-8 my-4">
          <div>
            <p className="text-[2rem] font-mono">{user.public_repos}</p>
            <p className="font-mono text-[0.9rem] text-muted">REPOS</p>
          </div>
          <div>
            <p className="text-[2rem] font-mono">{user.followers}</p>
            <p className="font-mono text-[0.9rem] text-muted">FOLLOWERS</p>
          </div>
          <div>
            <p className="text-[2rem] font-mono">{totalStars}</p>
            <p className="font-mono text-[0.9rem] text-muted">STARS</p>
          </div>
          <div>
            <p className="text-[2rem] font-mono">00</p>
            <p className="font-mono text-[0.9rem] text-muted">DAYS STREAK</p>
          </div>
        </div>
        <div className="grid grid-cols-[65%_35%] gap-6">
          <div>
            <div className="border border-muted/20 px-8 py-6 rounded-2xl bg-card">
              <p className="font-mono text-orange text-[1rem] font-semibold mb-2">ABOUT</p>
              <p className="font-display text-[2rem] leading-9">{user.bio}.</p>
              <div className="flex gap-2 mb-2 mt-4">
                <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                  <p className="text-[0.8rem] max-sm:text-[0.7rem]">{user.location}</p>
                </div>
                <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                  <p className="text-[0.8rem] max-sm:text-[0.7rem]">[Company]</p>
                </div>
                <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                  <p className="text-[0.8rem] whitespace-nowrap max-sm:text-[0.7rem]">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-ink text-center rounded-2xl py-4">
              <p className="font-mono text-cream">SAILOR SCORE</p>
              <div className="relative h-[140px] w-[140px] justify-self-center my-2">
                <svg className="-rotate-90" width="140" height="140" viewBox="0 0 220 220">
                  <circle cx="110" cy="110" r="85" fill="none" stroke="#4A5236" strokeWidth="18" />
                  <circle cx="110" cy="110" r="85" fill="none" stroke="#FDBA8C" strokeWidth="18" strokeLinecap="round" strokeDasharray="534" strokeDashoffset="130" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[28px] font-semibold text-cream font-mono">
                    000
                  </span>
                </div>
              </div>
              <div className="bg-cream text-ink w-fit px-6 py-1.5 rounded-full justify-self-center">
                <p>Voyager</p>
              </div>
              <div className="flex gap-1 justify-self-center items-center hover:gap-2 transition-all cursor-pointer">
                <p className="text-cream text-[0.8rem] my-2">How is this calculated?</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-cream">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="my-16">
          <p className="font-mono text-orange text-[0.95rem] font-semibold">01 . SELECTED WORK</p>
          <p className="text-[3rem] font-display">Thing I've built.</p>
          <p className="font-sans text-[0.95rem] text-muted">Pulled from most-starred and most-recent repositories.</p>
          <div className="grid gap-6 mt-12">
            <div className="grid grid-cols-2 border border-muted/20 rounded-2xl bg-card">
              <div className="bg-sky">

              </div>
              <div className="p-6">
                <div className="bg-cream border border-muted/20 px-3 py-1.5 w-fit rounded-full flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[0.8rem]">Most starred</p>
                </div>
                <p className="text-[3rem] font-display">{topRepos[0].name}</p>
                <p className="text-muted font-sans">{topRepos[0].description || "No description provided"}</p>
                <div className="flex gap-2 mb-2 mt-4">
                  <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                    <p className="text-[0.8rem] max-sm:text-[0.7rem]">{topRepos[0].language}</p>
                  </div>
                  <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                    <p className="text-[0.8rem] max-sm:text-[0.7rem]">{topRepos[0].stargazers_count} stars</p>
                  </div>
                  <div className="border border-muted/20 py-1 px-3 rounded-2xl w-fit bg-cream">
                    <p className="text-[0.8rem] whitespace-nowrap max-sm:text-[0.7rem]">{topRepos[0].forks} forks</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-12">
                  <Link href={topRepos[0].homepage || `https://github.com/${username}`} className="px-4 py-1.5 rounded-full bg-olive text-cream w-fit cursor-pointer flex items-center gap-0">
                    <p className="text-[0.9rem]">Live site</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href={topRepos[0].html_url} className="px-4 py-1.5 rounded-full border border-muted/90 w-fit cursor-pointer flex items-center gap-0">
                    <p className="text-[0.9rem]">View Code</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid grid-rows-2 border border-muted/20 rounded-2xl">
                <div className="bg-pink-100 rounded-t-2xl">

                </div>
                <div className="p-6 bg-card rounded-b-2xl">
                  <div className="bg-cream border border-muted/20 px-3 py-1 w-fit rounded-full flex items-center gap-1">
                    <p className="text-[0.8rem]">Recent</p>
                  </div>
                  <p className="text-[2rem] font-display">{topRepos[1].name}</p>
                  <p className="text-muted font-sans">{topRepos[1].description || "No description provided"}</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1 text-muted">
                      <p>{topRepos[1].language}</p>
                      <div className="h-1 w-1 rounded-full bg-muted"></div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-4">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                        </svg>
                        <p>{topRepos[1].stargazers_count}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-muted gap-1 items-center cursor-pointer hover:text-ink transition-all">
                        <p className="text-[0.9rem]">Live</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex text-muted gap-1 items-center cursor-pointer hover:text-ink transition-all">
                        <p className="text-[0.9rem]">Code</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-2 border border-muted/20 rounded-2xl">
                <div className="bg-amber-50 rounded-t-2xl">

                </div>
                <div className="p-6 bg-card rounded-b-2xl">
                  <div className="bg-cream border border-muted/20 px-3 py-1 w-fit rounded-full flex items-center gap-1">
                    <p className="text-[0.8rem]">Recent</p>
                  </div>
                  <p className="text-[2rem] font-display">{topRepos[2].name}</p>
                  <p className="text-muted font-sans">{topRepos[2].description?.slice(0, topRepos[2].description.indexOf('.'))}</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1 text-muted">
                      <p>{topRepos[2].language}</p>
                      <div className="h-1 w-1 rounded-full bg-muted"></div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-4">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                        </svg>
                        <p>{topRepos[2].stargazers_count}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-muted gap-1 items-center cursor-pointer hover:text-ink transition-all">
                        <p className="text-[0.9rem]">Live</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex text-muted gap-1 items-center cursor-pointer hover:text-ink transition-all">
                        <p className="text-[0.9rem]">Code</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex items-center text-muted justify-self-center gap-1 hover:gap-2 transition-all cursor-pointer">
              <p>See all [{repos.length}] repositories on Github</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="my-14">
          <p className="font-mono text-orange text-[0.95rem] font-semibold">02 . STACK & ACTIVITY</p>
          <p className="text-[3rem] font-display">How I work.</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-muted/20 rounded-2xl p-6">
              <p className="font-display text-[1.8rem]">Languages</p>
              <div className="grid gap-2 my-1">
                <div className="flex justify-between text-muted items-center">
                  <p>[Languages 1]</p>
                  <p>[00%]</p>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="bg-orange h-2 w-[70%] rounded-full"></div>
                </div>
              </div>
              <div className="grid gap-2 my-1">
                <div className="flex justify-between text-muted items-center">
                  <p>[Languages 2]</p>
                  <p>[00%]</p>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="bg-olive h-2 w-[49%] rounded-full"></div>
                </div>
              </div>
              <div className="grid gap-2 my-1">
                <div className="flex justify-between text-muted items-center">
                  <p>[Languages 3]</p>
                  <p>[00%]</p>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="bg-olive h-2 w-[37%] rounded-full"></div>
                </div>
              </div>
              <div className="grid gap-2 my-1">
                <div className="flex justify-between text-muted items-center">
                  <p>[Languages 4]</p>
                  <p>[00%]</p>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="bg-olive h-2 w-[12%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-muted/20 rounded-2xl p-6">
              <p className="font-display text-[1.8rem]">Activity, last 12 months</p>
              <div className="grid grid-cols-12 gap-3 items-end">
                <div className="h-16 bg-muted/20 rounded-md"></div>
                <div className="h-15 bg-muted/20 rounded-md"></div>
                <div className="h-7 bg-muted/20 rounded-md"></div>
                <div className="h-19 bg-olive rounded-md"></div>
                <div className="h-22 bg-olive rounded-md"></div>
                <div className="h-11 bg-olive rounded-md"></div>
                <div className="h-14 bg-olive rounded-md"></div>
                <div className="h-8 bg-muted/20 rounded-md"></div>
                <div className="h-14 bg-olive rounded-md"></div>
                <div className="h-40 bg-orange rounded-md"></div>
                <div className="h-14 bg-olive rounded-md"></div>
                <div className="h-28 bg-orange rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-14">
          <p className="font-mono text-orange text-[0.95rem] font-semibold">03 . JOURNEY</p>
          <p className="text-[3rem] font-display">The path so far.</p>
          <div className="grid grid-cols-4 relative gap-8 my-8">
            <div className="grid gap-5">
              <div className="relative flex items-center">
                <span className="absolute top-0 z-2 left-0 w-3 h-3 rounded-full bg-olive" />
                <span className="absolute top-1.5 z-1 left-0 h-px w-full bg-muted" />
              </div>
              <div className="leading-7">
                <p className="text-muted font-mono text-[0.8rem] mt-2">{user.created_at.slice(0, 4)}</p>
                <p className="text-[1.7rem] font-display">Joined Github</p>
                <p className="text-muted font-sans">[Repo or detail]</p>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="relative flex items-center">
                <span className="absolute top-0 z-2 left-0 w-3 h-3 rounded-full bg-olive" />
                <span className="absolute top-1.5 z-1 left-0 h-px w-full bg-muted" />
              </div>
              <div className="leading-7">
                <p className="text-muted font-mono text-[0.8rem] mt-2">{oldestRepo[0].created_at.slice(0, 4)}</p>
                <p className="text-[1.7rem] font-display">First Repository</p>
                <p className="text-muted font-sans">{oldestRepo[0].name}</p>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="relative flex items-center">
                <span className="absolute top-0 z-2 left-0 w-3 h-3 rounded-full bg-olive" />
                <span className="absolute top-1.5 z-1 left-0 h-px w-full bg-muted" />
              </div>
              <div className="leading-7">
                <p className="text-muted font-mono text-[0.8rem] mt-2">{topRepos[0].created_at.slice(0, 4)}</p>
                <p className="text-[1.7rem] font-display">Most Starred Project</p>
                <p className="text-muted font-sans">{topRepos[0].name}</p>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="relative flex items-center">
                <span className="absolute top-0 z-2 left-0 w-3 h-3 rounded-full bg-olive" />
                <span className="absolute top-1.5 z-1 left-0 h-px w-full bg-muted" />
              </div>
              <div className="leading-7">
                <p className="text-muted font-mono text-[0.8rem] mt-2">{oldestRepo[oldestRepo.length - 1].created_at.slice(0, 4)}</p>
                <p className="text-[1.7rem] font-display">Latest Work</p>
                <p className="text-muted font-sans">{oldestRepo[oldestRepo.length - 1].name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-olive-deep rounded-2xl py-8 px-12 flex justify-between items-center">
          <div className="grid">
            <p className="text-[3rem] text-cream font-display justify-self-center">Find me <span className="italic">elsewhere.</span></p>
            <div className="flex gap-2">
              <div className="text-cream border border-cream px-4 py-1.5 w-fit rounded-full cursor-pointer">
                <p className="text-[0.8rem]">Website</p>
              </div>
              <div className="text-cream border border-cream px-4 py-1.5 w-fit rounded-full cursor-pointer">
                <p className="text-[0.8rem]">Email</p>
              </div>
              <div className="text-cream border border-cream px-4 py-1.5 w-fit rounded-full cursor-pointer">
                <p className="text-[0.8rem]">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="bg-cream text-olive-deep px-4 py-2 rounded-full w-fit cursor-pointer">
            <p className="font-semibold">Get in touch</p>
          </div>
        </div>
        <div className="text-center my-6">
          <p className="text-muted">Made with <span className="italic font-display text-ink text-[1.4rem] cursor-pointer">Sailor</span></p>
        </div>
      </div>
    </div>
  )
};