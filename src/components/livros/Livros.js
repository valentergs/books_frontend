import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  Typography,
  Chip
} from "@material-ui/core";

//Context
import LivroContext from "../../context/livros/livroContext";

// const cdd_cent = require("../../assets/cdd_centesimal.json");

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: {
    padding: 30
  },
  tableHead: {
    backgroundColor: "#f1f1f1"
  }
});

const Livros = () => {
  const livroContext = useContext(LivroContext);
  const { livroState, todosLivros, setCurrent } = livroContext;
  const classes = useStyles();

  useEffect(() => {
    todosLivros();
    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="left">Titulo / Autor</TableCell>
            <TableCell align="left">CDD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {livroState.map(row => (
            <TableRow hover key={row.livro_id} onClick={() => setCurrent(row)}>
              <TableCell align="left">
                <Typography variant="h6">{row.titulo}</Typography>
                <Typography>{row.autor}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>
                  <Chip
                    variant="default"
                    color="default"
                    // label={row.cdd.slice(0, 2) + "0"}
                    label={row.cdd}
                  />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Livros;
