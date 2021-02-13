import React, { useState, useEffect } from "react";
import "./App.css";
import Bitcoin from './Bitcoin'

const App = () => {

  const [bitcoins, setBitcoins] = useState([])

  useEffect(() => {
    getBitcoins()
  }, [])

  const getBitcoins = async () => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await response.json()
    setBitcoins(data)
    console.log(data)
  }

  return (
  <>
    <div className="App">
      <Bitcoin {...bitcoins} />
    </div>
  </>
  )
}

export default App;
