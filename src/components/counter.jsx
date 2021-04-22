import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  /* Method 1 */
  constructor() {
    super();
    this.increaseValue = this.increaseValue.bind(this);
  }

  increaseValue() {
    this.setState({count: this.state.count + 1});
  }
  /* end of Method 1 */

  /*
   * Method 2
   *
  increaseValue() {
    this.setState({
      count: this.state.count + 1});
  }
   * End of method 2
   */

  stylingBadge() {
    let classToAdd = "badge m-2 badge-";
    // if (this.state.count === 0) classToAdd += "danger";
    // else classToAdd += "primary";

    return (this.state.count === 0 ? classToAdd + "danger" : classToAdd + "primary");
  }
  /*
   * Make sure to call this.increaseValue not the this.increaseValue()
   * Reason being we wish to call by reference,
   * and this is not the express js
   * What to do if we really want to call with parameter, call to one without one, then from there direct the call to increaseValue with a parameter(similar to leetcode)
   * THERE WILL BE NO PARAMETER IN EVENT CALLING FUNCTION
   */
  render() {
    return (
      <div>
        <span className = {this.stylingBadge()}> {this.formatCount()} </span>
        <button onClick={this.increaseValue} className = "btn btn-secondary btn-sm" >Increment</button>
      </div>
  ); }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
