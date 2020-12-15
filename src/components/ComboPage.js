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
    backgroundColor: '#7070ff',
  },
  bagelButter: {
    color: "white",
    backgroundColor: '#ff6262',
  },
  bagelCC: {
    color: "white",
    backgroundColor: 'teal',
  },
  bagelWrap: {
    color: "white",
    backgroundColor: '#e92ea4',
  }
});

function ComboPage(props) {
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
          <Button fullWidth className={classes.muffin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Coffee/Muffin", price: 4.20 })}>
            12oz Coffee/Muffin
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.muffin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Coffee/Muffin", price: 4.31 })}>
            16oz Coffee/Muffin
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.muffin} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Coffee/Muffin", price: 4.46 })}>
            20oz Coffee/Muffin
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelButter} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Coffee Bagel w/ Butter", price: 3.99 })}>
            12oz C. Bagel w/ Butter
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelButter} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Coffee Bagel w/ Butter", price: 4.31 })}>
            16oz C. Bagel w/ Butter
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelButter} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Coffee Bagel w/ Butter", price: 4.46 })}>
            20oz C. Bagel w/ Butter
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelCC} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz C. Bagel w/ CC", price: 5.93 })}>
          12oz C. Bagel w/ CC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelCC} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz C. Bagel w/ CC", price: 6.25 })}>
          16oz C. Bagel w/ CC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelCC} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz C. Bagel w/ CC", price: 6.41 })}>
          20oz C. Bagel w/ CC
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelWrap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "12oz Coffee w/ Wrap", price: 6.29 })}>
            12oz Coffee w/ Wrap
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelWrap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "16oz Coffee w/ Wrap", price: 6.60 })}>
            16oz Coffee w/ Wrap
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.bagelWrap} variant="contained"  onClick={() => sendItemToAppHandler({ name: "20oz Coffee w/ Wrap", price: 6.76 })}>
            20oz Coffee w/ Wrap
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default ComboPage;