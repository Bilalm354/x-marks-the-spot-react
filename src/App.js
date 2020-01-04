import React from 'react';
import './App.css';



class Cards extends React.Component {
  render() {
    let cards = ['X']; // 2x2 grid 
    let rows = 3
    let numberOfEmptySquares = Math.pow(rows, 2) - 1
    for (var i = 0; i < numberOfEmptySquares; i++) {
      cards.push('O')
    }
    console.log(cards)
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(cards)
    // flip = () => {

    // }
    const squares = cards.map((card, index) =>
      <div className="square" key={index} onClick={flip}>{card}</div>
    )
    return (
      <div className="square-container">{squares}</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    }
  }
  flip = () => {

  }
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    )
  }
}

export default App;
