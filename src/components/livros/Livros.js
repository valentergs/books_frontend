import React, { useContext, useEffect } from "react";
import LivroContext from "../../context/livros/livroContext";

const Livros = () => {
  const livroContext = useContext(LivroContext);
  const { livroState, todosLivros, setCurrent } = livroContext;

  useEffect(() => {
    todosLivros();
  }, []);

  return (
    <div className="livros">
      <div className="caixa-cabeca">
        <div className="caixa-titulo">{livroState.length} livros</div>
        <div className="caixa-cabeca-icones">
          <a href="">
            <i class="far fa-plus-square" />
          </a>
        </div>
      </div>
      <div className="caixa-corpo">
        <ul>
          {livroState.map(linha => (
            <li key={linha.livro_id} onClick={() => setCurrent(linha)}>
              <h4>{linha.titulo}</h4>
              <p>{linha.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Livros;
