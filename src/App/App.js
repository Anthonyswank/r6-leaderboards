import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import UpdateStats from '../UpdateStats/UpdateStats';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';
import Context from '../Context';
import sampleMembers from '../sampleMembers';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    console.log('Component Mounted!')
    this.gatherMembers()
  }

  gatherMembers() {
    this.setState({
      members: [
        ...this.state.members,
        sampleMembers
      ]
    })
  }

  renderNavigation() {
    return (
      <>
        <Route
          path="/"
          component={Navigation}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/update"
          component={UpdateStats}
        />
        <Route
          path="/login"
          component={Login}
        />
      </>
    )
  }

  render() {
    const contextValue = {
      members: this.state.members
    }
    return (
      <Context.Provider value={contextValue}>
      <div className="App">
        <header className="Header">
          <h1>
            <Link to="/">R6 Leaderboards</Link>
          </h1>
        </header>
        <nav className="Nav">
          {this.renderNavigation()}
        </nav>
        <main className="Main">
          <section>
            {this.renderMainRoutes()}
          </section>
        </main>
        <footer>
          <h3>Made by: Anthony Swank</h3>
        </footer>
      </div>
      </Context.Provider>
    );
  }

}

export default App;
