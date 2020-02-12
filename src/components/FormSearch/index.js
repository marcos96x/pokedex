import React from 'react';
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

    return (
        <div className="FormSearch">
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper component="form" className={classes.root}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={1}
                            >
                                <MenuItem value={1}>Fogo</MenuItem>
                                <MenuItem value={2}>Água</MenuItem>
                                <MenuItem value={3}>Terra</MenuItem>
                                <MenuItem value={3}>Ar</MenuItem>
                                <MenuItem value={3}>Elétrico</MenuItem>
                            </Select>
                            <InputBase
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
