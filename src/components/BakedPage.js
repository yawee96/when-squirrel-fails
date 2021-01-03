import React from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  paper: {
    height: 320,
    overflowX: "hidden"
  },
  muffin: {
    color: "white",
    backgroundColor: '#e92ea4',
  },
  blueberryScone: {
    color: "white",
    backgroundColor: '#ffb327',
  },
  cheeseScone: {
    color: "white",
    backgroundColor: '#ffb327',
  },
  plainCroissant: {
    color: "white",
    backgroundColor: '#764c00',
  },
  chocoCroissant: {
    color: "white",
    backgroundColor: '#764c00',
  },
  bEggPastry: {
    color: "black",
    backgroundColor: '#ffd589',
  },
  spanakopita: {
    color: "white",
    backgroundColor: '#55ae00',
  },
  cinnamonBun: {
    color: "white",
    backgroundColor: '#800000',
  },
  veganBananaBread: {
    color: "white",
    backgroundColor: '#8b4513',
  },
  loaf: {
    color: "white",
    backgroundColor: '#bb0000',
  },
  cupcake: {
    color: "white",
    backgroundColor: '#ff1d00',
  },
  dayOld: {
    color: "white",
    backgroundColor: "#6262ff"
  }
});

function BakedPage(props) {

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
          <Button fullWidth className={classes.muffin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Muffin", price: 2.15, type: null })}>
            Muffin
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.blueberryScone} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Blueberry Scone", price: 2.63, type: null  })}>
            Blue. Scone
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cheeseScone} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Cheese Scone", price: 2.63, type: null  })}>
            Cheese Scone
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.plainCroissant} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Plain Croissant", price: 2.63, type: null  })}>
            Plain Croiss
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.chocoCroissant} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Chocolate Croissant", price: 3.15, type: null  })}>
            Choco Croiss
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bEggPastry} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Breakfast Egg Pastry", price: 3.68, type: null  })}>
            B. Egg Pastry
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.spanakopita} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Spanakopita", price: 4.99, type: null  })}>
            Spanakopita (Spinach Pie)
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cinnamonBun} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Cinnamon Bun", price: 3.68, type: null  })}>
            Cinnamon Bun
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.veganBananaBread} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Vegan Banana Bread", price: 2.63, type: null  })}>
            Vegan B. Bread
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.loaf} variant="contained"  onClick={() => sendItemToAppHandler({ name: "L/R/B Loaf", price: 3.15, type: null  })}>
            L/R/B Loaf
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.cupcake} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Cupcake", price: 2.63, type: null  })}>
            Cupcake
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.dayOld} variant="contained"  onClick={() => sendItemToAppHandler({ name: "Day Old", price: 1.00, type: null  })}>
            Day Old
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default BakedPage;