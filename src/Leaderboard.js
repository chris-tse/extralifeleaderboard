import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import UserRow from './UserRow';
class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    console.log('props', this.props);
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Donations</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users &&
            users.map((user, index) => <UserRow user={user} key={index} />)}
        </Table.Body>
      </Table>
    );
  }
}

export default Leaderboard;
