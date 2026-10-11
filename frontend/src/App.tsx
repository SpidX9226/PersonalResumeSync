import "./styles/global.scss"
import Sidebar from "./sections/Sidebar/Sidebar.tsx";
import Header from "./components/header/Header.tsx";

function App() {
  return (
    <>
        <Header />
        <Sidebar />
    </>
  );
}

export default App