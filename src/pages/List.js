import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
} 
const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name : '유재석'},
        {email: 'user2@gmail.com', name : 'user2'},
        {email: 'user3@gmail.com', name : 'user3'},
        {email: 'user4@gmail.com', name : 'user4'},
        {email: 'user5@gmail.com', name : 'user5'}
    ];

    return (
        <table>
            <thead>
                <th>name</th>
                <th>email</th>
            </thead>
            <tbody>
                {users.map(user => <User id={user} userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;