import React, { useContext } from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

//Context
import LivroContext from "../../context/livros/livroContext";

const LivroCurrent = () => {
  const livroContext = useContext(LivroContext);
  const { current, livroState, editarLivro, clearCurrent } = livroContext;

  const onSubmit = e => {
    e.preventDefault();
    editarLivro();
    limpaFormulário();
  };

  const limpaFormulário = () => {
    clearCurrent();
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {current === null ? (
            "Selecione um livro"
          ) : (
            <Paper>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <img src={current.photourl} alt="some_image" />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Grid item xs={12}>
                    <Typography>Titulo: {current.titulo}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Titulo original: {current.titulo_original}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Autor: {current.autor}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Tradutor: {current.tradutor}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>ISBN: {current.isbn}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>CDD: {current.cdd}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>CDU: {current.cdu}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Ano: {current.ano}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Tema: {current.tema}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Editora: {current.editora}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Páginas: {current.paginas}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Idioma: {current.idioma}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Formato: {current.formato}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Dono: {current.dono}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: 20, marginBottom: 20 }}
                      onClick={onSubmit}
                    >
                      Editar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default LivroCurrent;
