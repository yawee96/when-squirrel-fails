import React from "react";
import { Button, Paper, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  drip: {
    //backgroundColor: 'red', 
  },
  latte: {
    color: "white",
    backgroundColor: '#ffb26e',
  },
  capp: {
    color: "#6e3100",
    backgroundColor: '#fff0e4',
  },
  mocha: {
    color: "white",
    backgroundColor: '#5a2d0d',
  },
  esp: {
    color: "white",
    backgroundColor: '#381c08',
  },
  americano: {
    color: "white",
    backgroundColor: '#49240b',
  },
  macchiato: {
    color: "white",
    backgroundColor: '#7c3e12',
  },
  tea: {
    color: "white",
    backgroundColor: '#00c400',
  },
  shot: {
    color: "white",
    backgroundColor: '#381c08',
  },
  syrup: {
    color: "white",
    backgroundColor: '#df7224',
  },
  milkSub: {
    color: "white",
    backgroundColor: '#0d5a54',
  },
});

function CoffeePage(props) {
  const classes = useStyles();

  const { sendItemToApp } = props;

  const sendItemToAppHandler = (value) => {
    sendItemToApp(value);
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="space-around" >
        {/* <div onClick={() => demoMethod("clicked from coffee page!")}>Hello from Coffee Page</div> */}
        <Grid item xs={2}>
          <Button fullWidth variant="contained" color="primary" onClick={() => sendItemToAppHandler({ name: "12oz Drip", price: 2.15, type: null })}>
            12oz Drip
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="contained" color="primary" onClick={() => sendItemToAppHandler({ name: "16oz Drip", price: 2.47, type: null })}>
            16oz Drip
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth variant="contained" color="primary" onClick={() => sendItemToAppHandler({ name: "20oz Drip", price: 2.63, type: null })}>
            20oz Drip
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.tea} variant="contained" onClick={() => sendItemToAppHandler({ name: "Tea", price: 2.26, type: null })}>
            Tea
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth className={classes.tea} variant="contained" onClick={() => sendItemToAppHandler({ name: "Extra Tea Bag", price: 0.53, type: null })}>
            Extra Tea Bag
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.latte} variant="contained" onClick={() => sendItemToAppHandler({ name: "12oz Latte", price: 3.85, type: "drink"})}>
            12oz Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.latte} variant="contained" onClick={() => sendItemToAppHandler({ name: "16oz Latte", price: 4.75, type: "drink" })}>
            16oz Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.latte} variant="contained" onClick={() => sendItemToAppHandler({ name: "20oz Latte", price: 4.95, type: "drink" })}>
            20oz Latte
          </Button>
        </Grid>
        {/* </Grid> */}
        {/* <Grid container spacing={2} justify="space-around" alignItems="flex-start"> */}
        <Grid item xs={2}>
          <Button fullWidth className={classes.capp} variant="contained" onClick={() => sendItemToAppHandler({ name: "12oz Cappuccino", price: 4.04, type: "drink" })}>
            12oz Capp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.capp} variant="contained" onClick={() => sendItemToAppHandler({ name: "16oz Cappuccino", price: 4.99, type: "drink" })}>
            16z Capp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.capp} variant="contained" onClick={() => sendItemToAppHandler({ name: "20oz Cappuccino", price: 5.20, type: "drink" })}>
            20oz Capp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mocha} variant="contained" onClick={() => sendItemToAppHandler({ name: "12oz Mocha", price: 4.78, type: "drink" })}>
            12oz Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mocha} variant="contained" onClick={() => sendItemToAppHandler({ name: "16oz Mocha", price: 5.20, type: "drink" })}>
            16z Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mocha} variant="contained" onClick={() => sendItemToAppHandler({ name: "20oz Mocha", price: 5.51, type: "drink" })}>
            20oz Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.esp} variant="contained" onClick={() => sendItemToAppHandler({ name: "Single Espresso", price: 2.26, type: "drink" })}>
            Sgl. Esp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.esp} variant="contained" onClick={() => sendItemToAppHandler({ name: "Double Espresso", price: 3.41, type: "drink" })}>
            Dbl. Esp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.esp} variant="contained" onClick={() => sendItemToAppHandler({ name: "Triple Espresso", price: 3.99, type: "drink" })}>
            Trp. Esp
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.americano} variant="contained" onClick={() => sendItemToAppHandler({ name: "Single Americano", price: 2.26, type: "drink" })}>
            Sgl. Americano
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.americano} variant="contained" onClick={() => sendItemToAppHandler({ name: "Double Americano", price: 3.26, type: "drink" })}>
            Dbl. Americano
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.americano} variant="contained" onClick={() => sendItemToAppHandler({ name: "Triple Americano", price: 3.99, type: "drink" })}>
            Trp. Americano
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.macchiato} variant="contained" onClick={() => sendItemToAppHandler({ name: "Single Macchiato", price: 2.63, type: "drink" })}>
            Sgl. Macchiato
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.macchiato} variant="contained" onClick={() => sendItemToAppHandler({ name: "Double Macchiato", price: 3.41, type: "drink" })}>
            Dbl. Macchiato
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.macchiato} variant="contained" onClick={() => sendItemToAppHandler({ name: "Triple Macchiato", price: 3.99, type: "drink" })}>
            Trp. Macchiato
          </Button>
        </Grid>
        {/* <Grid item xs={3}>
          <Button fullWidth className={classes.shot} variant="contained" onClick={() => sendItemToAppHandler({ name: "Espresso Shot", price: 1.05 })}>
            Espresso Shot
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth className={classes.syrup} variant="contained" onClick={() => sendItemToAppHandler({ name: "Flavoured Syrup", price: 0.79 })}>
            Flavoured Syrup
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth className={classes.milkSub} variant="contained" onClick={() => sendItemToAppHandler({ name: "Milk Substitute", price: 0.74 })}>
            Milk Substitute
          </Button>
        </Grid> */}
      </Grid>
      {/* </Grid> */}
      {/* <Button variant="contained" color="primary">
          16oz Drip
      </Button>
        <Button variant="contained" color="primary">
          20oz Drip
      </Button>
        <Button variant="contained" color="secondary" onClick={() => demoMethod("clicked latte!")}>
          12oz Latte
      </Button>
        <Button variant="contained" color="secondary" onClick={() => demoMethod("clicked latte!")}>
          16oz Latte
      </Button>
        <Button variant="contained" color="secondary" onClick={() => demoMethod("clicked latte!")}>
          20oz Latte
      </Button> */}
    </Paper >

  );
}

export default CoffeePage;