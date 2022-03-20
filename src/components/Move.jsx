import React, { Component } from "react";
class Move extends Component {
  state = {};
  moves = [];
  componentDidMount() {
    console.log(this.props.data);
    this.moves = this.props.data;
  }
  render() {
    return <ol></ol>;
  }
}

export default Move;
