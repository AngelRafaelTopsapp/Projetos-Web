

// Função para capturar o valor do input de currículo
const capturarCurriculo = () => {
  const curriculoInput = document.getElementById("curriculo");
  const curriculoValor = curriculoInput.value;
  return curriculoValor;
};

// Função para capturar o valor do textarea de motivo de interesse
const capturarMotivoInteresse = () => {
  const motivoInteresseInput = document.getElementById("motivoInteresse");
  const motivoInteresseValor = motivoInteresseInput.value;
  return motivoInteresseValor;
};

// Função para capturar o valor do input de nome completo
const capturarNomeCompleto = () => {
  const nomeCompletoInput = document.getElementById("nomeCompleto");
  const nomeCompletoValor = nomeCompletoInput.value;
  return nomeCompletoValor;
};

// Função para capturar o valor do input de email
const capturarEmail = () => {
  const emailInput = document.getElementById("email");
  const emailValor = emailInput.value;
  return emailValor;
};

// Função para capturar o valor do select de vaga
const capturarVaga = () => {
  const vagaSelect = document.getElementById("vaga");
  const vagaValor = vagaSelect.options[vagaSelect.selectedIndex].text;
  return vagaValor;
};

// Função para lidar com o clique no botão "Cadastrar"
const handleClickCadastrar = (e) => {
  e.preventDefault();
  const curriculo = capturarCurriculo();
  const motivoInteresse = capturarMotivoInteresse();
  const nomeCompleto = capturarNomeCompleto();
  const email = capturarEmail();
  const vaga = capturarVaga();

  // Aqui você pode enviar os dados para onde for necessário
  const dadosEvento = {
    curriculo,
    motivoInteresse,
    nomeCompleto,
    email,
    vaga,
  };
  console.log("Dados do evento:", dadosEvento);
};

export {  handleClickCadastrar };
