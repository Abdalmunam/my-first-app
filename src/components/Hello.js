import React from 'react'

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.msg}, you were developed by {props.madeBy}</h1>
      {props.children}
      <button>A child Button</button>
    </div>
  )
}

export default Hello
