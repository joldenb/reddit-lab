import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextPost from './components/textPost/TextPost';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">reddit</h1>
          <h2 className="App-blurb">The front page of the web</h2>
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={ TextPost }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;