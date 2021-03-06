import React, { useEffect } from 'react';
import Home from './pages/Home';

const App = ({ route }) => {
  if (!route) {
    return (
      <div>404 Not Found</div>
    );
  } else {
    switch (route.name) {
      case 'home':
        return <Home />;
      default:
        return (<div>403 Unauthorized</div>);
    }
  }
};

export default App;