import Home from './pages';
import React from 'react';
import Navbar from './components/Navbar';
function App() {
  return (
  <React.Fragment>
    <Navbar/>
        <Home/>
  </React.Fragment>
  );
}

export default App;
