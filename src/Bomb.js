import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  generateRatingElement = () => {
    // debugger
    if(this.props.initialCount > 0){
    return  <div>{this.props.initialCount} seconds left before I go boom!</div>
    }else{
      return 'Boom!'
    }
  };

  render(){
    return(
      <div>{this.generateRatingElement()}</div>
    )
  }
}
