import React, { useState, useEffect } from "react";
import { Paper } from '@material-ui/core';

function ViewChecks() {

  const [checks, setChecks] = useState([]);


  const displayChecks = () => {
    return checks.map((check, index) => {
      return (<div style={{marginBottom: "5px", padding: " 0 10px"}}>
        <Paper>
          <span>{index} : </span>
          {JSON.stringify(check)}
        </Paper>
      </div>
      )
    })
  }

  useEffect(() => {
    let checks = localStorage.getItem("checks");
    setChecks(JSON.parse(checks));
  }, [])

  return (
    <div>
      <h2>
        View Checks
    </h2>
      {
        displayChecks()
      }
    </div>
  )
}

export default ViewChecks;