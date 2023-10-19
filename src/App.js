
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Side from './component/Side';

function App() {
  const [opensidebar , setsidebar]=useState(false);

  const openside = () => {
    setsidebar(!opensidebar)
  }
  return (
    <div className="grid-container">
     <Header openside={openside} />
      <Side opensidebar={opensidebar} openside={openside}/>
      <Home/>
    </div>
  );
}

export default App;
