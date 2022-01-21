import React, {Component} from "react";
import io from 'socket.io-client'

const socketUrl = ":4000"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      myValue : "not received"
    };
  }

  componentDidMount = () => {

    const socket = io(socketUrl)
    socket.on('connect', () =>{
      console.log("Connected Socket ID: " + socket.id);
      this.setState({
        myValue: socket.id
      });
    })

  };

  render(){
    return (
      <div>
      <h1> Socket ID: {this.state.myValue}</h1>
      </div>
    );
  }
}
