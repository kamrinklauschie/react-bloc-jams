import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing'; 
import Library from './components/Library'; 
import Album from './components/Album'; 

class App extends Component {
  render() {
    return (
      <div className="App card text-center">
        <div className="card-header">
          <h1>Bloc Jams</h1>
          <span className="ion-md-musical-note"></span>
          <h5>Turn the music up!</h5>
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item"> 
              <a className="nav-link active" href="/">Home</a> 
            </li> 
            <li className="nav-item">
              <a className="nav-link active" href="/library">Library</a>
            </li>
          </ul>
        </div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;