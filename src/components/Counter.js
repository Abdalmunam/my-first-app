import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increaseCount(){
        this.setState(
          (previusState) => ({count: previusState.count + 1})
        ,()=>{console.log('Callback value is: ', this.state.count)})
        console.log(this.state.count)
    }
    increaseFive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
    }
  render() {
    return (
      <div>
        <h1>Count = {this.state.count} </h1>
        <button onClick={()=>{this.increaseCount()}} >Increase</button>
        <button onClick={()=>{this.increaseFive()}} >Increase Five</button>
      </div>
    )
  }
}
export default Counter
