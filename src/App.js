import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* AppBody */}
      <div className="app__body">
        <Sidebar />
        {/* feed */}
        {/* wedget */}
      </div>       
    </div>
  );
}

export default App;
