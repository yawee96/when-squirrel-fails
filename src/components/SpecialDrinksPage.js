import React  from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  chai: {
    color: "white",
    backgroundColor: '#9c5239',
  },
  matcha: {
    color: "white",
    backgroundColor: '#91b500',
  },
  hotChoco: {
    color: "white",
    backgroundColor: '#88553d',
  },
  londonFog: {
    color: "white",
    backgroundColor: '#7070ff',
  },
  steamedMilk: {
    color: "black",
    backgroundColor: 'white',
  },
  refresher: {
    color: "white",
    backgroundColor: '#ffbcbc',
  },
  frap: {
    color: "white",
    backgroundColor: '#e92ea4',
  }
});

function SpecialDrinksPage(props) {

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
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Chai Latte", price: 3.68, type: "drink" })}>
            12oz Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Chai Latte", price: 3.83, type: "drink" })}>
            16oz Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.chai} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Chai Latte", price: 4.15, type: "drink" })}>
            20oz Chai
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.matcha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Matcha Latte", price: 4.78, type: "drink" })}>
            12oz Matcha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.matcha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Matcha Latte", price: 5.20, type: "drink" })}>
            16oz Matcha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.matcha} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Matcha Latte", price: 6.04, type: "drink" })}>
            20oz Matcha
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.londonFog} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz London Fog", price: 3.68, type: "drink" })}>
            12oz L. Fog
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.londonFog} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz London Fog", price: 3.83, type: "drink" })}>
            16oz L. Fog
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.londonFog} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz London Fog", price: 4.15, type: "drink" })}>
            20oz L. Fog
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth  variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Hot Chocolate", price: 3.62, type: "drink" })}>
            12oz Hot Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth  variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Hot Chocolate", price: 4.67, type: "drink" })}>
            16oz Hot Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth  variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Hot Chocolate", price: 4.99, type: "drink" })}>
            20oz Hot Choco
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.steamedMilk} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Steamed Milk", price: 2.63, type: "drink" })}>
            12oz S. Milk
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.steamedMilk} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Steamed Milk", price: 3.10, type: "drink" })}>
            16oz S. Milk
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.steamedMilk} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Steamed Milk", price: 3.52, type: "drink" })}>
            20oz S. Milk
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.refresher} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Refresher", price: 3.94, type: "drink" })}>
            12oz Refresher
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.refresher} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Refresher", price: 4.10, type: "drink" })}>
            16oz Refresher
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.refresher} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Refresher", price: 4.31, type: "drink" })}>
            20oz Refresher
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth className={classes.frap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Frappucino", price: 5.25, type: "drink" })}>
            Frappucino
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default SpecialDrinksPage;