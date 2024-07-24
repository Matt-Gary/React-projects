import React from 'react';
import Fruits from "./Fruits.jsx";
import './index.css'; // Make sure to import your styles

function App() {
  const fruits = ["apple", "orange", "banana", "pineapple"]
  fruits.sort((a,b) => a.localeCompare(b))
  return (
    <Fruits items = {fruits}/>
  )

}

export default App
