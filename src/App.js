import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Lists from './Components/Lists'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <Input/>
        <Lists/>
      </div>
    );
  }
}

export default App;
