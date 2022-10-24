import "./App.css";
import NavbarComp from "./components/NavbarComp";
import MarqueePage from "./view/Marquee";
import MainSection from "./view/MainSection";
import GatherCard from "./view/GatherCard";
import Action from "./view/Action";
import VideoSlider from "./view/VideoSlider";
import Footer from "./view/Footer";
import Profisional from "./view/ProfisionalIdea";
import Diagnost from "./view/Diagnost";
import SaleLink from "./view/SaleLink";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <MainSection />
      <MarqueePage />
      <GatherCard />
      <Action />
      <VideoSlider />
      <Profisional />
      <Diagnost />
      <SaleLink />
      <Footer />
    </div>
  );
}

export default App;
