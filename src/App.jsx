import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
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

        <div id="team">
          <Team />
        </div>
<div>
  <Newsletter/>
</div>
        <div id="contact">
          <Contact />
        </div>

        <div id="footer">
          <Footer/>
        </div>

        <div>
          <Newsletter/>
        </div>

        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
