import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './Projects.css'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import musicMain from "../assets/img/MainMusic.png";
import musicSecond from "../assets/img/MusicSecond.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import googleBadge from "../assets/img/googleplay.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import  Card  from './Card';

export const Projects = () => {

  

  return (
    <section className="project" id="project">

      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="android-app">
  <Card image={musicMain} className="img"/>
  <Card image={musicSecond} className="img"/>


  <div>
  <div className="lofitext">
  <h2>Lofi Corner</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
  <div class="lofiButtons">
  <img src={googleBadge} alt="" />
  <button type="submit">Try demo</button>
  <span>or see <a href = "">github code</a></span>
</div>
</div>
</div>



              </div>}     
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
     
      </section>
  )
}
