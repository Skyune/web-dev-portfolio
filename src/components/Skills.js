import meter1 from "../assets/img/meter1.svg";
import Kotlin from "../assets/img/Kotlin_Icon.svg";
import React from "../assets/img/React-icon.svg";
import CSharp from "../assets/img/csharp_Icon.svg";
import Java from "../assets/img/Java_icon.svg";
import Redux from "../assets/img/redux.svg";
import Three from "../assets/img/Threejs-logo.svg"
import Cpp from "../assets/img/cplusplus.svg";
import Vue from "../assets/img/Vue_Icon.svg";
import JavaScript from "../assets/img/Javascript_Icon.svg";
import MySQL from "../assets/img/mysql-logo.svg";
import dot from "../assets/img/circle.svg";


import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12 mx-auto">
                <div className="skill-bx wow zoomIn ">
                    <h2>Skills</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                    <table>
  <tr>
    <td>
      <div className="item">
        <img src={Kotlin} alt="Image" />
        <h5>Kotlin</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={React} alt="Image" />
        <h5>React</h5>
        <div class="dot">

  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={CSharp} alt="Image" />
        <h5>C#</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={Java} alt="Image" />
        <h5>Java</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={Redux} alt="Image" />
        <h5>Redux</h5>
        <div class="dot">
  </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div className="item">
        <img src={Three} alt="Image" />
        <h5>Three.js</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={Cpp} alt="Image" />
        <h5>C++</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={Vue} alt="Image" />
        <h5>Vue</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={JavaScript} alt="Image" />
        <h5>JavaScript</h5>
        <div class="dot">
  </div>
      </div>
    </td>
    <td>
      <div className="item">
        <img src={MySQL} alt="Image" />
        <h5>MySQL</h5>
        <div class="dot">
  </div>
      </div>
    </td>
  </tr>
</table>
                </div>
            </div>
        </div>
    </div>
    {/*<img className="background-image-left" src={colorSharp} alt="Image" />*/}
</section>
  )
}
