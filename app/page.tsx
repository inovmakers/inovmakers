import About from "./components/home/About";
import Awards from "./components/home/Awards";
import Contact from "./components/home/Contact";
import Credibility from "./components/home/Credibility";
import HeroNew from "./components/home/HeroNew/HeroNew";
import Services from "./components/home/Services";
import Steam from "./components/home/Steam";
import Team from "./components/home/Team";

export default function Home() {
  return (
    <main>
      <HeroNew />
      <About />
      <Credibility />
      <Services />
      <Steam />
      <Team />
      <Awards />
      <Contact />
    </main>
  );
}
