import "./App.css";
import Menu from "./components/Menu";
import SearchMenu from "./components/SearchMenu";
import { Outlet } from "react-router-dom";
import EmblaCarousel from "./components/Carusel";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <>
      <Menu />
      <SearchMenu />
      <Outlet />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />{" "}
    </>
  );
}

export default App;
