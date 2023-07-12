import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Projects.scss'
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import musicMain from "../../assets/img/MainMusic2.png";
import background from "../../assets/img/backgroundMusic.png"
import musicSecond from "../../assets/img/secondMusic2.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import googleBadge from "../../assets/img/googleplay.png";
import queen from "../../assets/img/queen.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import  Card  from './Components/Card';

export const Projects = () => {

  const isMobile = window.matchMedia('(max-width: 768px)').matches;


  return (
    <section className="project" id="project">

      
      <Container>
        <Row size={12} >
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="android-app d-flex justify-content-center align-items-center ">
                <div className="d-md-block ps-md-5 mx-auto mobileCard">

  <Card image={background} image2={musicMain} index={0} />
  </div>
  <div className="d-none d-xl-block ps-5 pt-5 mobileCard">

  <Card className="text" image={background} image2={musicSecond} index={1}  />
  </div>
  <div className="d-none d-md-block ps-5 mt-md-5">
  <div className="lofitext">
    <h2>Lofi Corner</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
  <div className="lofiButtons">
    <img src={googleBadge} alt="" />
    <button type="submit">Try demo</button>
    <span>or see <a href="">github code</a></span>
  </div>


</div>

  </div>
{/*code duplication for mobile. Cuz im lazy. <3*/}
<div className="lofiButtons d-flex d-md-none pt-3">
    <img src={googleBadge} alt="" />
    <span>or see <a href="">github code</a></span>
  </div>


              </div>}     
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/*<img className="background-image-right" src={colorSharp2}></img>*/}
     
      </section>
  )
}
