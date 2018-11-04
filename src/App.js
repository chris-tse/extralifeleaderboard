import React, { Component } from 'react';
import axios from 'axios'
import Leaderboard from './Leaderboard';

class App extends Component {
  constructor() {
    super();
    let params = new URLSearchParams(document.location.search.substring(1));
    let teamID = params.get('team') || 40073;
    this.state = {
      users: [],
      teamID,
      team: {}
    }
  }
  
  async componentWillMount() {
    let users = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}/participants`);
    console.log('Initial get');
    for (let user of users.data) {
      user.sumDonations = user.sumDonations.toFixed(2);
    }
    this.setState({users: users.data});
    let team = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}`);
    console.log('Initial get team');
    console.log(team);
    team.data.sumDonations = team.data.sumDonations.toFixed(2)
    this.setState({team: team.data});
  }
  
  async componentDidMount() {
    this.interval = setInterval(async () => {
      let users = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}/participants`);
      console.log('Update users');
      for (let user of users.data) {
        user.sumDonations = user.sumDonations.toFixed(2);
      }
      this.setState({users: users.data});
      let team = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}`);
      console.log('Initial get team');
      console.log(team);
      team.data.sumDonations = team.data.sumDonations.toFixed(2)
      this.setState({team: team.data});
    }, 15000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <Leaderboard users={this.state.users} team={this.state.team}/>
    );
  }
}

export default App;
