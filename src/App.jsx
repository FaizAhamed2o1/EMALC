import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GetLeads from "./components/GetLeads/GetLeads";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Pricing from "./components/Pricing/Pricing";
import Tetimonials from "./components/Tetimonials/Tetimonials";

function App() {
  return (
    <>
      <Header></Header>

      <Hero></Hero>

      <About></About>

      <Overview></Overview>

      <Features></Features>

      <Pricing></Pricing>

      <Tetimonials></Tetimonials>

      <GetLeads></GetLeads>

      <Footer></Footer>
    </>
  );
}

export default App;
