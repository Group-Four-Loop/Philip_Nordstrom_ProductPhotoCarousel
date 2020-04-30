import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render(){
    return (
      <div>
        <p>Current COunt: {this.state.count}</p>
        <button onClick={this.increment}>Increment count</button>
      </div>
    )
  }
}

export default Counter;