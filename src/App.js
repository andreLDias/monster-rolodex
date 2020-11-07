import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';
import monsters from './data/monsters.json'


// const myRequest = new Request("https://jsonplaceholder.typicode.com/users");
// var data = require('./monsters.json')

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    // fetch(myRequest)
    //   .then(response => response.json())
    //   .then(users => this.setState({ monsters: users }))
    this.setState({ monsters })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  randomize = () => {
    this.setState({ searchField: `${monsters[Math.floor(Math.random() * monsters.length)].name}` })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className='App'>
        <h1>Movies</h1>
        <SearchBox placeholder='search-movies' handleChange={this.handleChange} />
        <p>
          <button onClick={this.randomize}> Randomizer! </button>
        </p>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
