import React from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  cookie: {
    color: "white",
    backgroundColor: '#ff9d47',
  },
  giantCookie: {
    color: "white",
    backgroundColor: '#7c3e12',
  },
  miniCookie: {
    color: "white",
    backgroundColor: '#e92ea4',
  },
  cookiePack: {
    color: "white",
    backgroundColor: "#7070ff"
  },
  gingerbread: {
    color: "white",
    backgroundColor: '#ff6262',
  },
  eggnogShortbread: {
    color: "#6e3100",
    backgroundColor: '#fff0e4',
  }
});

function CookiesPage(props) {

  const classes = useStyles();

  // const demoMethod = (value) => {
  //   props.sendTestData(value);
  // }

  const sendItemToAppHandler = (value) => {
    props.sendItemToApp(value);
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="space-around">
        {/* <div onClick={() => demoMethod("clicked from coffee page!")}>Hello from Coffee Page</div> */}
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Marbelous Cookie", price: 2.73, type: null })}>
            Marbelous
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Chunky Cookie", price: 2.73, type: null })}>
            Chunky
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Smartie Cookie", price: 2.73, type: null })}>
            Smartie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Java Nut Cookie", price: 2.89, type: null })}>
            Java Nut
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Ranger Cookie", price: 2.10, type: null })}>
            Ranger
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Cranberry Oat Cookie", price: 2.10, type: null })}>
            Cran Oat
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Vegan Cookie", price: 2.73, type: null })}>
            Vegan
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.giantCookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Giant Cookie", price: 20.90, type: null })}>
            Giant Cookie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.miniCookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Mini Cookie - 1", price: 1.00, type: null })}>
            1 Mini Cookie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.miniCookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Mini Cookie - 3", price: 2.73, type: null })}>
            3 Mini Cookie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.miniCookie} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Mini Cookie - 6", price: 5.25, type: null })}>
            6 Mini Cookie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cookiePack} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Cookie Pack", price: 5.78, type: null })}>
            Cookie Pack
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.gingerbread} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Gingerbread People", price: 2.10, type: null })}>
            Gingerbread People
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.eggnogShortbread} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Eggnog Shortbread - 1", price: 0.79 })}>
            1 Eggnog Shortbread
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.eggnogShortbread} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Eggnog Shortbread - 2", price: 1.31 })}>
            2 Eggnog Shortbread
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default CookiesPage;