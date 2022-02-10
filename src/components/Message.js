import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg: 'Press The Button'
      }
    }
    changeMessage(){
        this.setState({
            msg: 'You Pressed The Button'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=> this.changeMessage()} >Press Me</button>
      </div>
    )
  }
}

export default Message
