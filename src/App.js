import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import Header from './components/header/Header';
import ProductView from './components/product_view/ProductView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ProductView/>
      </div>
    );
  }
}

export default App;
