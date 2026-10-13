import "./styles/global.scss"
import Sidebar from "./sections/Sidebar/Sidebar.tsx";
import Header from "./components/header/Header.tsx";
import Hero from "./sections/Hero/Hero.tsx";

function App() {
  return (
    <>
        <Header />
        <Sidebar />
        <main>
            <Hero />
        </main>
    </>
  );
}

export default App