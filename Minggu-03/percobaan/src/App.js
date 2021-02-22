import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Footer from './Footer';
import List from './list';
import Hello from "./Component/HelloComponent";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
        <Footer judul='Halaman Footer' nama='Gusti Ananda' />
        <List />
        <Hello />
      </div>
    );
  }
}export default App;

 