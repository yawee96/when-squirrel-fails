import React from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  cup: {
    color: "white",
    backgroundColor: '#7070ff',
  },
  coldDisplayItem: {
    color: "white",
    backgroundColor: 'teal',
  },
  soda: {
    color: "white",
    backgroundColor: 'green',
  },
  milkCarton: {
    color: "white",
    backgroundColor: '#e92ea4',
  }
});

function ColdDisplayPage(props) {
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
          <Button fullWidth className={classes.cup} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Fruit Cup", price: 2.63 })}>
            Fruit Cup
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cup} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Mango Pudding", price: 3.15 })}>
            Mango Pudding
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cup} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Yogurt Parfait", price: 3.99 })}>
            Yogurt Parfait
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Chocolate Brownie", price: 3.15 })}>
            Chocolate Brownie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Hawaiian Fruit Cake", price: 3.15 })}>
            Hawaiian Fruit Cake
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Blueberry Crumble", price: 3.15 })}>
            Blueberry Crumble
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Lemon Bar", price: 3.15 })}>
            Lemon Bar
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Oatmeal Coco Cookie", price: 3.68 })}>
            Oatmeal Coco Cookie
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Choc Truffle Cake", price: 4.73 })}>
            Choc Cake
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Tiramisu", price: 5.78 })}>
            Tiramisu
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Oat Fudge Bar", price: 3.15 })}>
            Oat Fudge Bar
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Pecan Butter Tart", price: 3.15 })}>
            Pecan Butter Tart
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Apple Cinnamon Square", price: 3.15 })}>
            Apple C. Square
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Blueberry Lemon Cheesecake", price: 3.15 })}>
            Blueberry L. Cheesecake
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Eggnog Cheesecake", price: 4.73 })}>
            Eggnog Cheesecake
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Dessert Pack", price: 5.25 })}>
            Dessert Pack
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth className={classes.coldDisplayItem} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Baklava", price: 2.63 })}>
            Baklava
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.soda} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Soda", price: 2.09 })}>
            Soda
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.milkCarton} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Milk Carton", price: 2.36 })}>
            Milk Carton
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default ColdDisplayPage;