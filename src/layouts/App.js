import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../styles/App.css';
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="app">
          <div className="content-wrap">
            <nav>
              <Navigation />
            </nav>
            <main>
              <Main />
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router >
    );
  }
}

export default App;
