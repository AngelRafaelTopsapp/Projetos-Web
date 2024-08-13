import '../App.css'
import React from 'react';

const opcoesDeVagas = [
  { value: '33', label: 'Analista de suporte' },
  { value: '40', label: 'Analista de suporte topsapp' },
  { value: '32', label: 'Atendendo de monitoramento' },
  { value: '14', label: 'Atendente' },
  { value: '34', label: 'Aux. escritório' },
  { value: '16', label: 'Auxiliar administrativo' },
  { value: '43', label: 'Auxiliar comercial regional' },
  { value: '37', label: 'Auxiliar de infraestrutura' },
  { value: '17', label: 'Auxiliar técnico' },
  { value: '35', label: 'Cobrança' },
  { value: '26', label: 'Consultor (a) corporativo' },
  { value: '15', label: 'Consultor (a) de vendas' },
  { value: '24', label: 'Consultor (a) de vendas externa' },
  { value: '36', label: 'Desenvolvedor mobile' },
  { value: '31', label: 'Desenvolvedor web sênior' },
  { value: '41', label: 'Estagiário' },
  { value: '28', label: 'Gestão de contratos' },
  { value: '29', label: 'Instalador' },
  { value: '38', label: 'Instalador com cnh' },
  { value: '39', label: 'Instalador sem cnh' },
  { value: '18', label: 'Office boy' },
  { value: '27', label: 'Office boy' },
  { value: '22', label: 'Técnico de telecom' },
  { value: '42', label: 'Pós vendas topsapp' },
  { value: '19', label: 'Programador' },
  { value: '20', label: 'Programador delphi' },
  { value: '21', label: 'Programador júnior' },
  { value: '8' , label: 'Programador php' },
  { value: '30', label: 'Supervisor de vendas' },
  { value: '25', label: 'Suporte financeiro e fiscal' },
  { value: '23', label: 'Zeladora' },
];

const SeletorVagas = () => {
  return (
      <select className="formulario-input-switch" id="vaga" name="vaga" aria-invalid="false">
        {opcoesDeVagas.map((vaga) => (
          <option key={vaga.value} value={vaga.value}>
            {vaga.label}
          </option>
        ))}
      </select>
  );
};

export default SeletorVagas;
