import React from 'react';
import Avatar from 'react-avatar';

const black = 'rgb(40, 44, 52)';
const gutter = '0.5em';
const styles = {
  column: {
    color: black,
    backgroundColor: 'white',
    borderRadius: '20px',
    margin: '40px 0',
  },
  name: {
    fontSize: 'calc(10px + 4vmin)',
  },
  row: {
    padding: gutter,
    margin: '0',
    borderTop: `2px solid ${black}`,
  },
  avatar: {
    padding: gutter,
  },
};

const UserCard = ({
  name,
  email,
  company,
  likes,
}) => (
  <div style={styles.column}>
    <div style={styles.row}>
      <Avatar
        email={email}
        name={name}
        style={styles.avatar}
        maxInitials="2"
        round
      />
      <span style={styles.name}>{name}</span>
    </div>
    <div style={styles.row}>{email}</div>
    <div style={styles.row}>
      {`works at: ${company}`}
    </div>
    <div style={styles.row}>
      &#10084;&nbsp;
      {likes}
    </div>
  </div>
);

const UsersList = ({ users }) => (
  <div>
    {users.map(user => <UserCard key={user.email} {...user} />)}
  </div>
);

export default UsersList;
