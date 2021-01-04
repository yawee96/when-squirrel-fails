import React, {useState, useEffect} from "react";

import firebase from "firebase/app"

function BarStation() {

  const [drinks, setDrinks] = useState(null)

  useEffect(() => {
    firebase
      .firestore()
      .collection('drinks')
      .onSnapshot( serverUpdate => {
        const drinks = serverUpdate.docs.map( _doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log("DRINKS FROM BAR STATION: ", drinks);
        setDrinks({drinks: drinks})
      })
  }, [])

  return (
    <div>
      <h1>Bar Station</h1>
    </div>
  )
}

export default BarStation;