import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Service from './Components/Service/Service';
import "./App.css";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Order from './Components/Order/Order';
import Portfolio from './Components/Portfolio/Portfolio'
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Loader />
      <div className={`content ${isLoaded ? "content-loaded" : ""}`}>
        <ScrollToTop />
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
          <div id="service">
          <Service />
        </div>
          <div id="order">
          <Order />
        </div>
         <div id="port">
          <Portfolio/>
        </div>
        <div id="team">
          <Team/>
        </div>

        <div id="contact">
<Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
