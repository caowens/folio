import StyledBreak from "@/components/styled-break";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <>
      <Hero />
      <StyledBreak />
      <Experience />
      <TechStack />
      <Projects />
    </>
  );
}
