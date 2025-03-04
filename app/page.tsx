import ScrollLink from "@/components/ScrollLink";
import Image from "next/image";
import HomeSmiley from "@/public/images/HomeSmiley";
import Projects from "@/components/Projects";
import ArrowTopRightBox from "@/public/icons/ArrowTopRightBox";
import Contact from "@/components/Contact";
import Home from "@/public/icons/Home";
import Envelope from "@/public/icons/Envelope";
import LinkedIn from "@/public/icons/LinkedIn";
import GitHub from "@/public/icons/GitHub";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div>
      <div id="home" className="max-w-[112rem] mx-auto px-8 flex flex-col min-h-screen">
        <header className="flex justify-between items-center">
          <h4 className="py-12 font-bold">Andrew Jowe</h4>
          <div className="py-12 flex gap-12 items-center">
            <ScrollLink href="#projects"><p>Projects</p></ScrollLink>
            <ScrollLink href="#"><p>Skills</p></ScrollLink>
            <ScrollLink href="#contact"><p>Contact</p></ScrollLink>
          </div>
        </header>
        <div className="flex-grow flex flex-col justify-center">
          <div className="flex md:flex-row flex-col gap-24 max-w-[96rem] mx-auto">
            <div className="flex-1">
              <h2 className="font-bold">Hi, it&#39;s Andrew. 😄</h2>
              <div className="pt-6"/>
              <h4 className="max-w-[48rem] font-semibold">Software Engineer crafting AI, databases, and API with
                scalability for
                user-friendly apps. 🚀</h4>
              <div className="pt-12"/>
              <div className="flex">
                <div className="flex flex-col items-center">
                  <div className="flex gap-6">
                    <ScrollLink href="#projects" className="button blue"><p>See Portfolio</p></ScrollLink>
                    <Link href="/AndrewJowe_Resume_CS.pdf" className="button"><p>Resume</p></Link>
                  </div>
                  <HomeSmiley/>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/images/home-decoration.svg" alt="" width={700} height={700} layout="responsive"/>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="bg-[url('/images/projects-bg.svg')] min-h-screen">
        <Projects/>
      </div>
      <div id="skills" className="px-8 flex flex-col justify-center items-center min-h-screen">
        <div className="flex md:flex-row flex-col gap-24 max-w-[96rem] mx-auto py-24">
          <div className="flex-1">
            <Skills/>
          </div>
          <div className="flex-1">
            <h1>Decoration Placeholder</h1>
          </div>
        </div>
      </div>
      <div id="contact" className="flex flex-col justify-center max-w-[96rem] mx-auto px-8 min-h-screen">
        <div className="flex justify-end">
          <Image src="/images/phone.svg" alt="" width={150} height={150} className="mr-12 mb-16 lg:mt-0 mt-16"/>
        </div>
        <div className="flex lg:flex-row flex-col gap-24">
          <div className="flex-1">
            <h1 className="font-bold">Contact Me:</h1>
            <a href="mailto:joweandrew@gmail.com">
              <h3 className="font-bold blue">joweandrew@gmail.com</h3>
              <div className="w-[36px] h-[36px] pl-2 text-blue"><ArrowTopRightBox/></div>
            </a>
            <div className="pt-16"/>
            <Image src="/images/goal-reached.svg" alt="" width={500} height={500} layout="responsive"/>
          </div>
          <div className="flex-1 flex-grow">
            <Contact/>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[150px] mb-[100px] gap-[48px] px-8 flex-wrap">
        <div className="flex justify-center items-center gap-[10px] p-[10px]">
          <div className="w-[24px] h-[24px] text-white"><Home/></div>
          <ScrollLink href="#home"><p>Home</p></ScrollLink>
        </div>
        <div className="flex justify-center items-center gap-[10px] p-[10px]">
          <div className="w-[24px] h-[24px] text-white"><Envelope/></div>
          <ScrollLink href="#contact"><p>Contact</p></ScrollLink>
        </div>
        <Link href="https://www.linkedin.com/in/andrewjowe/">
          <div className="flex justify-center items-center gap-[10px] p-[10px]">
            <div className="w-[21px] h-[21px] text-white"><LinkedIn/></div>
            <p>LinkedIn</p>
          </div>
        </Link>
        <Link href="https://github.com/random-logic">
          <div className="flex justify-center items-center gap-[10px] p-[10px]">
            <div className="w-[22px] h-[22px] text-white"><GitHub/></div>
            <p>GitHub</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
