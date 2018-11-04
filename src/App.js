import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import { Container, Dimmer, Header, Input, Segment } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    let params = new URLSearchParams(document.location.search.substring(1));
    let teamID = params.get('team') || 40073;
    this.state = {
      users: [],
      teamID,
      team: {},
      filterString: '',
      loading: true
    };
  }

  async componentWillMount() {
    let users = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}/participants`);
    console.log('Initial get');
    for (let user of users.data) {
      user.sumDonations = user.sumDonations.toFixed(2);
    }

    let team = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}`);
    console.log('Initial get team');
    team.data.sumDonations = team.data.sumDonations.toFixed(2)

    this.setState({
      loading: false,
      users: users.data,
      team: team.data
    });
  }

  async componentDidMount() {
    this.interval = setInterval(async () => {
      let users = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}/participants`);
      console.log('Update users');
      for (let user of users.data) {
        user.sumDonations = user.sumDonations.toFixed(2);
      }
      this.setState({users: users.data});
      // let team = await axios.get(`https://www.extra-life.org/api/teams/${this.state.teamID}`);
      // console.log('Initial get team');
      // console.log(team);
      // team.data.sumDonations = team.data.sumDonations.toFixed(2)
      // this.setState({team: team.data});

    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _handleSearch = e => {
    this.setState({
      filterString: e.target.value
    });
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <Segment loading style={{ width: '100vw', height: '100vh' }}>
          <Dimmer active style={{ height: '100vh', width: '100%' }} />
        </Segment>
      );
    }

    return (

      <Container style={{ paddingBottom: '25px' }}>
        <Container style={{ textAlign: 'center', paddingTop: '25px' }} fluid>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={this._handleSearch}
          />
        </Container>
        <Leaderboard users={this._getFilteredUsers()} team={this.state.team}/>
      </Container>
    );
  }

  _getFilteredUsers() {
    const { users, filterString } = this.state;

    return users
      .filter(user => {
        if (filterString == '') {
          return user;
        }
        return (
          user.displayName.toLowerCase().includes(filterString.toLowerCase()) ||
          String(user.sumDonations).includes(filterString.toLowerCase())
        );
      })
      .sort((a, b) => (a.sumDonations <= b.sumDonations ? 1 : -1));
  }
}

export default App;
