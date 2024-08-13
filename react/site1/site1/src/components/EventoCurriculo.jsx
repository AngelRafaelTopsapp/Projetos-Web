// EventoCurriculo.js

export function selecionarArquivo() {
    document.getElementById('arquivo').click();
  }
  
  export function atualizarNomeArquivo(input) {
    const arquivoSelecionado = input.files[0];
    if (arquivoSelecionado) {
      document.getElementById('curriculo').value = arquivoSelecionado.name;
    } else {
      document.getElementById('curriculo').value = '';
    }
  }
  