import React, { useState } from "react";
import { Container, Typography, Paper, List, Grid, ListItem, ListItemText, Button, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  paper: {
    height: "400px",
    overflowX: "hidden"
  }
})

function Check(props) {

  const classes = useStyles();

  const { removeItem } = props;

  const demoMethod = (value) => {
    //props.sendCheckToApp(value);
  }

  const removeItemHandler = (index) => {
    console.log(index);
    removeItem(index);
  }

  const showCheck = () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <List>
            {
              props.check.map((item, index) => {
                console.log(item)
                return (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.name}
                      secondary={item.price.toFixed(2)}
                    />
                    <IconButton edge="end" onClick={() => { removeItemHandler(index) }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                )
              })
            }
          </List>
        </Grid>
      </Grid>
    )

  }

  return (
    <Paper className={classes.paper}>
      <Container>
        <Typography>New Check</Typography>
        {showCheck()}
      </Container>
    </Paper>

  );
}

export default Check;