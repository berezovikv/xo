import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count : 0,
      

    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]

    ]
  }
  isWinner = () => {
    let s = (this.state.count % 2 ===0 ) ? '×' : 'о';
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s){
          alert (s + " " +'win');

        }
    }
  }

  cleanAll = () => {
    this.setState({squares : Array(9).fill(null) });
    this.setState({count : 0 })

  }

  clickHandler = event => {
    console.log(1);
    // номер квадрата по которому кликнули
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    console.log(currentSquares);
    if(currentSquares[data] === null){
      currentSquares[data] = (this.state.count % 2 === 0) ? '×' : 'o';
      this.setState({ count : this.state.count + 1 });
      this.setState({ squares : currentSquares });
  }
    else {
      alert('нельзя');
    }
    this.isWinner();
  }
  render() {
    return (
      <div className ="xox">
      <div className="game">
        <div className="game-item" onClick={this.clickHandler} data="0">
        {this.state.squares[0]}</div>
        <div className="game-item" onClick={this.clickHandler} data="1">
        {this.state.squares[1]}</div>
        <div className="game-item" onClick={this.clickHandler} data="2">
        {this.state.squares[2]}</div>
        <div className="game-item" onClick={this.clickHandler} data="3">
        {this.state.squares[3]}</div>
        <div className="game-item" onClick={this.clickHandler} data="4">
        {this.state.squares[4]}</div>
        <div className="game-item" onClick={this.clickHandler} data="5">
        {this.state.squares[5]}</div>
        <div className="game-item" onClick={this.clickHandler} data="6">
        {this.state.squares[6]}</div>
        <div className="game-item" onClick={this.clickHandler} data="7">
        {this.state.squares[7]}</div>
        <div className="game-item" onClick={this.clickHandler} data="8">
        {this.state.squares[8]}</div>
      </div>
      <button id="reset-game" onClick={this.cleanAll}>Очистить</button>
      </div>
    )
  }
}

export default App;
