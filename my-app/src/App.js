
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor() {
    super() ;
    this.state = {
      contador: 0,
    };
    this.aumentarContador = this.aumentarContador.bind(this);
    this.reducirContador = this.reducirContador.bind(this);
  }

  aumentarContador() {
    if(this.state.contador < 10 ){
      this.setState({ contador: this.state.contador + 1 });
    }
  }

  reducirContador() {
    if (this.state.contador > 0) {
      this.setState({ contador: this.state.contador - 1});
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Contador</h3>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentarContador}>Incrementar</button>
        <br></br>
        <button onClick={() => this.reducirContador()}>Reducir</button>
      </header>
    </div>

    )
  }
}
