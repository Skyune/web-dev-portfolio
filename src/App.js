import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavBar3 } from "./components/NavBar3";


import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParallaxIlustration } from "./components/ParallaxIlustration.tsx";

function App() {

  
  return (
    <div className="App">

      <NavBar3 />
      <ParallaxIlustration/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
