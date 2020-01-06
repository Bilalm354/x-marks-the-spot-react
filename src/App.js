import React from 'react';
import './App.css';



class Cards extends React.Component {
  render() {
    let cards = [{available: true}]; // 2x2 grid 
    let rows = 20
    let numberOfEmptySquares = Math.pow(rows, 2) - 1
    for (var i = 0; i < numberOfEmptySquares; i++) {
      cards.push({available:false})
    }

    const squares = cards.map((card, index) =>
  <div className="square" key={index}></div>
    )
    // Now need conditional rendering to display availble squares as different colour to unavailable squares 
    return (
      <div className="square-container">{squares}</div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    )
  }
}

export default App;
