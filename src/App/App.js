import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import UpdateStats from '../UpdateStats/UpdateStats';
import Navigation from '../Navigation/Navigation';
import Context from '../Context';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      members: [],
    };
    this.handleAddMember = this.handleAddMember.bind(this)
    this.handleDeleteMember = this.handleDeleteMember.bind(this)
    this.handleUpdateMember = this.handleUpdateMember.bind(this)
  };

  componentDidMount() {
    console.log('Component Mounted!')
    fetch('https://salty-woodland-49219.herokuapp.com/members')
      .then(res => res.json())
      .then(res => res.sort((a, b) => {
        return b.number - a.number;
      }))
      .then(res => this.setState({members: res}));
  };

  handleSorting = (childData) => {
    this.setState({
      members: childData
    })
  };

  handleAddMember = member => {
    this.setState({
      members: [...this.state.members, member]
    })
  };

  // WIP function, not in use.
  handleUpdateMember = updatedMember => {
    this.setState({
      members: [...this.state.members, updatedMember]
    })
  };

  handleDeleteMember = name => {
    this.setState({
      members: this.state.members.filter(member => member.name !== name)
    })
  };

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
          render={(props) => (
            <Home {...props} members={this.state.members} handleSorting={this.handleSorting}/>
          )}
        />
        <Route
          path="/update"
          component={UpdateStats}
        />
        <Route
          path="/about"
          component={About}
        />
      </>
    )
  }

  render() {
    const contextValue = {
      members: this.state.members,
      addMember: this.handleAddMember,
      deleteMember: this.handleDeleteMember,
      updateMember: this.handleUpdateMember,
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
