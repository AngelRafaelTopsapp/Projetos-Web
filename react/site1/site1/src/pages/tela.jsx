import "../App.css";
import React from "react";
/*Imagens chamadas*/
import Topo from "../assets/topo.png";
import FundoLaranja from "../assets/fundoLaranja.png";
import Homem from "../assets/homem.png";
import Mulher from "../assets/mulher.png";
import Foto from "../assets/foto.png";
import Setas from "../assets/setas.png";

/*Funcões chamadas*/
import GridDeBoxes from "../components/GridDeBoxes.jsx";
import ControleCirculo from "../components/ControleCirculo.jsx";
import { atualizarNomeArquivo } from "../components/EventoCurriculo.jsx";
import { handleClickCadastrar } from "../components/eventoCadastro.jsx";
import SeletorVagas from "../components/SeletorVagas.jsx";

function Imagens() {
  return (
    <>
      {/* Parte superior */}
      <div className="top">
        <img src={Topo} className="topImagem" alt="Topo" />
      </div>

      {/* Setas e título */}
      <div className="setas">
        <img src={Setas} className="imagemSeta" alt="Setas" />
        <h1 className="tituloSeta">OPORTUNIDADES</h1>
      </div>

      {/* Boxes principais */}
      <div className="GridboxRoot">
        <GridDeBoxes />
      </div>

      {/* Seção de imagemLaranja */}
      <img
        src={FundoLaranja}
        alt="Fundo Laranja"
        className="topImagemLaranja"
      />
      <div className="imagemLaranja">
        <img src={Homem} alt="Homem" className="imagemDoHomem" />
        <div className="textoSobreposto">
          <h1 className="titulo">QUEM</h1>
          <h1 className="titulo espaçamento02">SOMOS</h1>
          <p className="espaçamento">
            Movidos por tecnologia: sempre com olhar para o futuro.
          </p>
          <p className="espaçamento">
            Em meados do ano 2000 foi criado pelo empresário Adenilson Rocha o
            TopSinop, primeiro site de entretenimento do norte de Mato Grosso. A
            visão empreendedora de Adenilson mostrava um caminho de sucesso e
            logo em 2002, Adenilson criou a MultiWare Tecnologia, com sede em
            Sinop/MT, a empresa inicialmente era voltada em assistência técnica
            de computadores com atendimento domiciliar. O empreendedor enxergou
            uma lacuna a ser preenchida no mercado, então surgiu a ideia de
            criar um sistema de gestão para empresas de telecomunicação, sendo
            atualmente uma das principais marcas deste segmento nacional, o
            TopSapp.
          </p>
          <p className="espaçamento">
            A partir do TopSapp a Multiware Tecnologia cresceu rapidamente e
            surgem outras marcas como TwSpeed Telecom, A Folha Notícias, TopDNS
            e TopCabo. Em 2019 um novo capítulo na história passa a ser escrito,
            surge o Grupo Ad Brax.
          </p>
          <p className="espaçamento">
            Ao longo de sua existência, Grupo Ad Brax ampliou seu rol de
            serviços para a área de Tecnologia da Informação. Assim, nós, do
            Grupo Ad Brax, desenvolvemos o nosso jeito de ser movidos por
            tecnologia, investindo em empresas que vão ao encontro das
            necessidades de empresas e da sociedade.
          </p>
          <p className="espaçamento">
            O grupo Ad Brax é um sonho que se tornou realidade.
          </p>
        </div>
      </div>

      {/* Seção de cadastro */}
      <div className="cadastro">
        <div className="tituloCadastro">
          <div className="textoCadastro">CADASTRE-SE</div>
          <div className="subcadCastro">
            Cadastre o seu currículo para participar do nosso processo seletivo
          </div>
        </div>

        {/* Formulário de cadastro */}
        <form action="#" method="POST" className="tela-formulario">
          <div className="campo-grupo">
            <div className="grupo-interno">
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                className="formulario-input-nome"
                required
                placeholder="Nome Completo:"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="formulario-input-email"
                required
                placeholder="E-mail:"
              />
              <div className="Obs1">Este campo é obrigatório</div>
              <div className="Obs1">Este campo é obrigatório</div>
            </div>

            {/* Seleção de vaga */}
            <div className="seletor">
            <SeletorVagas  />
            </div>

            {/* Upload de arquivo */}
            <div className="grupo-interno-arquivo">
              <input
                type="file"
                id="arquivo"
                name="arquivo"
                accept=".pdf,.doc,.docx"
                className="formulario-file"
                style={{ display: "none" }}
                onChange={(e) => atualizarNomeArquivo(e.target)}
                required
              />
              <input
                type="text"
                id="curriculo"
                name="curriculo"
                className="display"
                placeholder="Selecione seu currículo:"
                readOnly
                onClick={() => document.getElementById("arquivo").click()}
                required
              />
              <button
                onClick={() => document.getElementById("arquivo").click()}
                className="button-selecionar-arquivo"
              >
                ARQUIVO
              </button>
            </div>

            {/* Texto area */}
            <div className="entrada">
              <textarea
                id="motivoInteresse"
                name="motivoInteresse"
                rows="4"
                className="formulario-textarea"
                required
                placeholder="Descreva porque se interessou pela oportunidade"
              ></textarea>
              <p>Este campo é obrigatório</p>
              <div className="button">
                <button
                  type="submit"
                  className="formulario-submit"
                  onClick={handleClickCadastrar} 
                >
                  CADASTRAR
                </button>
              </div>
            </div>
          </div>
          <img src={Mulher} alt="Mulher" className="imagemDaMulher" />
        </form>
      </div>

      {/* Seção de histórias */}
      <div className="historiasRelatos">
        <div className="centralizarRetanguloVerdeGrande">
          <div className="tituloLaranja">
            <p className="tituloLaranjaForte">
              <span className="grossuraTitulo">HISTÓRIAS</span> QUE NOS MOTIVAM
            </p>
            <p className="tituloLaranjaForte2">
              A FAZER <span className="grossuraTitulo">CADA VEZ MAIS</span>
            </p>
          </div>
          <div className="retanguloVerdeGrandeRoot">
            <div className="retanguloVerdeGrande">
              <div className="CentralizaFoto">
                <img
                  src={Foto}
                  alt="Foto Funcionário"
                  className="fotoFuncionario"
                />
              </div>
              <div className="orientacaoTextoGrande">
                "Hoje eu consigo dormir mas antes eu acordava uma, duas horas da
                manhã, e eu conseguia dormir porque eu ficava pensando nos
                problemas."
              </div>
              <div className="orientacaoTextoMenor">Nome funcionário</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de contatos */}
      <div className="controleCirculo">
        <ControleCirculo />
      </div>
    </>
  );
}

export default Imagens;
