import React, { useState } from "react";
import { Paper, Button, makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles({
  five: {
    color: "white",
    backgroundColor: '#779dcc',
  },
  ten: {
    color: "white",
    backgroundColor: '#927bb5',
  },
  twenty: {
    color: "white",
    backgroundColor: '#7daf6b',
  },
  form: {

  }
});

function CashInput(props) {
  const classes = useStyles();

  const { sendCashInputToApp } = props;

  const [amount, setAmount] = useState('');

  // const demoMethod = (value) => {
  //   props.sendTestDataToApp(value);
  // }

  const sendCashInputToAppHandler = (value) => {
    sendCashInputToApp(value);
    setAmount('')
  }

  const handleCashInputFormChange = (event) => {
    setAmount(event.target.value);
  }

  const sendCashInputForm = () => {
    sendCashInputToApp(amount);
    setAmount('')
  }

  return (
    <Paper>
      <br />
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs={5}>
        <FormControl className={classes.form} variant="outlined" size="small">
          <Grid container>
            <Grid item >
              <InputLabel htmlFor="cash-input-amount">Amount</InputLabel>
              <OutlinedInput
                id="cash-input-amount"
                value={amount}
                onChange={handleCashInputFormChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={60}
              />
            </Grid>
            <Grid item >
              <Button variant="contained" color="inherit" onClick={sendCashInputForm}>Enter</Button>
            </Grid>
          </Grid>
        </FormControl>
        </Grid>
        <Grid item  xs={2}>
          <Button fullWidth className={classes.five} variant="contained" color="primary" onClick={() => sendCashInputToAppHandler(5)}>
            $5
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.ten} variant="contained" color="secondary" onClick={() => sendCashInputToAppHandler(10)}>
            $10
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button fullWidth className={classes.twenty} variant="contained" color="inherit" onClick={() => sendCashInputToAppHandler(20)}>
            $20
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
}

export default CashInput;