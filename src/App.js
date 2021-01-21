import React, { Component } from 'react';
import Php from './Php';
import Js from './Js';
import './App.css';

class App extends Component {
  state = {
    php: 100,
    js: 100
  }

  reduceLife = (param, param2) => {
    if (param === 'Js') {
      this.setState({
        php: this.state.php - param2
      })
    } else {
      this.setState({
        js: this.state.js - param2
      })
    }
  }


  
  render() {
    return (
      <div>
        <header>
          <h1>JavaScript Vs Php</h1>
        </header>
        <div className="container text-center">
          <h2 style={{color: 'darkred', margin: '4vh'}}>Let the fight begin!</h2>
          <hr />
          <p className="description">Click on the HIT button to start the fight.</p>

          <div className="row">
            <Js name="JavaScript" life={this.state.js} reduceHandler={this.reduceLife}/>
            <Php name="Php" life={this.state.php} reduceHandler={this.reduceLife}/>
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
