import React, {Component} from 'react';

class UserRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.displayName}</td>
                <td>{this.props.user.sumDonations}</td>
            </tr>
        );
    }
}

export default UserRow;