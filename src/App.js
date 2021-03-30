import React from 'react';
import { Grommet } from 'grommet';
import './App.css';

function App() {

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <header className="App-header">
        <p>
          Test
        </p>
      </header>
    </Grommet>
  );
}

export default App;
