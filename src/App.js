import React, { Component } from 'react';
import axios from 'axios'
import Leaderboard from './Leaderboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  
  async componentWillMount() {
    let users = await axios.get('https://www.extra-life.org/api/teams/40073/participants');
    console.log('Initial get');
    this.setState({users: users.data});
  }
  
  async componentDidMount() {
    this.interval = setInterval(async () => {
      let users = await axios.get('https://www.extra-life.org/api/teams/40073/participants');
      console.log('Update users');
      this.setState({users: users.data});
    }, 15000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <Leaderboard users={this.state.users}/>
    );
  }
}

export default App;
