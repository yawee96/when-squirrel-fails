import React from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  sandwich: {
    color: "white",
    backgroundColor: '#ffb26e',
  },
  toastedBagel: {
    color: "white",
    backgroundColor: '#7c3e12',
  },
  salmonBagel: {
    color: "white",
    backgroundColor: "#7070ff"
  },
  tunaSalad: {
    color: "white",
    backgroundColor: '#c47f00',
  },
  tunaMelt: {
    color: "white",
    backgroundColor: '#c47f00',
  },
  wrap: {
    color: "white",
    backgroundColor: "#ff6262"
  },
  salmonAddOn: {
    color: "white",
    backgroundColor: "teal"
  }
});

function SandwichBagelPage(props) {
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
          <Button fullWidth className={classes.sandwich} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Turkey and Brie", price: 7.09 })}>
            Turkey and Brie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.sandwich} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Ham and Cheese", price: 7.09 })}>
            Ham and Cheese
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.sandwich} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Chicken Salad", price: 7.09 })}>
            Chicken Salad
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.sandwich} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Egg Salad", price: 7.09 })}>
            Egg Salad
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.wrap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Bacon Wrap", price: 4.73 })}>
            Bacon Wrap
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.wrap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Salsa Wrap", price: 4.73 })}>
            Salsa Wrap
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.toastedBagel} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Toasted Bagel", price: 2.21 })}>
            Toasted Bagel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.toastedBagel} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Toasted Bagel w/ CC", price: 4.15 })}>
            Toasted Bagel w/ CC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.toastedBagel} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Not Toasted Bagel", price: 1.42 })}>
            Not Toasted Bagel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.toastedBagel} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Not Toasted Bagel w/ CC", price: 3.36 })}>
            Not Toasted Bagel w/ CC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.salmonBagel} variant="contained"  onClick={() => sendItemToAppHandler({ name: "BC Smk Salmon", price: 9.98 })}>
            BC Smk Salmon
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.tunaSalad} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Tuna Salad", price: 7.25 })}>
            Tuna Salad
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.tunaMelt} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Tuna Melt", price: 7.25 })}>
            Tuna Melt
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.salmonAddOn} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Salmon Add-on", price: 2.63 })}>
            Salmon Add-on
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default SandwichBagelPage;