import React from 'react';
import './styles/App.css';
import NavBarComponent from './components/NavBarComponent'
import RoutesRender from './Routes';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <RoutesRender />
    </div>
  );
}

export default App;
