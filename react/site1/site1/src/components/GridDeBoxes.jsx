import React from "react";
import Evento from "./Evento.jsx";

const BoxMaior = ({ titulo, cidade, texto }) => (
  <div className="boxMaior">
    <div className="retanguloVerde">
      <div className="circuloLaranja">
        <div className="textoCirculoLaranja">1</div>
      </div>
      <div className="textoRetanguloVerde">{titulo}</div>
    </div>
    <div className="espasador">
      <div className="retanguloCidades">
        <div className="textoRetanguloCidades">{cidade}</div>
      </div>
    </div>
    <div className="textoBoxGrande">{texto}</div>
    <Evento titulo={titulo} texto={texto} />
  </div>
);
const BoxMenor = ({ titulo, cidade, texto }) => (
  <div className="boxMenor">
    <div className="retanguloLaranja">
      <div className="circuloVerde">
        <div className="textoCirculoVerde">1</div>
      </div>
      <div className="textoRetanguloLaranja">{titulo}</div>
    </div>
    <div className="espasador">
      <div className="retanguloCidadesVerde">
        <div className="textoRetanguloCidades">{cidade}</div>
      </div>
    </div>
    <div className="textoBoxPequena">{texto}</div>
    <Evento titulo={titulo} texto={texto} />
  </div>
);
const GridDeBoxes = () => {
  // Array de dados para os boxes
  const dadosDosBoxesMaiores = [
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
  ];
  const dadosDosBoxesMenores = [
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
    {
      titulo: "DESENVOLVEDOR WEB SÊNIOR",
      cidade: "SINOP-MT",
      texto:
        "Experiência e conhecimentos JavaScript, jQuery, AJAX, HTML5, CSS3, PHP, Banco de dados PGSQL e REST/JSON para desenvolvimento de aplicações web.",
    },
  ];

  return (
    <div className="GridboxRoot2">
      <div className="boxRootMaiores">
        {dadosDosBoxesMaiores.map((dados, index) => (
          <BoxMaior
            key={index}
            titulo={dados.titulo}
            cidade={dados.cidade}
            texto={dados.texto}
          />
        ))}
      </div>
      <div className="boxRootMenor">
        {dadosDosBoxesMenores.map((dados, index) => (
          <BoxMenor
            key={index}
            titulo={dados.titulo}
            cidade={dados.cidade}
            texto={dados.texto}
          />
        ))}
      </div>
    </div>
  );
};

export default GridDeBoxes;
