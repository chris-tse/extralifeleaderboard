import React, { Component } from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import { Container, Dimmer, Header, Input, Segment } from 'semantic-ui-react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filterString: '',
      loading: true
    };
  }

  async componentWillMount() {
    let users = await axios.get(
      'https://www.extra-life.org/api/teams/40073/participants'
    );
    this.setState({ loading: false, users: users.data });
  }

  async componentDidMount() {
    this.interval = setInterval(async () => {
      let users = await axios.get(
        'https://www.extra-life.org/api/teams/40073/participants'
      );
      this.setState({ users: users.data });
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
          <Header as="h1">Extra Life Leaderboard</Header>
          <Input
            icon="search"
            placeholder="Search..."
            onChange={this._handleSearch}
          />
        </Container>
        <Leaderboard users={this._getFilteredUsers()} />
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
          user.displayName.toLowerCase().includes(filterString) ||
          String(user.sumDonations).includes(filterString)
        );
      })
      .sort((a, b) => (a.sumDonations <= b.sumDonations ? 1 : -1));
  }
}

export default App;
