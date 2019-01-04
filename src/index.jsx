import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';
import UsersList from './UsersList';

const users = [
  {
    name: 'Stefano Diem Benatti',
    email: 'stefano.diembenatti@toptal.com',
    company: 'toptal',
    likes: 'React/Ruby',
  },
  {
    name: 'Luiz Mitidiero',
    email: 'luiz.moraes@toptal.com',
    company: 'toptal',
    likes: 'Angular/JavaScript',
  },
  {
    name: 'Isis Sanchez',
    email: 'sanz.isis@gmail.com',
    company: 'self employed',
    likes: 'Kindle',
  },
];

ReactDOM.render(
  <Layout>
    <UsersList users={users} />
  </Layout>,
  document.getElementById('root'),
);
