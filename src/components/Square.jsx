import React, { Component } from "react";

class Square extends Component {
  handleClick(i) {
    console.log(i);
    this.props.onClick(i);
  }
  render() {
    return <button className="square" value={this.props.value} />;
  }
}
export default Square;
