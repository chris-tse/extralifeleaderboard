import React, {Component} from 'react';
import UserRow from './UserRow';
class Leaderboard extends Component {
    render() {
        let users = this.props.users;
        const rows = [];
        
        users
            .sort((a, b) => a.sumDonations <= b.sumDonations ? 1 : -1)
            .map((user, index) => {
                // if (user.displayName.indexOf(filterText) === -1) {   return; }
                rows.push(<UserRow user={user} key={index}/>);
            });
            
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Donations</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default Leaderboard;