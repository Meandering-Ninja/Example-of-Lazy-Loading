import React from 'react';
import ReactPlayer from 'react-player';

import { Suspense, lazy } from 'react';
import './App.css';

function App() {
  const Lazy_Component = lazy(()=>import  ('./lazycomp'))
  return (
    <div className="App">
      <header className="App-header">

      <p>This is Parent Element</p>
      <Suspense fallback = {<div>Loading.......</div>}>
      <Lazy_Component/>
      </Suspense>
      </header>
    </div>
  );
}

export default App;
