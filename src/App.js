import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Blog from "./components/blog";  

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="section-spacing">
        <Skills />
      </div>
      <div className="section-spacing">
        <Certificates />
      </div>
      <Projects />
      <Blog />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
