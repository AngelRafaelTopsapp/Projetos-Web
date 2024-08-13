const Evento = ({ titulo, texto }) => {
  function handleClick() {
    const modal = document.querySelector("dialog");
    modal.showModal();
  }
  return (
    <div>
      <div className="orientacaoVerMais">
        <button onClick={handleClick} className="botaoVerMais">
          Ver mais...
        </button>
      </div>
      <dialog>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <button onClick={() => document.querySelector("dialog").close()}>
          OK
        </button>
      </dialog>
    </div>
  );
};
export default Evento;
