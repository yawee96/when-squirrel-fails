import './App.css';

import React, { useState, useEffect } from "react";
import Check from "./components/Check";
import Pages from "./components/Pages";
import Total from "./components/Total";
import CashInput from "./components/CashInput";
import SubmitCheck from "./components/SubmitCheck";
import { Container, Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  container: {
    marginTop: "5px"
  }
})

function App() {

  const classes = useStyles();

  //state
  //  - orders
  //  - cash input (ie. 2.75, 5, 10, 20)
  const [check, setCheck] = useState([])
  const [total, setTotal] = useState(0);
  const [cashInput, setCashInput] = useState(0);
  //const [checks, setChecks] = useState([])
  const [openFormDialog, setOpenFormDialog] = useState(false)
  const [password, setPassword] = useState('');


  const addItemToCheck = (val) => {
    console.log(val);
    console.log("Not Updated Check: ", check)
    setCheck([...check, val])
  }

  const getTestData = (val) => {
    console.log(val)
  }

  const getCashInput = (val) => {
    console.log(val);
    setCashInput(val);
  }

  const roundTotal = (total) => {
    const fixed2Total = total.toFixed(2);
    const fixed1Total = Math.trunc(total*10)/10;
    console.log("fixed2Total: ", fixed2Total);
    console.log("fixed1Total: ", fixed1Total);
    const hundredthPlace = Math.abs(parseFloat((fixed2Total - fixed1Total).toFixed(2)));
    console.log("hundredthPlace: ", hundredthPlace);

    //TODO
    //if 100th place ends in 1 || 2 return 0.00
    //if 100th place ends in 3 || 4 || 6 || 7 return 0.05
    //if 100th place ends in 8 || 9 return 0.10

    let addToFixed1Total = Math.abs(parseFloat(hundredthPlace));
    console.log("Start addToFixed1Total: ", addToFixed1Total)
    if(hundredthPlace === 0.01 || hundredthPlace === 0.02){
      addToFixed1Total = 0.00;
    }
    else if (hundredthPlace === 0.03 || hundredthPlace === 0.04 || hundredthPlace === 0.06 || hundredthPlace === 0.07){
      addToFixed1Total = 0.05;
    }
    else if (hundredthPlace === 0.08 || hundredthPlace === 0.09) {
      addToFixed1Total = 0.10;
    }
    console.log("End addToFixed1Total: ", addToFixed1Total)
    const roundedTotal = parseFloat(fixed1Total) + addToFixed1Total;
    return roundedTotal.toFixed(2);
  }


  useEffect(() => {
    let total = 0;
    check.forEach((item) => {
      total += item.price;
    })
    const roundedTotal = roundTotal(total)
    setTotal(roundedTotal);
    console.log("Check has changed")
  }, [check])

  const getChange = () => {
    return cashInput - total;
  }

  const removeItem = (index) => {
    console.log("Index in remove: " ,index);
    console.log("Check in remove: " ,check)
    let tempCheck = [...check];
    tempCheck.splice(index, 1);
    console.log("Spliced in remove: ", tempCheck);
    setCheck(tempCheck);
  }

  const clearAll = () => {
    setCheck([]);
    setCashInput(0);
  }

  const openFormDialogHandler = () => {
    setOpenFormDialog(true);
  }

  const handleCloseDialogHandler = () => {
    setOpenFormDialog(false);
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  const startNewDay = () => {
    if(password === "Kipp" || password === "kipp"){
       //set localStorage to []
       localStorage.clear();
       localStorage.setItem("checks", "[]")
       localStorage.setItem("totals", "[]")
       setPassword("")
       //close dialog and notify new day has started
       handleCloseDialogHandler();
       window.location.reload();
    }
    //close dialog
  }

  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Check check={check} removeItem={removeItem}/>
          </Grid>
          <Grid item xs={9}>
            <Pages sendItemToApp={addItemToCheck} sendTestDataToApp={getTestData} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Total total={total} sendTestDataToApp={getTestData} change={getChange()} cashInput={cashInput}/>
          </Grid>
          <Grid item xs={9}>
            <CashInput sendTestDataToApp={getTestData} sendCashInputToApp={getCashInput}/>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Button variant="contained" color="secondary" onClick={clearAll}>Clear</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="secondary" onClick={openFormDialogHandler}>New Day</Button>
          </Grid>
          <Grid item xs={9}>
            <SubmitCheck sendTestDataToApp={getTestData} clearAll={clearAll} check={check} total={total}/>
          </Grid>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={4}>
            <Orders sendData={getData} />
          </Grid>
          <Grid item xs={8}>
            <Pages sendData={getData} />
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item xs={8}>
            <Pages sendData={getData} />
          </Grid>
        </Grid> */}
      </Container>
      <Dialog
        open={openFormDialog}
        onClose={handleCloseDialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Start a New Day?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter password to start a new day
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={handlePasswordInput}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogHandler} color="primary">
            Exit
          </Button>
          <Button onClick={startNewDay} color="primary" autoFocus>
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
