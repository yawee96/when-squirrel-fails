import React from "react";
import { Paper } from '@material-ui/core';

function Total(props) {

  const { total, change, cashInput } = props

  // const demoMethod = (value) => {
  //   props.sendTestDataToApp(value);
  // }

  // const roundTotal = (total) => {
  //   return total
  // }

  const showCashInput = () => {
    return (
      <div>
        <p>Cash Input: ${parseFloat(cashInput).toFixed(2)}</p>
      </div>
    )
  }

  const showTotal = () => {
    return (
      <div>
        <p>Rounded Total: ${total}</p>
      </div>
    )
  }

  const showChange = () => {
    if (cashInput === null || cashInput <= 0) {
      return (
        <div>
          <p>Change: Enter Cash</p>
        </div>
      )
    }
    else if (change < 0) {
      //TODO MAKE RED COLOR
      return (
      <div>
        <p>Change: ${change.toFixed(2)}</p>
        <p>TODO MAKE RED COLOR</p>
        <p>Customer owes ${Math.abs(change).toFixed(2)} more</p>
      </div>
      )
    }
    else {
      return (
        <div>
          <p>Change: ${change.toFixed(2)}</p>
        </div>
        )
    }
  }

  return (
    <Paper>
      {showCashInput()}
      {showTotal()}
      {showChange()}
    </Paper>

  );
}

export default Total;