import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Skills } from "./features/Skills/Skills";
import { Projects } from "./features/Projects/Projects";
import { Contact } from "./features/Contact/Contact";
import { Footer } from "./features/Footer/Footer";
import CardContact  from "./features/NavigationCard/CardContact";

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <CardContact />
      </div>
      <div className="right-section">
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
