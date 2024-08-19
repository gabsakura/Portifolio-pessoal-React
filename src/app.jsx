import React from 'react';
import Apresentacao from './components/Apresentacao.jsx';
import SobreMim from './components/SobreMim.jsx';
import Habilidades from './components/Habilidades.jsx';
import SliderProjetos from './components/SliderProjetos.jsx';
import Header from './components/Header.jsx'


document.addEventListener('DOMContentLoaded', function () {
    const parallaxSlidesContainer = document.querySelector('.parallax-slides-container');
    const parallaxSlides = document.querySelectorAll('.parallax-slide');
    let currentParallaxSlide = 0;
    const slideWidth = parallaxSlides[0].offsetWidth;
    const slideMargin = 20; // Gap entre os slides

    function updateSlidePosition() {
        parallaxSlidesContainer.style.transform = `translateX(-${(slideWidth + slideMargin) * currentParallaxSlide}px)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentParallaxSlide++;
        if (currentParallaxSlide >= parallaxSlides.length) {
            parallaxSlidesContainer.style.transition = 'none';
            currentParallaxSlide = 0;
            updateSlidePosition();
        }
        setTimeout(() => {
            parallaxSlidesContainer.style.transition = 'transform 0.5s ease-in-out';
            updateSlidePosition();
        }, 0);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentParallaxSlide--;
        if (currentParallaxSlide < 0) {
            parallaxSlidesContainer.style.transition = 'none';
            currentParallaxSlide = parallaxSlides.length - 1;
            updateSlidePosition();
        }
        setTimeout(() => {
            parallaxSlidesContainer.style.transition = 'transform 0.5s ease-in-out';
            updateSlidePosition();
        }, 0);
    });

    updateSlidePosition();
});

function App() {
  return (
    <div className="containe">
      <Header/>
      <Apresentacao />
      <SobreMim />
      <Habilidades />
      <SliderProjetos />
    </div>
  );
}

export default App;
