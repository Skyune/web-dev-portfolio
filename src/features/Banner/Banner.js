import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Navbar, Nav } from "react-bootstrap";

import TrackVisibility from 'react-on-screen';
import { AnimatedSvg } from "./AnimatedSvg";
import background from "../assets/img/background.svg";
import starsImage from "../assets/img/night.jpg";
import downArrow from "../assets/img/down.svg";
import layer1 from "../assets/img/layer1.svg";
import layer2 from "../assets/img/layer2.svg";
import layer3 from "../assets/img/layer3.svg";
import layer4 from "../assets/img/layer4.svg";
import layer5 from "../assets/img/layer5.svg";
import layer6 from "../assets/img/layer6.svg";
import layer7 from "../assets/img/layer7.svg";
import dot from "../assets/img/circle.svg";
import clouds1 from "../assets/img/clouds1.svg";
import clouds2 from "../assets/img/clouds2.svg";
import clouds3 from "../assets/img/clouds3.svg";
import clouds4 from "../assets/img/clouds4.svg";
import clouds5 from "../assets/img/clouds5.svg";
import gradient from "../assets/img/layer10.png";
import { NavBar2 } from "./NavBar2";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "a Programmer!", "a Web Designer", "a tinkerer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }



    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    
    <section className="banner" id="home">
      
  <div class = "parallax-image">


    <div class = "landscape">
<img class="layer-7" data-type= "parallax" data-modifier="parallax" data-depth = "0.01" src={layer7}/>
<img class="layer-6" data-type= "parallax" data-modifier="parallax" data-depth = "0.05" src={layer6}/>
<img class="layer-4" data-type= "parallax" data-modifier="parallax" data-depth = "0.15" src={layer4}/>
<img class="layer-5" data-type= "parallax" data-modifier="parallax" data-depth = "0.50" src={layer5}/>
<img class="layer-3" data-type= "parallax" data-modifier="parallax" data-depth = "0.60" src={layer3}/>
<img class="layer-2" data-type= "parallax" data-modifier="parallax" data-depth = "0.70" src={layer2}/>
<img class="layer-1" data-type= "parallax" data-modifier="parallax" data-depth = "1" src={layer1}/>
<img class="layer-1" data-type= "parallax" data-modifier="parallax" data-depth = "1" src={gradient} style={{zIndex: "1"}}/>


  <img class="layer-12" data-type= "parallax" data-modifier="parallax" data-depth = "0.30" src={clouds5}/>
  <img class="layer-11" data-type= "parallax" data-modifier="parallax" data-depth = "0.10" src={clouds4}/>
  <img class="layer-10" data-type= "parallax" data-modifier="parallax" data-depth = "0.10" src={clouds3}/>
  <img class="layer-9" data-type= "parallax" data-modifier="parallax" data-depth = "0.10" src={clouds2}/>

</div>

</div>



<div class="background-svg"  data-type= "parallax" data-modifier="parallax" data-depth = "1">   
< NavBar2/>


      <div class = "content">
      </div>
      <Container>

      <Row className="align-items-start">
          <Col xs={12} md={8} xl={9}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Chris!`} </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>

              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>


                </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Row>
      </Container>
      </div>

    </section>
  )
}

(function() {
  var topDistance = 0;
  
  function updateLayers() {
    var depth, i, layer, layers, len, movement, translate3d;
    
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
      layer.style.setProperty('--parallax-movement', movement + 'px');
    }

       // Set the margin-bottom of the .banner element to the parallax movement value
    var banner = document.querySelector('.banner');
    banner.style.marginBottom = layers[layers.length - 1].style.getPropertyValue('--parallax-movement');
  }

  // Call updateLayers on page load
  window.onload = function() {
    updateLayers();
  }

  // Call updateLayers on scroll
  window.addEventListener('scroll', function(event) {
    topDistance = this.pageYOffset;
    updateLayers();
  });
})();

