import React, { Component } from 'react';

export class Hellow extends Component {
    
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.msg}, you were developed by {this.props.madeBy}
        </h1>
      </div>
    )
  }
}

export default Hellow;
