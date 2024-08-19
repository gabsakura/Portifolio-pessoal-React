import { useState } from 'react';
import CssIcon from '../img/Css-icon.png';
import HtmlIcon from '../img/HTML.png';
import JsIcon from '../img/JS.png';
import PythonIcon from '../img/Python.png';
import PlusIcon from '../img/+.svg';
import BootstrapIcon from '../img/Bootstrap.svg';
import TailwindIcon from '../img/Tailwindcss.svg';
import ReactIcon from '../img/React.png';
import JWTIcon from '../img/JWT.svg';
import ViteIcon from '../img/Vite.svg';
import DjangoIcon from '../img/Django.svg';
import DjangoSQLIcon from '../img/DjangoSQL.svg';
import SQLIcon from '../img/SQL.svg';
import DevOpsIcon from '../img/DevOps.png';

function Habilidades() {
  const [activeSkill, setActiveSkill] = useState(null);

  const frameworks = {
    CSS: [
      { src: BootstrapIcon, text: 'Usei minhas habilidades em Bootstrap para criar layouts responsivos e consistentes rapidamente.' },
      { src: TailwindIcon, text: 'Uso meus conhecimentos em TailwindCSS para a personalização e embelezamento do projeto.' },
    ],
    HTML: [],
    JavaScript: [
      { src: ReactIcon, text: 'Usei minhas habilidades em React para construir interfaces de usuário dinâmicas e componentes reutilizáveis.' },
      { src: JWTIcon, text: 'Uso minhas habilidades em JWT para garantir a segurança e não vazamento de dados sigilosos.' },
      { src: ViteIcon, text: 'Uso meus conhecimentos em Vite para o teste de minhas aplicações web.' },
    ],
    Python: [
      { src: DjangoIcon, text: 'Usei minhas habilidades em Django para desenvolver backends robustos e eficientes.' },
      { src: DjangoSQLIcon, text: 'Uso minhas habilidades em DjangoSQL para desenvolver banco de dados eficientes e fáceis de se ler e acessar.' },
    ],
    '+': [
      { src: SQLIcon, text: 'Usei minhas habilidades em SQL para criar bancos de dados interativos e fáceis para se interagir com as aplicações.' },
      { src: DevOpsIcon, text: 'Uso meus conhecimentos em DevOps como o Git e o Docker para facilitar o desenvolvimento e controle de versão do código e o Docker para facilitar o deploy.' },
    ],
  };

  const toggleText = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const applyBlur = (skill) => {
    return activeSkill && activeSkill !== skill ? 'blur' : '';
  };

  return (
    <div className="habilidades">
      <div className="caixas">
        <div className={`Imagem-habilidade ${applyBlur('CSS')}`} onClick={() => toggleText('CSS')}>
          <img src={CssIcon} alt="Habilidade CSS" style={{ display: activeSkill === 'CSS' ? 'none' : 'block' }} />
          <p className="texto-habilidade" style={{ display: activeSkill === 'CSS' ? 'flex' : 'none' }}>
            Usei minhas habilidades em CSS para criar layouts responsivos e estilizar diversos componentes em vários projetos.
          </p>
        </div>
        <div className={`Imagem-habilidade ${applyBlur('HTML')}`} onClick={() => toggleText('HTML')}>
          <img src={HtmlIcon} alt="Habilidade HTML" style={{ display: activeSkill === 'HTML' ? 'none' : 'block' }} />
          <p className="texto-habilidade" style={{ display: activeSkill === 'HTML' ? 'flex' : 'none' }}>
            Usei minhas habilidades em HTML para estruturar conteúdo de maneira semântica e acessível em vários projetos.
          </p>
        </div>
        <div className={`Imagem-habilidade ${applyBlur('JavaScript')}`} onClick={() => toggleText('JavaScript')}>
          <img src={JsIcon} alt="Habilidade JavaScript" style={{ display: activeSkill === 'JavaScript' ? 'none' : 'block' }} />
          <p className="texto-habilidade" style={{ display: activeSkill === 'JavaScript' ? 'flex' : 'none' }}>
            Usei minhas habilidades em JavaScript para adicionar interatividade e dinamismo em diversas aplicações web.
          </p>
        </div>
        <div className={`Imagem-habilidade ${applyBlur('Python')}`} onClick={() => toggleText('Python')}>
          <img src={PythonIcon} alt="Habilidade Python" style={{ display: activeSkill === 'Python' ? 'none' : 'block' }} />
          <p className="texto-habilidade" style={{ display: activeSkill === 'Python' ? 'flex' : 'none' }}>
            Usei minhas habilidades em Python para construir interfaces de usuário reutilizáveis e eficientes em projetos web.
          </p>
        </div>
        <div className={`Imagem-habilidade ${applyBlur('+')}`} onClick={() => toggleText('+')}>
          <img src={PlusIcon} alt="Habilidade em Geral" style={{ display: activeSkill === '+' ? 'none' : 'block' }} />
          <p className="texto-habilidade" style={{ display: activeSkill === '+' ? 'flex' : 'none' }}>
            Essas são minhas habilidades que utilizo para realizar eficientes e bons projetos web.
          </p>
        </div>
      </div>
      <div className="habilidades-container">
        {activeSkill && frameworks[activeSkill].length > 0 && (
          <div className="caixas-extras">
            {frameworks[activeSkill].map((framework, index) => (
              <div key={index} className="Imagem-habilidade-extra">
                <img src={framework.src} alt={`Framework ${activeSkill}`} />
                <p className="texto-habilidade-extra">{framework.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Habilidades;
