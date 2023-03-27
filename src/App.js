import Companies from "./Components/Companies";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import BacktoTop from './Components/BacktoTop';


function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 1500,
      reset: false,
    });
    sr.reveal(
      `
        #hero,
        #companies,
        #guide,
        #properties,
        #details,
        #getstarted,
        #getstarted-img,
        #footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  



  return (
    <>
      <Hero />
      <BacktoTop/>
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
