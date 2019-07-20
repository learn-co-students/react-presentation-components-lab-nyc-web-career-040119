import React from 'react';
import ReactDOM from 'react-dom';

export default function SimplerComponent(props) {
  return (
    <div onClick={props.handleClick}>
      "I am just happy"
    </div>
  )
}
