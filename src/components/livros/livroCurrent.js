import React, { useContext, useEffect } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

//Context
import LivroContext from "../../context/livros/livroContext";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

const LivroCurrent = () => {
  const livroContext = useContext(LivroContext);
  const { current } = livroContext;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {current === null ? (
            "Selecione um livro"
          ) : (
            <Paper>
              <Grid>
                <img
                  src={require(`../../assets/fotos/${current.isbn}.jpg`)}
                  alt="404"
                />
              </Grid>
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
            </Paper>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default LivroCurrent;
