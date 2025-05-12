import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Loader from "./Components/Loader/Loader";
import About from "./Components/About/About";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";
<<<<<<< HEAD
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
=======
>>>>>>> b11a389f0f93ed6a429ab55a1aa17cb5c50a049b
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
<<<<<<< HEAD

        <div id="team">
          <Team/>
        </div>

        <div id="contact">
<Contact/>
        </div>
=======
>>>>>>> b11a389f0f93ed6a429ab55a1aa17cb5c50a049b
      </div>
    </div>
  );
}

export default App;
