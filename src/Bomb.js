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
    if(this.state.secondsLeft > 0){
    return  <div>{this.state.secondsLeft} seconds left before I go boom!</div>
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
