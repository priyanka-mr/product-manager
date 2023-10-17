import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FormDialog from './components/FormDialog';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Product Management</h1>
      <ProductList />
      <FormDialog />
    </div>
  );
}

export default App;
