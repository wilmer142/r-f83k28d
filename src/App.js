import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(){
		super();

		this.state = {
			number: 0
		}
	}

  render() {
    return (
      <div>
        <span className="value">{this.state.number}</span>
        <button onClick={this.incrementNumber.bind(this)} id="inc">Incrementa</button>
      </div>
    );
  }

  incrementNumber(){

  	this.setState({
  		number: (this.state.number + 1)
  	});
  }
}

export default App;
