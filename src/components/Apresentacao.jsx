
import EU from '../img/imagemeu.jpg';
function Apresentacao() {
  return (
    <div className="container">
        <div className="apresentação-grande">
            <h1>Gabriel Sakura</h1>
            <h3>Back-End developer</h3>
        </div>
        <div className="circle">
            <img src={EU}></img>
            <div className="pulse-element">Elemento com animação pulsante</div>
         </div>
        <div className="imagens-redes">
            <a href="https://github.com/gabsakura"target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            <a href="https://www.linkedin.com/in/gabrielsakura/"target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            <a href="https://www.instagram.com/sakuragabriel/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
        </div>
     </div>
  );
}

export default Apresentacao;
