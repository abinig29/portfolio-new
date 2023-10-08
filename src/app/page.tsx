import About from "@/components/About"
import Contact from "@/components/Contact"
import Home from "@/components/Home"
import Projects from "@/components/Projects"
import Skill from "@/components/Skill"
export default function page() {
  return (
    <div className=" ">
      <Home/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
    </div>
  )
}
