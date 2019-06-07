import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form method="post" action="http://localhost:5000/api/solutions">
          <div>
            <label htmlFor="ncs">NCS</label>
            <select name="ncs" id="ncs">
              <option value="NCD2">NCD2</option>
              <option value="2H-ND2">2H-ND2</option>
              <option value="2H-ND3">2H-ND3</option>
              <option value="ALT12">ALT12</option>
              <option value="ALT16">ALT16</option>
              <option value="NC2">NC2</option>
            </select>
          </div>
          <div>
            <label htmlFor="sequence">Sequence</label>
            <textarea name="sequence" id="sequence"/>
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <textarea name="stock" id="stock" />
          </div>
          <input type="submit" value="Upload" />
        </form>
      </header>
    </div>
  );
}

export default App;
