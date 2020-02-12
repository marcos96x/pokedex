import React from 'react';
import picachu from './../../images/picachu.png';
import './Body.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FormSearch from './../FormSearch';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Body() {
  const classes = useStyles();
  return (
    <div className="Body">
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center">
              <Grid item xs={12} sm={6} justify="center" container>
                <img src={picachu} alt="picachu" className="fotoPokemon picachu" />
              </Grid>
              <Grid item s={12} sm={6}>
                <div className="informacoesLaterais" >
                  <h1>
                    Pokedex React
                  </h1>
                  <h5>
                    Procure por qualquer um dos mais de 600 pokemons existentes nesta pokedex online! Busque por nome, tipo ou elemento para ver informações do seu pokemon preferido!
                  </h5>
                  <FormSearch />
                </div>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
