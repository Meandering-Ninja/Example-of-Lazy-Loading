import React from 'react';
import ReactPlayer from'react-player';

import { Suspense, lazy } from 'react';
import './App.css';

function App() {
  const Lazy_Component = lazy(()=>import  ('./lazycomp'))
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>This is Content Media Player using Video React</h1>
        <video width="750" height="500" controls><source src='../188861-883827797_tiny.mp4' ></source></video> */}
        {/* <h1>using React- Player</h1>
        <ReactPlayer url='https://www.youtube.com/watch?v=Z1QuBXVrUHU'  /> */}
      <p>This is Parent Element</p>
      <Suspense fallback = {<div>Loading.......</div>}>
      <Lazy_Component/>
      </Suspense>
      
      
      </header>
    </div>
  );
}

export default App;
