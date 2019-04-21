import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/routes.jsx';

function App() {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
