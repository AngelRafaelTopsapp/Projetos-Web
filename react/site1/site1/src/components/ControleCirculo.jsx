import React from 'react';
import Face from "../assets/facebook.png";
import Email from "../assets/email.png";
import Insta from "../assets/instagram.png";
import Telefone from "../assets/telefone.png";
import Twitter from "../assets/twitter.png";

const IconeTexto = ({ imagemSrc, altText, texto }) => (
  <div className="iconeTextoContainer">
    <img src={imagemSrc} alt={altText} />
    <div className="textoIcones">{texto}</div>
  </div>
);

function ControleCirculo() {
  return (
      <div className="elipse">
        <div className="CaixaIcones">
          <IconeTexto imagemSrc={Telefone} altText="Telefone" texto="(66) 3211.0010" />
          <IconeTexto imagemSrc={Email} altText="Email" texto="COMERCIAL@TOPSAPP.COM.BR" />
          <div className="iconeTextoContainer">
            <a href="https://www.facebook.com/adbrax" className="link">
              <img src={Face} alt="Facebook" />
            </a>
            <div className="textoIcones">FACEBOOK</div>
          </div>
          <div className="iconeTextoContainer">
            <a href="https://www.instagram.com/grupoadbrax/" className="link">
              <img src={Insta} alt="Instagram" />
            </a>
            <div className="textoIcones">INSTAGRAM</div>
          </div>
          <div className="iconeTextoContainer">
            <a href="https://twitter.com/topsapp?s=11" className="link">
              <img src={Twitter} alt="Twitter" />
            </a>
            <div className="textoIcones">TWITTER</div>
          </div>
        </div>
      </div>
  );
}

export default ControleCirculo;
