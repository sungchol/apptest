import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import Input from './pages/Input'
import Inputs from './pages/Inputs'
import List from './pages/List'
import SimpleForm from './pages/SimpleForm'

import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> | 
        <Link to='/counter'>Counter</Link> | 
        <Link to='/input'>Input</Link> |
        <Link to='/inputs'>Input</Link> |
        <Link to='/List'>List</Link> |
        <Link to='/SimpleForm'>SimpleForm</Link> |
      </nav>       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/input' element={<Input />} />
        <Route path='/inputs' element={<Inputs />} />
        <Route path='/List' element={<List />} />
        <Route path='/SimpleForm' element={<SimpleForm />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;

