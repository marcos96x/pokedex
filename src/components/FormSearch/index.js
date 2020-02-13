import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import './FormSearch.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

import './FormSearch.css';

export default function FormSearch() {
    const classes = useStyles();
    const [pokemonType, setPokemonType] = useState(0);
    const [search, setSearch] = useState("");

    function handlePokemonType(e) {
        e.preventDefault();
        setPokemonType(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <div className="FormSearch">
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper component="form" className={classes.root}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={pokemonType}
                                onChange={(e) => handlePokemonType(e)}
                            >
                                <MenuItem value={0}>*</MenuItem>
                                <MenuItem value={1}>Planta</MenuItem>
                                <MenuItem value={2}>Fogo</MenuItem>
                                <MenuItem value={3}>Água</MenuItem>
                                <MenuItem value={4}>Inseto</MenuItem>
                                <MenuItem value={5}>Normal</MenuItem>
                                <MenuItem value={6}>Venenoso</MenuItem>
                                <MenuItem value={7}>Elétrico</MenuItem>
                                <MenuItem value={8}>Terra</MenuItem>
                                <MenuItem value={9}>Lutador</MenuItem>
                                <MenuItem value={10}>Psíquico</MenuItem>
                                <MenuItem value={11}>Pedra</MenuItem>
                                <MenuItem value={12}>Voador</MenuItem>
                                <MenuItem value={13}>Fantasma</MenuItem>
                                <MenuItem value={14}>Gelo</MenuItem>
                                <MenuItem value={15}>Dragão</MenuItem>
                                <MenuItem value={16}>Metálico</MenuItem>
                                <MenuItem value={17}>Noturno</MenuItem>
                                <MenuItem value={18}>Fada</MenuItem>                                
                            </Select>
                            <InputBase
                                value={search}
                                onChange={(e) => handleSearch(e)}
                                className={classes.input}
                                placeholder="Pesquisar por um pokemon"
                                inputProps={{ 'aria-label': 'Pesquisar por um pokemon' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

        </div>

    );
}
