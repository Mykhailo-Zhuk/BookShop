import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/Menu";
import SearchMenu from "./components/SearchMenu";
// import Carusel from "../src/components/Carusel";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <SearchMenu />
      {/* <Carusel /> */}
    </>
  );
}

export default App;
