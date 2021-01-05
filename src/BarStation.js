import React, { useState, useEffect } from "react";
import { Grid, IconButton, makeStyles, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import firebase from "firebase/app"

function BarStation() {

  const [drinks, setDrinks] = useState(null)

  useEffect(() => {
    async function fetchData() {
      await firebase
        .firestore()
        .collection('bar-station')
        .orderBy('timestamp', 'desc')
        .onSnapshot(serverUpdate => {
          const drinks = serverUpdate.docs.filter(_doc => {
            if (_doc.data().isActive) {
              return true;
            }
            return false;
          }).map(_doc => {
            // if (_doc.data().isActive) {
            //   console.log("Bar Station _doc: ", _doc)
            //   const data = _doc.data();
            //   data['id'] = _doc.id;
            //   console.log("Bar Station data: ", data)
            //   return data;
            // }
            // return;
            console.log("Bar Station _doc: ", _doc)
            const data = _doc.data();
            data['id'] = _doc.id;
            console.log("Bar Station data: ", data)
            return data;
          });
          console.log("DRINKS FROM BAR STATION: ", drinks);
          setDrinks({ drinks: drinks })
        })
    }
    fetchData();
  }, [])

  //   useEffect(() => {
  //   async function fetchData() {
  //     await firebase
  //       .firestore()
  //       .collection('bar-station')
  //       .orderBy('timestamp', 'desc')
  //       .onSnapshot(serverUpdate => {
  //         const drinks = serverUpdate.docs.map(_doc => {
  //           // if (_doc.data().isActive) {
  //           //   console.log("Bar Station _doc: ", _doc)
  //           //   const data = _doc.data();
  //           //   data['id'] = _doc.id;
  //           //   console.log("Bar Station data: ", data)
  //           //   return data;
  //           // }
  //           // return;
  //           console.log("Bar Station _doc: ", _doc)
  //           const data = _doc.data();
  //           data['id'] = _doc.id;
  //           console.log("Bar Station data: ", data)
  //           return data;
  //         });
  //         console.log("DRINKS FROM BAR STATION: ", drinks);
  //         setDrinks({ drinks: drinks })
  //       })
  //   }
  //   fetchData();
  // }, [])

  const showAddOns = (item) => {
    if ("addOns" in item) {
      return (
        <ul>{
          item.addOns.map((addOn, index) => {
            return <li>{addOn}</li>
          })
        }</ul>
      )
    }
  }

  const removeCheckHandler = (id) => {
    console.log("REMOVE CHECK HANDLER: ", id);
    firebase
      .firestore()
      .collection('bar-station')
      .doc(id)
      .update({
        isActive: false
      })
  }

  const showDrinks = () => {
    if (drinks === null) {
      return null;
    }
    else {
      return drinks.drinks.map((drink, index) => {
        return (
          <Grid item xs={2}>
            <Paper key={index}>
              <IconButton edge="end" onClick={() => { removeCheckHandler(drink.id) }}>
                <DeleteIcon />
              </IconButton>
              {drink.items.map((item, index) => {
                return (
                  <div>
                    <h4 style={{color: "#00c400"}} key={index}>{item.name}</h4>
                    {
                      showAddOns(item)
                    }
                  </div>)
              })}</Paper>
          </Grid>
        )
      })
    }
  }


  return (
    <div>
      <h1>Bar Station</h1>
      <Grid container spacing={2}>
        {showDrinks()}
      </Grid>
    </div>
  )
}

export default BarStation;