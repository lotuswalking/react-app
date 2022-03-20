import React, { Component } from "react";
import Board from "./Board";
import $ from "jquery";
import Move from "./Move";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      winner: "",
      status: "Running",
      isGameOver: false,
      stepNumber: 0,
      xIsNext: true,
    };
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  moves = [];
  handleClick(target) {
    if (this.state.isGameOver) return;
    let i = target.value;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    target.textContent = squares[i];
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    if (this.calculateWinner(squares) && squares[i]) {
      this.setState({ isGameOver: true, winner: squares[i], status: "End" });
      return;
    }
  }
  componentDidMount() {
    $("button.square").on("click", (e) => {
      //   console.log(e.target.value);
      this.handleClick(e.target);
    });
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>Game State:{this.state.status}</div>
          <div>Next Play:: {this.state.xIsNext ? "X" : "O"}</div>
          <div>Winner: {this.state.winner}</div>
          <Move data={this.state.stepNumber} />
        </div>
      </div>
    );
  }
}

export default Game;
