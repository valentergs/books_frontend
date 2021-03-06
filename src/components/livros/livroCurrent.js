import React, { useContext } from "react";
import LivroContext from "../../context/livros/livroContext";

const LivroCurrent = () => {
  const livroContext = useContext(LivroContext);
  const { current, livroState, editarLivro, clearCurrent } = livroContext;

  // const onSubmit = e => {
  //   e.preventDefault();
  //   editarLivro();
  //   limpaFormulário();
  // };

  // const limpaFormulário = () => {
  //   clearCurrent();
  // };

  return (
    <div>
      <div className="caixa-cabeca">
        <h3 className="caixa-cabeca-titulo">Detalhes da Obra</h3>
        <div className="caixa-cabeca-icones">
          <a href="#">
            <i class="far fa-edit"></i>
          </a>
        </div>
      </div>
      <div className="caixa-corpo">
        {current === null ? (
          <p>Selecione um livro</p>
        ) : (
          <div className="caixa-detalhe-livro">
            <div className="foto">
              <img src={current.photourl} alt={current.isbn} />
            </div>
            <div className="descricao">
              <div className="linha">
                <p className="titulo">Titulo</p>
                <p className="texto">{current.titulo}</p>
              </div>
              <div className="linha">
                <p className="titulo">Titulo Original</p>
                <p className="texto">{current.titulo_original}</p>
              </div>
              <div className="linha">
                <p className="titulo">Autor</p>
                <p className="texto">{current.autor}</p>
              </div>
              {current.tradutor === "" ? (
                <div className="linha">
                  <p className="titulo">Tradutor</p>
                  <p className="texto">Indisponivel</p>
                </div>
              ) : (
                <div className="linha">
                  <p className="titulo">Tradutor</p>
                  <p className="texto">{current.tradutor}</p>
                </div>
              )}
              <div className="linha">
                <p className="titulo">ISBN</p>
                <p className="texto">{current.isbn}</p>
              </div>
              {current.cdd === "" ? (
                <div className="linha">
                  <p className="titulo">CDD</p>
                  <p className="texto">Indisponivel</p>
                </div>
              ) : (
                <div className="linha">
                  <p className="titulo">CDU</p>
                  <p className="texto">{current.cdd}</p>
                </div>
              )}
              {current.cdu === "" ? (
                <div className="linha">
                  <p className="titulo">CDU</p>
                  <p className="texto">Indisponivel</p>
                </div>
              ) : (
                <div className="linha">
                  <p className="titulo">CDU</p>
                  <p className="texto">{current.cdu}</p>
                </div>
              )}
              <div className="linha">
                <p className="titulo">Ano</p>
                <p className="texto">{current.ano}</p>
              </div>
              <div className="linha grande">
                <p className="titulo">Tema</p>
                <p className="texto">{current.tema}</p>
              </div>
              <div className="linha">
                <p className="titulo">Editora</p>
                <p className="texto">{current.editora}</p>
              </div>
              <div className="linha">
                <p className="titulo">Páginas</p>
                <p className="texto">{current.paginas}</p>
              </div>
              <div className="linha">
                <p className="titulo">Idioma</p>
                <p className="texto">{current.idioma}</p>
              </div>
              <div className="linha">
                <p className="titulo">Formato</p>
                <p className="texto">{current.formato}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivroCurrent;

// import React, { useContext } from "react";
// import { Paper, Grid, Typography, Button } from "@material-ui/core";

// //Context
// import LivroContext from "../../context/livros/livroContext";

// const LivroCurrent = () => {
//   const livroContext = useContext(LivroContext);
//   const { current, livroState, editarLivro, clearCurrent } = livroContext;

//   const onSubmit = e => {
//     e.preventDefault();
//     editarLivro();
//     limpaFormulário();
//   };

//   const limpaFormulário = () => {
//     clearCurrent();
//   };

//   return (
//     <div>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           {current === null ? (
//             "Selecione um livro"
//           ) : (
//             <Paper>
//               <Grid container spacing={2}>
//                 <Grid item xs={6} sm={6}>
//                   <img src={current.photourl} alt="some_image" />
//                 </Grid>
//                 <Grid item xs={6} sm={6}>
//                   <Grid item xs={12}>
//                     <Typography>Titulo: {current.titulo}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>
//                       Titulo original: {current.titulo_original}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Autor: {current.autor}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Tradutor: {current.tradutor}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>ISBN: {current.isbn}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>CDD: {current.cdd}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>CDU: {current.cdu}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Ano: {current.ano}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Tema: {current.tema}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Editora: {current.editora}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Páginas: {current.paginas}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Idioma: {current.idioma}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Formato: {current.formato}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography>Dono: {current.dono}</Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       style={{ marginTop: 20, marginBottom: 20 }}
//                       onClick={onSubmit}
//                     >
//                       Editar
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Paper>
//           )}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default LivroCurrent;
