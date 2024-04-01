import About from "@/components/About"
import Contact from "@/components/Contact"
import { GridBackgroundDemo } from "@/components/Demo"
import Home from "@/components/Home"
import Projects from "@/components/Projects"
import Service from "@/components/Service"
import Skill from "@/components/Skill"
import { TracingBeam } from "@/components/ui/tracing-beam"
export default function page() {
  return (
    <div className=" ">

      <Home />
      <TracingBeam className="px-6">
        <About />
        <Projects />
        <Skill />
        <Service />
        <Contact />
      </TracingBeam>
    </div>
  )
}
