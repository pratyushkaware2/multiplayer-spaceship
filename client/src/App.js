import React, {Component} from "react";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      myValue : "not received"
    };
  }

  componentDidMount = () => {
    fetch("/backendTest").then(response => response.json()).then(response => {
      console.log(response);
      this.setState({
          myValue : response.data
        });
    });
  };

  render(){
    return (
      <div>
      <h1> Received {this.state.myValue}</h1>
      </div>
    );
  }
}
