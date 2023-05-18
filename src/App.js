import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AfterHero from "./components/AfterHero";
import Cards from "./components/Cards";
import Activity from "./components/Activity";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="resources">
        <AfterHero />
      </Element>
      <Element name="pricing">
        <Cards />
      </Element>
      <Element name="activities">
        <Activity />
      </Element>

      <Element name="about">
        <Footer />
      </Element>
    </>
  );
}

export default App;
