import React, { useEffect } from 'react';
import './Parallax.scss';

interface ParallaxIllustrationProps {
  children: React.ReactNode;
  [key: string]: any; // Allow any additional props

}

export const ParallaxIlustration: React.FC<ParallaxIllustrationProps> = ({ children, ...rest }) => {
  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.pageYOffset;
      const layers = document.querySelectorAll<HTMLElement>("[data-type='parallax']");

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const depthAttr = layer.getAttribute('data-depth');
        if (depthAttr) {
          const depth = parseFloat(depthAttr);
          const movement = -(topDistance * depth);
          const translate3d = `translate3d(0, ${movement}px, 0)`;

          layer.style.transform = translate3d;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div>
            <section className="home" id="home">

      <div id="hero">

        <div className="layer-bg layer" data-type="parallax" data-depth="0.10"></div>
        <div className="layer-1 layer" data-type="parallax" data-depth="0.20"></div>
        <div className="layer-2 layer" data-type="parallax" data-depth="0.50"></div>
        <div className="layer-3 layer" data-type="parallax" data-depth="0.80"></div>
        <div className="layer-overlay layer" data-type="parallax" data-depth="0.85"></div>
        <div className="layer-4 layer" data-type="parallax" data-depth="1.00"></div>
        <div id="hero-mobile"></div>
      </div>
      <div id="content">
        <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1></h1>
              </div>
            </div>
            <div className="row">
              {children}
            </div>
        </div>
      </div>
      </section>
    </div>
  );
};

