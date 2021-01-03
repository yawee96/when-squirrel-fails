import React, { useState } from "react";
import { Container, Typography, Paper, List, Grid, ListItem, ListItemText, Button, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  paper: {
    height: "70vh",
    overflowX: "hidden"
  }
})

function Check(props) {

  const classes = useStyles();

  const { removeItem, editItem } = props;

  const [openEditDrinkDialog, setOpenEditDrinkDialog] = useState(false);
  const [openEditBagelDialog, setOpenEditBagelDialog] = useState(false);
  const [openEditSandwichDialog, setOpenEditSandwichDialog] = useState(false);
  const [openEditBagelButterDialog, setOpenEditBagelButterComboDialog] = useState(false);
  const [openEditBagelCreamDialog, setOpenEditBagelCreamComboDialog] = useState(false);
  const [openEditBagelWrapDialog, setOpenEditBagelWrapComboDialog] = useState(false);

  const [indexOfItemToEdit, setIndexOfItemToEdit] = useState(null);

  // const demoMethod = (value) => {
  //   props.sendCheckToApp(value);
  // }

  const removeItemHandler = (index) => {
    console.log(index);
    removeItem(index);
  }

  const handleCloseEditDrinkDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditDrinkDialog(false);
  };

  const handleCloseEditBagelDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditBagelDialog(false);
  };

  const handleCloseEditSandwichDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditSandwichDialog(false);
  };

  const handleCloseEditBagelButterComboDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditBagelButterComboDialog(false);
  };

  const handleCloseEditBagelCreamComboDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditBagelCreamComboDialog(false);
  };

  const handleCloseEditBagelWrapComboDialog = () => {
    setIndexOfItemToEdit(null);
    setOpenEditBagelWrapComboDialog(false);
  };

  const showAddOns = (item) => {
    if ("addOns" in item) {
      console.log("HEEEEEEEEERE")
      return item.addOns.map((addOn, index) => {
        console.log(addOn.name)
        return (
          <ListItemText
            inset="true"
            secondary={addOn.name + "  -  " + addOn.price.toFixed(2)}
          />
        )
      })
    } else {
      return (
        null
      )
    }
  }

  const showEditButton = (item, index) => {
    if (item.type === null || item.type === "wrap") {
      return <></>
    }
    else {
      return (
        <IconButton edge="end" onClick={() => {
          setIndexOfItemToEdit(index);
          if (item.type === "drink") {
            setOpenEditDrinkDialog(true);
          }
          else if (item.type === "bagel") {
            setOpenEditBagelDialog(true);
          }
          else if (item.type === "sandwich") {
            setOpenEditSandwichDialog(true);
          }
          else if (item.type === "bagelButterCombo") {
            setOpenEditBagelButterComboDialog(true);
          }
          else if (item.type === "bagelCreamCombo") {
            setOpenEditBagelCreamComboDialog(true);
          }
          else if (item.type === "bagelWrapCombo") {
            setOpenEditBagelWrapComboDialog(true);
          }
        }}
        >
          <EditIcon />
        </IconButton>
      )
    }
  }

  const showCheck = () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <List>
            {
              props.check.map((item, index) => {
                return (
                  <div>
                    <ListItem key={index}>
                      <ListItemText
                        primary={item.name}
                        secondary={item.price.toFixed(2)}
                      />
                      {showEditButton(item, index)}
                      {/* <IconButton edge="end" onClick={() => {
                        setIndexOfItemToEdit(index);
                        if (item.type === "drink") {
                          setOpenEditDrinkDialog(true);
                        }
                        else if (item.type === "bagel") {
                          setOpenEditBagelDialog(true);
                        }
                        else if (item.type === "sandwich") {
                          setOpenEditSandwichDialog(true);
                        }
                      }}
                      >
                        <EditIcon />
                      </IconButton> */}
                      <IconButton edge="end" onClick={() => { removeItemHandler(index) }}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                    {showAddOns(item)}
                  </div>
                )
              })
            }
          </List>
        </Grid>
      </Grid>
    )

  }

  return (
    <div>
      <Paper className={classes.paper}>
        <Container>
          <Typography>New Check</Typography>
          {showCheck()}
        </Container>
      </Paper>

      {/* =================================================================================================================================
                                                          EDIT DRINK DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"lg"} open={openEditDrinkDialog} onClose={handleCloseEditDrinkDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Drink Add Ons</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Caramel Syrup", price: 0.79 })}>
                Caramel
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Chocolate Syrup", price: 0.79 })}>
                Chocolate Syrp
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Gingerbread Syrup", price: 0.79 })}>
                Gingerbread
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Hazelnut Syrup", price: 0.79 })}>
                Hazelnut
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Irish Cream Syrup", price: 0.79 })}>
                Irish Crm
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Peppermint Syrup", price: 0.79 })}>
                Peppermint
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Pumpkin Syrup", price: 0.79 })}>
                Pumpkin
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "SF Vanilla Syrup", price: 0.79 })}>
                SF Vanilla
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Vanilla Syrup", price: 0.79 })}>
                Vanilla
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Almond Milk", price: 0.74 })}>
                Almond Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Soy Milk", price: 0.74 })}>
                Soy Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Oat Milk", price: 0.74 })}>
                Oat Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Steamed Milk", price: 0.74 })}>
                Steamed Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Espresso Shot", price: 1.05 })}>
                Espresso Shot
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Splash of Almond Milk", price: 0.00 })}>
                Splash of Almond Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Splash of Oat Milk", price: 0.00 })}>
                Splash of Oat Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Splash of Soy Milk", price: 0.00 })}>
                Splash Soy Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "1 Sugar", price: 0.00 })}>
                1 Sugar
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "1 Cream", price: 0.00 })}>
                1 Cream
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "1 Milk", price: 0.00 })}>
                1 Milk
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "black", price: 0.00 })}>
                black
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "room", price: 0.00 })}>
                room
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "decaf", price: 0.00 })}>
                decaf
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "half decaf", price: 0.00 })}>
                half decaf
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "extra foam", price: 0.00 })}>
                extra foam
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "no foam", price: 0.00 })}>
                no foam
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "extra hot", price: 0.00 })}>
                extra hot
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "12oz cup size", price: 0.00 })}>
                12oz cup size
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "16oz cup size", price: 0.00 })}>
                16oz cup size
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "20oz cup size", price: 0.00 })}>
                20oz cup size
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "on ice", price: 0.00 })}>
                on ice
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "less ice", price: 0.00 })}>
                less ice
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "cold but no ice", price: 0.00 })}>
                cold but no ice
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "extra ice", price: 0.00 })}>
                extra ice
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "whip-yes", price: 0.00 })}>
                whip-yes
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "whip-no", price: 0.00 })}>
                whip-no
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditDrinkDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>


      {/* =================================================================================================================================
                                                          EDIT BAGEL DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"lg"} open={openEditBagelDialog} onClose={handleCloseEditBagelDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Bagel Add-ons</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Plain", price: 0.00 })}>
                Plain
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Everything", price: 0.00 })}>
                Everything
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sesame", price: 0.00 })}>
                Sesame
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Rosemary", price: 0.00 })}>
                Rosemary
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Jalapeno", price: 0.00 })}>
                Jalapeno
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sundried", price: 0.00 })}>
                Sundried
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Butter", price: 0.00 })}>
                Butter
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Naked", price: 0.00 })}>
                Naked
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Plain CC", price: 1.94 })}>
                Plain CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Lite CC", price: 1.94 })}>
                Lite CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Jalapeno Cheddar CC", price: 1.94 })}>
                Jalapeno Cheddar CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sundried CC", price: 1.94 })}>
                Sundried CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Garlic Onion CC", price: 1.94 })}>
                Garlic Onion CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Salmon Add-on", price: 2.63 })}>
                Salmon Add-on
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditBagelDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>


      {/* =================================================================================================================================
                                                          EDIT SANDWICH DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"lg"} open={openEditSandwichDialog} onClose={handleCloseEditSandwichDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose an Option</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Toasted", price: 0.00 })}>
                Toasted
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Extra Toasted", price: 0.00 })}>
                Extra Toasted
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditSandwichDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>




      {/* =================================================================================================================================
                                                          EDIT BAGEL BUTTER DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"lg"} open={openEditBagelButterDialog} onClose={handleCloseEditBagelButterComboDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Bagel</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Plain", price: 0.00 })}>
                Plain
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Everything", price: 0.00 })}>
                Everything
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sesame", price: 0.00 })}>
                Sesame
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Rosemary", price: 0.00 })}>
                Rosemary
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Jalapeno", price: 0.00 })}>
                Jalapeno
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sundried", price: 0.00 })}>
                Sundried
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditBagelButterComboDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>


      {/* =================================================================================================================================
                                                          EDIT BAGEL CREAM CHEESE DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"lg"} open={openEditBagelCreamDialog} onClose={handleCloseEditBagelCreamComboDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Bagel and Cream Cheese</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Plain", price: 0.00 })}>
                Plain
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Everything", price: 0.00 })}>
                Everything
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sesame", price: 0.00 })}>
                Sesame
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Rosemary", price: 0.00 })}>
                Rosemary
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Jalapeno", price: 0.00 })}>
                Jalapeno
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sundried", price: 0.00 })}>
                Sundried
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Plain CC", price: 0.00 })}>
                Plain CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Lite CC", price: 0.00 })}>
                Lite CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Jalapeno Cheddar CC", price: 0.00 })}>
                Jalapeno Cheddar CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Sundried CC", price: 0.00 })}>
                Sundried CC
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Garlic Onion CC", price: 0.00 })}>
                Garlic Onion CC
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditBagelCreamComboDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>


      {/* =================================================================================================================================
                                                          EDIT BAGEL WRAP DIALOG
      ================================================================================================================================= */}
      <Dialog fullWidth maxWidth={"sm"} open={openEditBagelWrapDialog} onClose={handleCloseEditBagelWrapComboDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Wrap</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={4}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Salsa Wrap", price: 0.00 })}>
                Salsa Wrap
          </Button>
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained" onClick={() => editItem(indexOfItemToEdit, { name: "Bacon Wrap", price: 0.00 })}>
                Bacon Wrap
          </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleCloseEditBagelWrapComboDialog} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Check;