import React, { useState, useEffect } from "react";
import { Button, Paper, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function SubmitCheck(props) {

  //check is an array with items
  const { check, total, clearAll } = props;

  //checks is an array of arrays
  const [checks, setChecks] = useState(() => {
    let checks = localStorage.getItem("checks");
    if (checks) {
      return JSON.parse(checks);
    } else {
      return [];
    }
  })

  const [totals, setTotals] = useState(() => {
    let totals = localStorage.getItem("totals");
    if (totals) {
      return JSON.parse(totals);
    } else {
      return [];
    }
  })

  const [open, setOpen] = useState(false);
  const [openTotalSalesDialog, setOpenTotalSalesDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [salesFromTotals, setSalesFromTotals] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const submitCheckHandler = () => {
    setChecks([...checks, check]);
    setTotals([...totals, total]);
    clearAll();
  }

  const showTotalSalesUsingCheck = () => {
    const checksFromLocalStorage = JSON.parse(localStorage.getItem("checks"));
    console.log(checksFromLocalStorage); //checksFromLocalStorage is an array of arrays
    let totalSales = 0;
    checksFromLocalStorage.forEach((check) => {
      check.forEach((item) => {
        totalSales += item.price
      })
    })
    console.log("Using Checks", totalSales.toFixed(2));
  }

  const showTotalSalesUsingTotal = () => {
    const totalsFromLocalStorage = JSON.parse(localStorage.getItem("totals"));
    console.log(totalsFromLocalStorage); //checksFromLocalStorage is an array of arrays
    let totalSales = 0;
    totalsFromLocalStorage.forEach((total) => {
      totalSales += parseFloat(total)
    })
    setSalesFromTotals(totalSales.toFixed(2))
    console.log("Using Total", totalSales.toFixed(2));
  }

  useEffect(() => {
    localStorage.setItem("checks", JSON.stringify(checks));
  }, [checks])

  useEffect(() => {
    localStorage.setItem("totals", JSON.stringify(totals));
  }, [totals])

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  const handlePasswordEntry = () => {
    if (password === "Kipp" || password === "kipp") {
      setPassword("")
      handleClose();
      openTotalSalesDialogHandler();
    }
  }

  const openTotalSalesDialogHandler = () => {
    setOpenTotalSalesDialog(true);
  }

  const openTotalSalesDialogClose = () => {
    setOpenTotalSalesDialog(false);
  }

  return (
    <div>
      <Paper>
        <Grid container>
          <Grid item xs={10}>
            <Button color="primary" variant="contained" fullWidth onClick={submitCheckHandler}>Submit Check</Button>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" variant="contained" fullWidth onClick={() => {
              showTotalSalesUsingCheck();
              showTotalSalesUsingTotal();
              setOpen(true);
            }}>Cashout</Button>
          </Grid>
        </Grid>
      </Paper>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Password</DialogTitle>
        <DialogContent>
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
          <Button onClick={handleClose} color="primary">
            Cancel
        </Button>
          <Button onClick={() => {
            handlePasswordEntry();
          }} color="primary">
            Enter
        </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openTotalSalesDialog} onClose={openTotalSalesDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Total Sales</DialogTitle>
        <DialogContent>
          <Typography>
            $ {salesFromTotals}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={openTotalSalesDialogClose} color="primary">
            Exit
        </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

export default SubmitCheck;