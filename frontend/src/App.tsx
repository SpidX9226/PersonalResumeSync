import "./styles/global.scss"
import Sidebar from "./sections/Sidebar/Sidebar.tsx";
import Header from "./components/header/Header.tsx";
import Hero from "./sections/Hero/Hero.tsx";
import About from "./sections/About/About.tsx";
import Skills from "./sections/Skills/Skills.tsx";
import HeroAnimated from "./sections/HeroAnimated/HeroAnimated.tsx";

function App() {
  return (
    <>
        <Header />
        <Sidebar />
        <main>
            <HeroAnimated />

            <About />
            <Skills />
        </main>
    </>
  );
}

export default App