import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from "./features/Banner/Banner";

import { Skills } from "./features/Skills/Skills";
import { Projects } from "./features/Projects/Projects";
import { Contact } from "./features/Contact/Contact";
import { Footer } from "./features/Footer/Footer";
import CardContact  from "./features/NavigationCard/CardContact";
import SideMenu from './features/NavigationCard/Menu';

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <CardContact />
        <SideMenu />
      </div>
      <div className="right-section">
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
