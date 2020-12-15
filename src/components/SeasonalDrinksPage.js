import React from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    maxHeight: 330,
    overflowX: "hidden"
  },
  gridContainer: {
    //height: 320
  },
  chai: {
    color: "white",
    backgroundColor: '#9c5239',
  },
  mellow: {
    color: "white",
    backgroundColor: '#91b500',
  },
  apple: {
    color: "white",
    backgroundColor: '#88553d',
  },
  merry: {
    color: "white",
    backgroundColor: '#7070ff',
  },
  mint: {
    color: "white",
    backgroundColor: 'teal',
  },
  ginger: {
    color: "white",
    backgroundColor: '#ffbcbc',
  },
  mintMocha: {
    color: "white",
    backgroundColor: '#ff6262',
  },
  pumpkin: {
    color: "white",
    backgroundColor: '#ff9d47',
  }
});

function SeasonalDrinksPage(props) {

  const classes = useStyles();

  // const demoMethod = (value) => {
  //   props.sendTestData(value);
  // }

  const sendItemToAppHandler = (value) => {
    props.sendItemToApp(value);
  }

  return (
    <Paper className={classes.paper}>
      <Grid className={classes.gridContainer} container spacing={2} justify="space-around">
        {/* <div onClick={() => demoMethod("clicked from coffee page!")}>Hello from Coffee Page</div> */}
        <Grid item xs={2}>
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Holiday Chai", price: 3.99 })}>
            12oz Holi Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Holiday Chai", price: 4.99 })}>
            16oz Holi Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Holiday Chai", price: 5.51 })}>
            20oz Holi Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mellow} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Mellow Hot Choco", price: 3.99 })}>
            12oz Mellow Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mellow} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Mellow Hot Choco", price: 4.99 })}>
            16oz Mellow Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mellow} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Mellow Hot Choco", price: 5.51 })}>
            20oz Mellow Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.apple} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Apple Cider", price: 3.41 })}>
            12oz Apple Cider
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.apple} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Apple Cider", price: 3.68 })}>
            16oz Apple Cider
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.apple} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Apple Cider", price: 4.04 })}>
            20oz Apple Cider
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.merry} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Merry M. Latte", price: 4.73 })}>
            12oz Merry M. Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.merry} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Merry M. Latte", price: 5.51 })}>
            16oz Merry M. Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.merry} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Merry M. Latte", price: 5.78 })}>
            20oz Merry M. Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mint} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Mint Hot Chocolate", price: 4.73 })}>
            12oz Mint Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mint} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Mint Hot Chocolate", price: 5.78 })}>
            16oz Mint Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mint} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Mint Hot Chocolate", price: 6.25 })}>
            20oz Mint Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.ginger} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Gingerbread Latte", price: 4.73 })}>
            12oz Ginger Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.ginger} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Gingerbread Latte", price: 5.78 })}>
            16oz Ginger Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.ginger} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Gingerbread Latte", price: 6.25 })}>
            20oz Ginger Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mintMocha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Mint Mocha", price: 5.51 })}>
            12oz Mint Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mintMocha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Mint Mocha", price: 6.25 })}>
            16oz Mint Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.mintMocha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Mint Mocha", price: 6.56 })}>
            20oz Mint Mocha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.pumpkin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Pumpkin Latte", price: 4.46 })}>
            12oz Pumpkin Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.pumpkin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Pumpkin Latte", price: 5.25 })}>
            16oz Pumpkin Latte
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.pumpkin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Pumpkin Latte", price: 5.78 })}>
            20oz Pumpkin Latte
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default SeasonalDrinksPage;