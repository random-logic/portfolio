import ScrollLink from "@/components/ScrollLink";
import Image from "next/image";
import HomeSmiley from "@/public/images/HomeSmiley";

export default function Home() {
  return (
    <div>
      <div className="max-w-[112rem] mx-auto px-8 flex flex-col h-screen">
        <header className="flex justify-between items-center">
          <h4 className="py-12 font-bold">Andrew Jowe</h4>
          <div className="py-12 flex gap-12 items-center">
            <ScrollLink href="#projects"><p>Projects</p></ScrollLink>
            <p>Skills</p>
            <p>Contact</p>
          </div>
        </header>
        <div className="flex-grow">
          <div className="flex items-center h-full">
            <div className="flex gap-24 max-w-[96rem] mx-auto">
              <div className="flex-1">
                <h2>Hi, it&#39;s Andrew. 😄</h2>
                <div className="pt-6"/>
                <h4 className="max-w-[48rem]">Software Engineer crafting AI, databases, and API with scalability for
                  user-friendly apps. 🚀</h4>
                <div className="pt-12"/>
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-6">
                      <ScrollLink href="#projects" className="button blue"><p>See Portfolio</p></ScrollLink>
                      <button><p>Resume</p></button>
                    </div>
                    <HomeSmiley />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Image src="/images/home-decoration.svg" alt="" width={700} height={700} layout="responsive"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="bg-[url('/projects-bg.svg')] min-h-screen">
        <div className="max-w-[112rem] mx-auto px-8 py-24">
          <h1>My recent <span className="blue">projects</span></h1>

        </div>
      </div>
    </div>
  );
}
