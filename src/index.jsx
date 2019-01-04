import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';
import Layout from './Layout';

const names = ['Stefano', 'Luiz', 'Isis'];

ReactDOM.render(
  <Layout>
    {names.map(name => <HelloWorld key={name} name={name} />)}
  </Layout>,
  document.getElementById('root'),
);
