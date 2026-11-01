import "./styles/global.scss"
import Sidebar from "./sections/Sidebar/Sidebar.tsx";
import Header from "./components/header/Header.tsx";
import About from "./sections/About/About.tsx";
import Skills from "./sections/Skills/Skills.tsx";
import HeroAnimated from "./sections/HeroAnimated/HeroAnimated.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Contacts from "./sections/Contacts/Contacts.tsx";

function App() {
  return (
    <>
        <Header />
        <Sidebar />
        <main>
            <HeroAnimated />

            <About />
            <Skills />
            <Projects />
            <Contacts />
        </main>
    </>
  );
}

export default App