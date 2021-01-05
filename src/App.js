import React, { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import './App.css';

class App extends Component {
  state = {
    vegeta: 100,
    goku: 100
  }

  reduceLife = (param, param2) => {
    if (param === 'Goku') {
      this.setState({
        vegeta: this.state.vegeta - param2
      })
    } else {
      this.setState({
        goku: this.state.goku - param2
      })
    }
  }


  
  render() {
    return (
      <div>
        <header>
          <h1>Goku Vs Vegeta</h1>
        </header>
        <div className="container text-center">
          <h2 style={{color: 'darkred', margin: '4vh'}}>Let the fight begin!</h2>
          <hr />
          <p className="description">Click on the HIT button to start the fight.</p>

          <div className="row">
            <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
            <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>
          </div>
        </div>

        <footer>
          <p className='copyr'>© 2020 Donkey Geek - App made by Fredy L</p>
        </footer>
      </div>
    );
  }
}

export default App;
