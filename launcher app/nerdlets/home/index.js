import './styles.scss';

import React, { Component } from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  resttoZero = () => {
    this.setState((prevState) => ({ count: prevState.count = 0 }));
  };


  render() {
    return (
      <div className='main'>
        <h2 className='heading'> <span>Counter: {this.state.count}</span></h2>
        <div className='button-div'>
          <button onClick={this.handleIncrement} className='button1'>Increment</button>
          <button onClick={this.handleDecrement} className='button1'>Decrement</button>
          <button onClick={this.resttoZero} className='button1'>Reset</button>
        </div>
      </div>
    );
  }
}
