import React from 'react';
import Page from './pages/home/index';
import Sumario from './components/Sumario';
import './css/styles.css';

function App() {
  return (
    <>
    <div className="app-container">
      <Page />
      <Sumario />
    </div>
    </>
  );
}

export default App;
