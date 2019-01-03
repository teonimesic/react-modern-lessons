import React from 'react';

const styles = {
  wrapper: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif',
    ],
  },
  container: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
};

const AppContainer = ({ children }) => (
  <div style={styles.wrapper}>
    <div style={styles.container}>
      {children}
    </div>
  </div>
);

export default AppContainer;
