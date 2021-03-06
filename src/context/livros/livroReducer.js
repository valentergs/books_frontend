import {
  TODOS_LIVROS,
  INSERIR_LIVRO,
  DELETAR_LIVRO,
  EDITAR_LIVRO,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TODOS_LIVROS:
      return {
        ...state,
        livroState: action.payload
      };
    case INSERIR_LIVRO:
      return {
        ...state,
        livroState: [...state.livroState, action.payload]
      };
    case DELETAR_LIVRO:
      return {
        ...state,
        livroState: state.livroState.filter(x => x.livro_id !== action.payload)
      };
    case EDITAR_LIVRO:
      return {
        ...state,
        livroState: state.livroState.map(x =>
          x.livro_id === action.payload.livro_id ? action.payload : x
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
