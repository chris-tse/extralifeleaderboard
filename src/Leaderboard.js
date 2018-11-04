import React, {Component} from 'react';
import UserRow from './UserRow';
class Leaderboard extends Component {
    render() {
        let {users, team} = this.props;
        const rows = [];
        
        users
            .sort((a, b) => parseFloat(a.sumDonations) <= parseFloat(b.sumDonations) ? 1 : -1)
            .map((user, index) => {
                // if (user.displayName.indexOf(filterText) === -1) {   return; }
                rows.push(<UserRow user={user} key={index}/>);
            });
            
        return (
            <div>
                <hr />
                <h1 className="press-start-2p text-center">{ team.name }</h1>
                <p className="press-start-2p text-center">>Team Total: ${team.sumDonations}</p>
                <h2 className="orbitron text-center">Leaderboard</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Donations</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default Leaderboard;