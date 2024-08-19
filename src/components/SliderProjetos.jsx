import  { useState } from "react";
// import projetoImg from './img/projeto.jfif';

const ParallaxSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    { title: "Projeto 1", description: "Descrição breve do Projeto 1" },
    { title: "Projeto 2", description: "Descrição breve do Projeto 2" },
    { title: "Projeto 3", description: "Descrição breve do Projeto 3" },
    { title: "Projeto 4", description: "Descrição breve do Projeto 4" },
    { title: "Projeto 5", description: "Descrição breve do Projeto 5" },
    { title: "Projeto 6", description: "Descrição breve do Projeto 6" },
    { title: "Projeto 7", description: "Descrição breve do Projeto 7" },
    { title: "Projeto 8", description: "Descrição breve do Projeto 8" },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const getPosition = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex + 1) % projects.length) return "right";
    if (index === (currentIndex - 1 + projects.length) % projects.length)
      return "left";
    return "hidden";
  };

  return (
    <div className="parallax-slider">
      <div className="parallax-slides-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`parallax-slide ${getPosition(index)}`}

            onClick={() => handleClick(index)}
          >
            <div className="parallax-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="parallax-slider-navigation">
        <button className="prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="next" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ParallaxSlider;
