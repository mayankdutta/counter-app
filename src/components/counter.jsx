import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/200"
  };

  render() {
    return (
      <React.Fragment>
        <img src = {this.state.imageURL}/>
        <span> {this.formatCount()} </span>
        <button className = "btn btn-primary btn-lg">Click Me </button>
      </React.Fragment>
  );
  }

  formatCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
  }
}

export default Counter;
