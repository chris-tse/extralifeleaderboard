import React, { Component } from 'react';
import { Card, Label, List, Popup, Table } from 'semantic-ui-react';

class UserRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.displayName}</td>
                <td>${this.props.user.sumDonations}</td>
            </tr>
        );
    }
// =======
//   render() {
//     const { user } = this.props;
//     return (
//       <Table.Row>
//         <Table.Cell>
//           {user.isTeamCaptain && (
//             <Label color="teal" ribbon>
//               {' '}
//               Captain
//             </Label>
//           )}

//           {user.displayName}
//         </Table.Cell>
//         {this._renderUserPop()}
//       </Table.Row>
//     );
//   }

//   _renderUserPop() {
//     const { user } = this.props;

//     let trigger = <Table.Cell>{user.sumDonations}</Table.Cell>;
//     let percent = ((user.sumDonations / user.fundraisingGoal) * 100).toFixed(2);
//     let cardcontent = (
//       <Card>
//         <Card.Content>
//           <Card.Header>Donations Goals</Card.Header>
//         </Card.Content>
//         <Card.Content>
//           <List.Item>
//             <Label
//               horizontal
//               color={
//                 percent > 100
//                   ? 'green'
//                   : percent > 70
//                     ? 'teal'
//                       ? 'red'
//                       : 'red'
//                     : 'red'
//               }
//             >
//               Percent To Goal: {percent}%
//             </Label>
//           </List.Item>
//           <List.Item>
//             <Label horizontal>Goal: {user.fundraisingGoal}</Label>
//           </List.Item>
//           <List.Item>
//             <Label horizontal>Current Total: {user.sumDonations}</Label>
//           </List.Item>
//         </Card.Content>
//       </Card>
//     );

//     return (
//       <Popup trigger={trigger} content={cardcontent} position="top center" />
//     );
//   }
// >>>>>>> 069ec9906e221e2619e20d6e621bb46a916da84e
}

export default UserRow;
