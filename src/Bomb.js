import React from 'react';
import { prependOnceListener } from 'cluster';
// import ReactDOM from 'react-dom';
class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        const displayMessage = () => {
            if (this.state.secondsLeft === 0) {
                return "Boom!"
            } else {
                return `${this.state.secondsLeft} seconds left before I go boom!`
            }
        }

        return (
            <h1>{displayMessage()}</h1>
        )
    }
}


export default Bomb;